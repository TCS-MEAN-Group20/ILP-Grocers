import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpLoginService {

  constructor(public http:HttpClient) { }

  checkEmpDetails(emp:Emp):Observable<any>{
    return this.http.post("http://localhost:9090/api/emp/empSignIn",emp,
    {responseType:'text'});
  }

  changeEmpPassword(emp:Emp):Observable<any>{
    return this.http.put("http://localhost:9090/api/emp/changePassword",emp,
    {responseType:'text'});
  }

  
}
