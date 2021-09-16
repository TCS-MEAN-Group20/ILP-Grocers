import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-users-shop',
  templateUrl: './users-shop.component.html',
  styleUrls: ['./users-shop.component.css']
})
export class UsersShopComponent implements OnInit {

  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public prodService:ProductService
  ) {}

  products?:Array<any>
  user:String="User"

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.user=data.user);
    this.prodService.getAllProducts().subscribe(
      result=>{this.products = result},
      error=>console.log(error)
    );
  }

  addToCart(product:any){
    console.log(product.name);
  }

}