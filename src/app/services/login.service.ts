import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  currentAccount$: BehaviorSubject<any> = new BehaviorSubject('');

  checkIfWalletConnected = async (window: any) => {
    try {
      if (!window.ethereum) {
        return alert('Please Install Metamask');
      }

      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if (accounts.length > 0) {
        this.currentAccount$.next(accounts[0]);
      } else {
        console.log('No accounts found');
      }
    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object found');
    }
  }

  connectWallet = async (window: any) => {
    try {
      if (!window.ethereum) {
        return alert('Please Install Metamask');
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      this.currentAccount$.next(accounts[0]);

    } catch (error) {
      console.log(error);

      throw new Error('No ethereum object found');
    }
  }
}
