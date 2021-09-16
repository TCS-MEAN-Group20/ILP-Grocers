import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { ProductService } from '../product.service';
import { RequestService } from '../request.service';

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
    name:new FormControl(),
    price:new FormControl(),
    quantity:new FormControl(),
    imgUrl:new FormControl()
  });

  upProdRef = new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    quantity:new FormControl(),
    imgUrl:new FormControl()
  });

  delProdRef = new FormGroup({
    name: new FormControl()
  });
  delReqRef = new FormGroup({
    name: new FormControl()
  })

  constructor(public router:Router, public loginSer:AdminService, public prodSer:ProductService, public reqSer:RequestService) { }
  empMsg?:string;
  delEmpMsg?:string;
  delReqMsg?:string;
  prodMsg?:string;
  reqTable?:string;
  toggle = false;
  tableS = `<table><tr> <th>Product Name</th> <th>Action</th></tr>`;
  tableB?:string;
  tableE=`</tr></table>`;
  reqsArray?:Array<any>
  flag = true;
  
  ngOnInit(): void {
  }
  addProduct(){
    let addInfo = this.addProdRef.value;
    this.prodSer.addProduct(addInfo).subscribe(result=>this.prodMsg=result,error=>console.log(error));
    this.addProdRef.reset();
  }
  updateProducts(){
    let info = this.upProdRef.value;
    this.prodSer.updateProduct(info).subscribe(result=>this.prodMsg=result,error=>console.log(error));
    this.upProdRef.reset();
  }
  deleteProduct(){
    console.log("delete product");
    let info = this.delProdRef.value;
    this.prodSer.delProduct(info,info.name).subscribe(result=>this.prodMsg=result,error=>console.log(error));
    this.delProdRef.reset();
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
    this.toggle = true;
    this.loginSer.getRequests().subscribe(result=>{this.reqsArray = result;},error=>console.log(error));
  }
  delRequest(){
    let info = this.delReqRef.value;
    this.reqSer.delRequestService(info,info.name).subscribe(result=>this.delReqMsg=result,error=>console.log(error))
    this.delReqRef.reset();
  }
  toggleReqs()
  {
    this.toggle = !this.toggle;
  }
  logOut(){
    this.router.navigate(["adminLogin"])
  }
 
}
