import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  addEmpRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    uname: new FormControl(),
    password: new FormControl()
  })

  delEmpRef = new FormGroup({
    uname: new FormControl()
  })
  addProdRef = new FormGroup({
    productName:new FormControl(),
    productPrice:new FormControl(),
    productQuantity:new FormControl(),
    productImg:new FormControl()
  });

  upProdRef = new FormGroup({
    productName:new FormControl(),
    productPrice:new FormControl(),
    productQuantity:new FormControl(),
    productImg:new FormControl()
  });

  delProdRef = new FormGroup({
    productName: new FormControl(),
    productQuantity: new FormControl()

  });

  constructor(public router:Router, public loginSer:LoginService) { }
  empMsg?:string;
  delEmpMsg?:string;
  reqTable?:string;
  tableS = `<table><tr> <th>Product Name</th> <th>Action</th></tr>`;
  tableB?:string;
  tableE=`</tr></table>`;
  reqsArray?:Array<any>
  flag = true;
  ngOnInit(): void {
  }
  addProduct(){
    console.log("add product");
  }
  updateProducts(){
    console.log("update product");
  }
  deleteProduct(){
    console.log("delete product");
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
  viewReqs(){
    this.loginSer.getRequests().subscribe(result=>{this.reqsArray = result;},error=>console.log(error));
  }
  logOut(){
    this.router.navigate(["adminLogin"])
  }
 
}
