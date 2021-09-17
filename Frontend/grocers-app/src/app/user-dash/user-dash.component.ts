import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  userUname?:string
  orderArray?:Array<any>
  funds?:number
  userJson?:any
  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public userSur:UserService,
    public orderSur:OrderService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userUname=data.user);

    let user = {uname:this.userUname}
    
    //console.log(temp)
    this.orderSur.getOrderByName(user).
    subscribe(result=>{
      this.orderArray = result;
      console.log(result);
      
      //console.log(this.orderArray)
    },
    error=>console.log(error));

    this.userSur.getUserDetailsById(user).
    subscribe(result=>{
      this.userJson = result;
      this.funds = this.userJson.funds;
      
    },
    error=>console.log(error));

    
  }

  fundsRef = new FormGroup({
    amount: new FormControl()
  })

  changeRef = new FormGroup({});

  addFunds(){
    let fundsToAdd = this.fundsRef.value
    fundsToAdd.amount = parseFloat(fundsToAdd.amount)
    //console.log(fundsToAdd);
    this.userJson.funds = this.userJson.funds + fundsToAdd.amount;


    this.userSur.updateUserDetails(this.userJson).
    subscribe(result=>{
      this.funds = this.userJson.funds;
    },
    error=>console.log(error))

    this.fundsRef.reset();
  }

  changeRoute(){
    this.router.navigate(["editUserProfile",this.userJson.uname])
  }


}
