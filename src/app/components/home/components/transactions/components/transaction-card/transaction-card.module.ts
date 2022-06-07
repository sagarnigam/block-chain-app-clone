import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionCardComponent } from './transaction-card.component';

@NgModule({
  declarations: [TransactionCardComponent],
  imports: [
    CommonModule
  ],
  exports: [TransactionCardComponent],
})
export class TransactionCardModule { }
