import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent implements OnInit {
  userUname?:string;
  userJson?:any;
  fname?:string;
  lname?: string
  phone?:string
  address?:string
  password?: string

  profileRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    password: new FormControl(),
  })
  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public userSur:UserService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userUname=data.user);
    let user = {uname:this.userUname};

    this.userSur.getUserDetailsById(user).
    subscribe(result=>{
      this.userJson = result;
      this.fname = this.userJson.fname
      this.lname = this.userJson.lname
      this.phone = this.userJson.phone
      this.address = this.userJson.address
      this.password = this.userJson.password
    },
    error=>console.log(error));
  }

  editUser(){
    let details = this.profileRef.value;
    //console.log(details);
    let toDb = {uname:this.userJson.uname, 
      fname:this.userJson.fname,
      lname:this.userJson.lname,
      phone:this.userJson.phone,
      address:this.userJson.address,
      password:this.userJson.password,
      funds:this.userJson.funds}

    if(details.fname != null){
      toDb.fname = details.fname
    }
    if(details.lname != null){
      toDb.lname = details.lname
    }
    if(details.phone != null){
      toDb.phone = details.phone
    }
    if(details.address != null){
      toDb.address = details.address
    }
    if(details.password != null){
      toDb.password = details.password
    }

    this.userSur.updateUserDetails(toDb).
    subscribe(result =>{
      this.fname = toDb.fname
      this.lname = toDb.lname
      this.phone = toDb.phone
      this.address = toDb.address
      this.password = toDb.password
    },
    error=>console.log(error))

    this.userSur.getUserDetailsById(toDb).
    subscribe(result=>{
      this.userJson = result;
    },
    error=>console.log(error));

    this.profileRef.reset()
  }

}
