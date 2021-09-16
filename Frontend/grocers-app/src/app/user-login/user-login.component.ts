import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';
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
  updateUser?:any
  
  constructor(
    public userSur:UserService,
    public ticketSur:TicketService,
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  checkUser(){
    this.msg = "";
    let login = this.userRef.value
    //console.log(login);
    this.userSur.signInUser(login).
    subscribe(result=>{
      //console.log(result)
      if(result == "success"){
        this.ticketSur.getTickets().
        subscribe(result=>{
          //console.log(result);
          for(let r of result){
            if(login.uname == r.username){
              this.msg = "User is locked"
            }
          }
          if(this.msg != "User is locked"){

            this.userSur.getUserDetailsById({uname:login.uname}).
            subscribe(result=>{
              this.updateUser = result
            })
            this.updateUser.attempts = 0

            this.userSur.updateUserDetails(this.updateUser).
            subscribe(result=>{
              //console.log(result);
          })

            this.router.navigate(["userShop",login.uname])
            //console.log("success");

          }
        })
        
      }
      else{
        if(result == "Username not Found"){
          ////////////USERNAME NOT FOUND
          this.msg = result;
        }
        else{
          /////////////////USERNAME FOUND NEED TO ADD ONE ATTEMPT TO USER
          this.userSur.getUserDetailsById({uname:login.uname}).
          subscribe(result=>{
            this.updateUser = result
            this.updateUser.attempts = this.updateUser.attempts + 1
            if(this.updateUser.attempts >= 3){
              //////////Lock User
              let ticket = {username:this.updateUser.uname, reason:"SYSTEM: AUTO-LOCK"}
              this.ticketSur.blockUser(ticket).
              subscribe(result=>{
                console.log(result);
              })
              this.msg = "User " + this.updateUser.uname + " is locked"
            }
            else{
              this.userSur.updateUserDetails(this.updateUser).
              subscribe(result=>{
                console.log(result);
              })
              this.msg = "user " + this.updateUser.uname + " has " + (3-this.updateUser.attempts) + " before being locked";
            }
          })
        }
      }
    })
    this.userRef.reset()
  }

}
