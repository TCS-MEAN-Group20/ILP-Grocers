import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admind-index',
  templateUrl: './admind-index.component.html',
  styleUrls: ['./admind-index.component.css']
})
export class AdmindIndexComponent implements OnInit {
  addEmpRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    uname: new FormControl(),
    password: new FormControl()
  })

  delEmpRef = new FormGroup({
    uname: new FormControl()
  })

  constructor(public router:Router, public loginSer:LoginService) { }
  empMsg?:string;
  delEmpMsg?:string;
  ngOnInit(): void {
  }
  addProduct(){

  }
  addEmployee(){
    let addInfo = this.addEmpRef.value;
    this.loginSer.addEmployeeService(addInfo).subscribe(result=>this.empMsg=result,error=>console.log(error))
    this.addEmpRef.reset();
  }
  delEmployee(){
    let delInfo = this.delEmpRef.value;
    this.loginSer.delEmployeeService(delInfo,delInfo.uname).subscribe(result=>this.delEmpMsg=result,error=>console.log(error))
    this.delEmpRef.reset();
  }
  logOut(){
    this.router.navigate(["adminLogin"])
  }
}
