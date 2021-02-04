import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
        order: new FormControl(),
        price: new FormControl()
      })
    ])
  });
  isFormValid: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.isFormValid = this.customerForm.valid
  }

  addCustomer(){
    console.log(this.customerForm.value)
  }

  get orders(): FormArray{
    return this.customerForm.get('orders') as FormArray;
  }

  addOrder(){
    this.orders.push(new FormGroup({
      order: new FormControl(),
      price: new FormControl()
    }))
  }

  deleteOrder(i: number){
    this.orders.removeAt(i)
  }

  
}
