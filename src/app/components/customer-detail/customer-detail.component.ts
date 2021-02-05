import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customerInfo = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getCustomerInfo().subscribe(data => {
      this.customerInfo.push(data['customer'])
    })
  }

  editCustomer(){
    this.router.navigate(['/edit-customer']);
  }



}
