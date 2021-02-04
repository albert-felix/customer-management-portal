import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';
import { CustomerDetailComponent } from '../customer-detail/customer-detail.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers : [];

  constructor(private customerService: CustomerService, 
    private router: Router) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data['customers']
    })
  }

  getCustomerInfo(index: number){
    this.customerService.index = index;
    this.router.navigate(['/customer-detail/'+index]);
  }

}

