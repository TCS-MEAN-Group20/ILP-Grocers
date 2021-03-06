import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  empRef = new FormGroup({
    uname: new FormControl(),
    password: new FormControl()
  })
  msg?:string
  constructor(
    public empService:EmployeeService,
    public router:Router) { }

  ngOnInit(): void {
  }

  checkEmp(){
    let login = this.empRef.value
    this.empService.checkEmpDetails(login).
    subscribe(result=>{
      if(result == "success"){
        //console.log(login.password);
        if(login.password == "welcome123"){
          //console.log("hit");
          this.router.navigate(["changePassword",login.uname])
        }
        else{
          this.router.navigate(["empHome",login.uname])
        }
      }
      else{
        this.msg = result;
      }
    },
    error=>console.log(error));
    this.empRef.reset();
    //this.empSur.checkEmpDetails()
  }

}
