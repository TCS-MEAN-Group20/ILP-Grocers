import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  checkLoginDetails(login:Login):Observable<any>{
    return this.http.post("http://localhost:9090/api/admin/signIn",login,{responseType:'text'})
  }

  addEmployeeService(login:Login):Observable<any>{
    return this.http.post("http://localhost:9090/api/emp/storeEmp",login,{responseType:'text'})
  }

  delEmployeeService(login:Login,uname:any):Observable<any>{
    return this.http.delete("http://localhost:9090/api/emp/deleteEmp/" + uname, login)
  }
}
