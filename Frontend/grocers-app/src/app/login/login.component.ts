import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  }); 
  constructor(public loginSer:LoginService, public router:Router) { }
  msg?:string;
  ngOnInit(): void {
  }

  checkAdmin():void{
    let login = this.loginRef.value;
    this.loginSer.checkLoginDetails(login).
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
