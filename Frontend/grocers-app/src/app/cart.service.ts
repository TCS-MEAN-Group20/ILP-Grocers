import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http:HttpClient) { }

  getCartInfoById(cart:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/cart/getCartDetails",cart)
  }
  updateCart(cart:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/cart/updateCartOnItem",cart)
  }
  addCart(cart:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/cart/addCartUponNewUser",cart,
    {responseType:'text'})
  }
}
