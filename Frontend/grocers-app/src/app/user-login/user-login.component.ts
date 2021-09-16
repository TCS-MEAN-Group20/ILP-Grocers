import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userRef = new FormGroup({
    uname: new FormControl(),
    password: new FormControl()
  })
  msg?:string
  
  constructor(
    public userSur:UserService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.userRef.value
    //console.log(login);
    this.userSur.signInUser(login).
    subscribe(result=>{
      //console.log(result)
      if(result == "success"){
        this.router.navigate(["userShop",login.uname])
        //console.log("success");
      }
      else{
        if(result == "Username not Found"){
          ////////////USERNAME NOT FOUND
          this.msg = result;
        }
        else{
          /////////////////USERNAME FOUND NEED TO ADD ONE ATTEMPT TO USER
          this.msg = result;
        }
      }
    })

    this.userRef.reset()
  }

}
