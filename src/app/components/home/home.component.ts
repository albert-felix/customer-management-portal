import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })
  isLoggedIn: boolean = false;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.isLoggedIn = this.customerService.isLoggedIn;
  }

  login(){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const body = this.loginForm.value;
    this.customerService.loginUser(body, headers).subscribe(data => {
      if(data['status'] === 'SUCCESS'){
        if(data['isManager']){
          this.customerService.managerLogged()
        }
        this.customerService.userLogged()
        alert("Successfully Logged In")
        // this.router.navigate(['/customer-list'])
      }
      else{
        alert("Something went wrong")
      }
    })
  }

}
