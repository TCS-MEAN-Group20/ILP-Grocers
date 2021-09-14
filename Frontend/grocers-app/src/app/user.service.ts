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
  getUserDetailsById(user:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/user/getUserDetailsById",user);
  }
}