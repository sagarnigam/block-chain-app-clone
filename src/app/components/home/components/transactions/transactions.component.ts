import { Component, OnInit } from '@angular/core';

import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  transactions$ = this.transactionService.transactions$

  constructor(private transactionService: TransactionService, private window: Window,) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactions(this.window);
  }
}
