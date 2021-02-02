import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  a = ['male','male', 'female', 'male', 'female','female', 'male', 'female']

  constructor() { }

  ngOnInit(): void {
  }

}
