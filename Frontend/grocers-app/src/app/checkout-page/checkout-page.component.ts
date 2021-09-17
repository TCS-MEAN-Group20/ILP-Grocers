import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  userUname?:string;
  cartJson?:any;
  userJson?:any;
  products?:Array<any>;
  totalPrice?:number;
  badMsg?:string;
  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public cartSur:CartService,
    public userSur:UserService,
    public productSur:ProductService,
  ) { }

  dummyRef = new FormGroup({})

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userUname=data.user);
    
    let user = {uname:this.userUname}
    this.cartSur.getCartInfoById(user).
    subscribe(result=>{
      this.cartJson = result;
      this.products = this.cartJson.products;
      this.totalPrice = this.cartJson.totalPrice;
      //console.log(this.totalPrice);
    })
    this.userSur.getUserDetailsById(user).
    subscribe(result=>{
      this.userJson = result;
    })

  }

  checkOut(){
    if(this.userJson.funds < this.cartJson.funds){
      this.badMsg = "Not enough funds. Please add more in the User Dashboard"
    }
    else{
    
      this.userJson.funds = this.userJson.funds - this.cartJson.totalPrice;
      this.userSur.updateUserDetails(this.userJson).
      subscribe(result=>{
        //console.log(result);
      })
    
    
    
      for(let p of this.cartJson.products){
        p.quantity = p.quantity - 1
      
        this.productSur.updateProduct(p).
        subscribe(result=>{
          //console.log(result)
        })
      }
    
      let newOrder = 
      {
        products:this.cartJson.products,
        price:this.totalPrice,
        uname:this.userUname,
        status:"Ordered"
      }
      this.userSur.addOrder(newOrder).
      subscribe(result=>{
        //console.log(result);
      })
      
    
      let tempCar = {uname:this.userUname, products:[],totalPrice:0}
      //console.log(tempCar);
      this.cartSur.updateCart(tempCar).
      subscribe(result=>{
        //console.log(result);
      })
      this.router.navigate(["purchaseSuccessful",this.userJson.uname])
    }
  }

}
