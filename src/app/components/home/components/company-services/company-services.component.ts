import { Component, OnInit } from '@angular/core';

import { COMPANY_SERVICES_DATA } from './constants/company-static-data';
import { CompanyService } from './models/company-services.model';

@Component({
  selector: 'app-company-services',
  templateUrl: './company-services.component.html',
  styleUrls: ['./company-services.component.scss']
})
export class CompanyServicesComponent implements OnInit {

  servicesData: CompanyService[] = COMPANY_SERVICES_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
