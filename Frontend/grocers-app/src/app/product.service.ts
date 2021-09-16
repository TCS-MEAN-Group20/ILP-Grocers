import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this.http.get("http://localhost:9090/api/product/getAllProducts");
  }

  updateProduct(product:any):Observable<any>{
    return this.http.put("http://localhost:9090/api/product/updateProduct",product)
  }

  addProduct(product:any):Observable<any>{
    return this.http.post("http://localhost:9090/api/product/addProduct",product,{responseType:'text'})
  }

  delProduct(info:any,name:any):Observable<any>{
    return this.http.delete("http://localhost:9090/api/product/deleteProduct/" + name, info)
  }

}
