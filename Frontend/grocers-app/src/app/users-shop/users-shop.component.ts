import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
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
    public prodService:ProductService,
    public cartSur:CartService
  ) {}

  products?:Array<any>
  user:String="User"
  cart?:any

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.user=data.user);
    this.prodService.getAllProducts().subscribe(
      result=>{this.products = result},
      error=>console.log(error)
    );
    this.cartSur.getCartInfoById({uname:this.user}).
    subscribe(result=>{
      this.cart = result;
    })
  }

  addToCart(product:any){
    //console.log(product);
    this.cart.products.push(product)
    this.cart.totalPrice = this.cart.totalPrice + product.price
    //console.log(this.cart)
    this.cartSur.updateCart(this.cart).
    subscribe(result=>{
      console.log(result);
    })
  }

}