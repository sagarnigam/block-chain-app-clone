import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsComponent } from './transactions.component';
import { TransactionCardModule } from './components/transaction-card/transaction-card.module';

@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionCardModule,
  ],
  exports: [TransactionsComponent],
})
export class TransactionsModule { }
