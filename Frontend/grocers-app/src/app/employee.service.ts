import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  getAllOrders():Observable<any>{
    return this.http.get("http://localhost:9090/api/order/getAllOrders");
  }

  updateOrderStatus(emp:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/order/updateOrderStatus",emp,
    {responseType:'text'});
  }
}

