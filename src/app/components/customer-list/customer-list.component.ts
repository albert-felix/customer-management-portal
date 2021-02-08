import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers : any[] = [];
  search: string = '';
  page: number = 1;
  itemsPerPage: number = 6;
  start: string = ''

  constructor(private customerService: CustomerService, 
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomerList()
  }

  getCustomerList(){
        this.customerService.getCustomers().subscribe(data => {
          this.customers = data['customers']
    })
  }

  getCustomerInfo(index: number){
    let id = this.customers[((this.page-1) *this.itemsPerPage) + index]['id']
    this.customerService.id = id
    this.router.navigate(['/customer-detail/'+id]);
  }

  handlePageChange(event){
    this.page = event;
  }

  searchCustomer(){
    this.search = this.start
  }

}

