import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  a = [1,2,3,4,5,6,7,8]

  constructor() { }

  ngOnInit(): void {
  }

}
