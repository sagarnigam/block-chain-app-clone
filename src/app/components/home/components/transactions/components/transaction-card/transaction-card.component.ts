import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent {
  @Input() transaction: any;

  shortenAddress = (address: any) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
}
