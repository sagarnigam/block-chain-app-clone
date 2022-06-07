import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject, take, tap } from 'rxjs';

import { LoginService } from '../../../services/login.service';
import { SMART_CONTRACT_ADDRESS, SMART_CONTRACT_ABI } from '../../../utils/smart-contract.constant';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  isTransactionLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  transactions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private loginService: LoginService) { }

  getEthereumContract = (ethereum: any): any => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(SMART_CONTRACT_ADDRESS, SMART_CONTRACT_ABI, signer);

    return transactionContract;
  }

  sendTransaction = async (transactionDetails: any, window: any) => {
    try {
      const { recieverAddress, amount, keyword, message } = transactionDetails;
      const transactionContract = this.getEthereumContract(window.ethereum);
      const parsedAmount = ethers.utils.parseEther(amount);
      let currentAccount = ''; 

      this.loginService.currentAccount$.pipe(
        take(1),
        tap((res) => currentAccount = res),
      ).subscribe();

      await window.ethereum.request(
        {
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: recieverAddress,
              gas: '0x5208',
              value: parsedAmount._hex,
            }
          ]
        }
      );

      const transactionHash = await transactionContract.addToBlockchain(recieverAddress, parsedAmount, message, keyword);

      this.isTransactionLoading$.next(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      this.isTransactionLoading$.next(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = transactionContract.getTransactionCount();

      console.log(transactionCount);

    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object found');
    }
  }

  getAllTransactions = async (window: any) => {
    try {
      if (!window.ethereum) {
        return alert('Please Install Metamask');
      }

      const transactionContract = this.getEthereumContract(window.ethereum);
      const transactions = await transactionContract.getAllTransactions();

      const structuredTransactions = transactions.map((transaction: any) => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp?.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 18)
      }));

      this.transactions$.next(structuredTransactions);
    } catch (error) {
      console.log(error);
    }
  }
}
