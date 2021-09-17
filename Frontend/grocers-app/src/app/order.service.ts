import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http:HttpClient) { }

  addOrder(order:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/order/addOrder",order,
    {responseType:'text'})
  }
  getOrderByName(order:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/order/getAllOrdersById", order)
  }
}
