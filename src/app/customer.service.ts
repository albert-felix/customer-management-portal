import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private REST_API = "http://localhost:3000";
  id: number;
  isLoggedIn: boolean = false;
  isManager: boolean = false;

  constructor(private http: HttpClient) { }

  public getCustomers(){
    return this.http.get(this.REST_API + "/customer/list")
  }

  public getCustomerInfo(){
    return this.http.get(this.REST_API + "/customer/info/" + this.id)
  }

  public addCustomer(body, headers){
    return this.http.post(this.REST_API + "/customer/add", body, {headers})
  }

  public editCustomer(body, headers){
    return this.http.post(this.REST_API + "/customer/edit/" + this.id, body, {headers})
  }

  public loginUser(body, headers){
    return this.http.post(this.REST_API + "/user/login", body, {headers})
  }

  public userLogged(){
    this.isLoggedIn = true;
  }

  public managerLogged(){
    this.isManager = true;
  }
  
}
