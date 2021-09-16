import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  constructor(
    public userSur:UserService,
    public cartSur:CartService,
    public router:Router
  ) { }
  msg?:string
  userRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email:new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    password: new FormControl(),
  })

  ngOnInit(): void {
  }

  signUp(){
    let user = this.userRef.value;
    if(user.fname==null || user.lname==null || user.email==null 
      || user.phone==null || user.address==null || user.password==null){
        this.msg = "Please Fill out all of the above forms"
      }
    else{
      let index = user.email.indexOf('@')
      if(index == -1){
        this.msg = "invalid email"
      }
      else{
        let uname = user.email.substring(0,index)
        //console.log(uname);
        let toDb = 
        {
          fname:user.fname,
          lname:user.lname,
          email:user.email,
          phone:user.phone,
          address:user.address,
          funds:200,
          uname:uname,
          password:user.password
        }
        this.userSur.addUser(toDb).
        subscribe(result=>{
          if(result != "success"){
            this.msg = result
          }
          //console.log(result);
          
        })

        let cart = {products:[], uname:uname, totalPrice:0}
        this.cartSur.addCart(cart).
        subscribe(result=>{
          //console.log(result)
          this.router.navigate(["userLogin"])
        })
      }
    }
    this.userRef.reset()
  }
}
