import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  getUserOrders(user:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/order/getAllOrdersById",user);
  }
  addOrder(order:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/order/addOrder",order,
    {responseType:'text'})
  }
  getUserDetailsById(user:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/getUserDetailsById",user);
  }
  updateUserDetails(user:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/user/updateUserFunds",user);
  }
  signInUser(user:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/userSignIn",user,
    {responseType:'text'});
  }
  addUser(user:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/createUser",user,
    {responseType:'text'})
  }

}
