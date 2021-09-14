import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

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
    public userSur:UserService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userUname=data.user);

    let user = {uname:this.userUname}
    //console.log(temp)
    this.userSur.getUserOrders(user).
    subscribe(result=>{
      this.orderArray = result;
    },
    error=>console.log(error));

    this.userSur.getUserDetailsById(user).
    subscribe(result=>{
      this.userJson = result;
      this.funds = this.userJson.funds;
      
    },
    error=>console.log(error));

  }

}
