import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http'
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    age: new FormControl(""),
    gender: new FormControl(""),
    location: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    orders: new FormArray([])
  });
  isFormValid: boolean;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.setCustomerInfo()
  }


  ngDoCheck(){
    this.isFormValid = this.customerForm.valid
  }

  get orders(): FormArray{
    return this.customerForm.get('orders') as FormArray;
  }

  addOrder(){
    this.orders.push(new FormGroup({
      item: new FormControl(),
      price: new FormControl()
    }))
  }

  deleteOrder(i: number){
    this.orders.removeAt(i)
  }

  setCustomerInfo(){
    this.customerService.getCustomerInfo().subscribe(data => {
      const customer = data['customer']
      const orders = customer.orders
      const ordersArray = new FormArray([]);
      orders.forEach(order => {
        const orderGroup = new FormGroup({
          item: new FormControl(order.item),
          price: new FormControl(order.price)
        })
        ordersArray.push(orderGroup)
      })

      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        age: new FormControl(customer.age),
        gender: new FormControl(customer.gender),
        location: new FormControl(customer.location),
        email: new FormControl(customer.email),
        phone: new FormControl(customer.phone),
        orders: ordersArray
      })
    })
  }

  editCustomer(){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const body = this.customerForm.value;
    this.customerService.editCustomer(body, headers).subscribe(data => {
      if(data['status'] == 'SUCCESS'){
        alert("Customer Information Updated Successfully")
        this.router.navigate(['/customer-list'])
      }
      else{
        alert("Something Went Wrong")
      }
    })
  }

}
