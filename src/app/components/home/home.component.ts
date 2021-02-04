import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginForm.value)
  }

}
