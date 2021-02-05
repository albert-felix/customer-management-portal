import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;
  isManager: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.isLoggedIn = this.customerService.isLoggedIn;
    this.isManager = this.customerService.isManager;
  }

  logout(){
    this.customerService.isLoggedIn = false;
    this.customerService.isManager = false;
    this.router.navigate(['/home'])
  }

}
