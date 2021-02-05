import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {HttpHeaders} from '@angular/common/http'
import { CustomerService } from 'src/app/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(""),
    gender: new FormControl(""),
    location: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    orders: new FormArray([
      new FormGroup({
        item: new FormControl(),
        price: new FormControl()
      })
    ])
  });
  isFormValid: boolean;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.isFormValid = this.customerForm.valid
  }

  addCustomer(){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const body = this.customerForm.value;
    this.customerService.addCustomer(body, headers).subscribe(data => {
      if(data['status'] === "SUCCESS"){
        alert("Customer Successfully Added")
      }
      else{
        alert("Something Went Wrong")
      }
    })
    console.log(this.customerForm.value)
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

  
}
