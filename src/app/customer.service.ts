import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private REST_API = "http://localhost:3000";
  index: number;

  constructor(private http: HttpClient) { }

  public getCustomers(){
    return this.http.get(this.REST_API + "/customer/list")
  }

  public getCustomerInfo(){
    return this.http.get(this.REST_API + "/customer/info/" + this.index)
  }
  
}
