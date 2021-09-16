import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  }); 

  constructor(public adminSer:AdminService, public router:Router) { }
  
  msg?:string;

  ngOnInit(): void {}

  checkAdmin():void{
    let login = this.loginRef.value;
    this.adminSer.checkLoginDetails(login).
    subscribe(result=>{
      if(result =="Success")
      {
        this.router.navigate(["adminHome"]);
      }
      else
      {
        this.msg = result;
      }
    },error=>console.log(error))
    this.loginRef.reset();
  }
}
