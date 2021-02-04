import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerInfo = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomerInfo().subscribe(data => {
      this.customerInfo.push(data['customer'])
    })

  }



}
