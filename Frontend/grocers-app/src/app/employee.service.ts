import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }

  checkEmpDetails(emp:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/emp/empSignIn",emp,
    {responseType:'text'});
  }

  changeEmpPassword(emp:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/emp/changePassword",emp,
    {responseType:'text'});
  }

  getAllOrders():Observable<any>{
    return this.http.get("http://localhost:9090/api/order/getAllOrders");
  }

  updateOrderStatus(emp:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/order/updateOrderStatus",emp,
    {responseType:'text'});
  }
}

