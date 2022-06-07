import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CompanyServicesModule } from './components/company-services/company-services.module';
import { TransactionsModule } from './components/transactions/transactions.module';

import { LoaderModule } from '../../shared/components/loader/loader.module';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CompanyServicesModule,
    HomeRoutingModule,
    LoaderModule,
    ReactiveFormsModule,
    TransactionsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
