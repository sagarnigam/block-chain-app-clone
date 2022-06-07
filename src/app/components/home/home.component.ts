import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { LoginService } from '../../services/login.service';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  currentAccount$ = this.loginService.currentAccount$;
  isTransactionLoading$ = this.transactionService.isTransactionLoading$;

  transactionForm = new FormGroup({
    recieverAddress: new FormControl(''),
    amount: new FormControl('0'),
    keyword: new FormControl(''),
    message: new FormControl(''),
  });

  companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  constructor(
    private window: Window,
    private loginService: LoginService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.loginService.checkIfWalletConnected(this.window);
  }

  connectWallet(): void {
    this.loginService.connectWallet(this.window);
  }

  submitFormValue(): void {
    this.transactionService.sendTransaction(this.transactionForm.value, this.window);
  }

}
