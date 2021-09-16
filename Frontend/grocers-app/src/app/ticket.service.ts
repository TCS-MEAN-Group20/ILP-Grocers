import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(public http:HttpClient) { }

  getTickets():Observable<any>{
    return this.http.get("http://localhost:9090/api/ticket/getTickets");
  }

  unblockUser(username:any):Observable<any> {
    return this.http.delete("http://localhost:9090/api/ticket/unblockUser/"+username,
    {responseType:'text'});
  }
  blockUser(user:any):Observable<any> {
    return this.http.post("http://localhost:9090/api/ticket/blockUser",user,
    {responseType:'text'})
  }
}
