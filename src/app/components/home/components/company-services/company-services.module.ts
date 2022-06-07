import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyServicesComponent } from './company-services.component';
import { ServiceCardModule } from './components/services-card/service-card.module';

@NgModule({
  declarations: [
    CompanyServicesComponent
  ],
  imports: [
    CommonModule,
    ServiceCardModule,
  ],
  exports: [CompanyServicesComponent],
})
export class CompanyServicesModule { }
