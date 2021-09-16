import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http:HttpClient) { }

  addRequest(req:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/req/addRequest",req,
    {responseType:'text'});
  }

  delRequestService(login:any,productName:any):Observable<any>{
    return this.http.delete("http://localhost:9090/api/req/delRequest/" + productName, login)
  }
}


