import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  user?:string
  changeRef = new FormGroup({
    password: new FormControl()
  })
  msg?:string
  constructor(
    public activateRoute:ActivatedRoute,
    public empService:EmployeeService,
    public router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.user=data.user);
  }

  changePass(){
    let login = this.changeRef.value
    let temp = {uname:this.user, password:login.password}
    //console.log(temp);
    this.empService.changeEmpPassword(temp).
    subscribe(result=>{
      this.msg = result
      if(result == "Password Updated"){
        this.router.navigate(["empHome",this.user])
      }
      else{
        this.msg = "Error!"
      }
    },
    error=>console.log(error));
    this.changeRef.reset();
  }

}
