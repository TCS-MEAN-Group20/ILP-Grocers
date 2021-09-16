import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }
  checkLoginDetails(login:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/admin/signIn",login,{responseType:'text'})
  }

  addEmployeeService(login:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/emp/storeEmp",login,{responseType:'text'})
  }

  delEmployeeService(login:any,uname:any):Observable<any>{
    return this.http.delete("http://localhost:9090/api/emp/deleteEmp/" + uname, login)
  }

  getRequests():Observable<any>{
    return this.http.post("http://localhost:9090/api/req/getRequests","temp")
  }
}
