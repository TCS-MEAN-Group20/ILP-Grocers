import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';
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
  nameOrderRef = new FormGroup({
    uname: new FormControl()
  })

  constructor(public router:Router, 
              public loginSer:AdminService, 
              public prodSer:ProductService,
              public reqSer:RequestService, 
              public userSer:UserService) { }
  empMsg?:string;
  delEmpMsg?:string;
  delReqMsg?:string;
  prodMsg?:string;
  reqTable?:string;
  toggle = false;
  toggleRep= false;
  tableS = `<table><tr> <th>Product Name</th> <th>Action</th></tr>`;
  tableB?:string;
  tableE=`</tr></table>`;
  reqsArray?:Array<any>;
  orderArray?:Array<any>;
  user?:string;
  prodArray=[] as any;
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
  getOrderByName()
  {
    this.toggleRep = true;
    let info = this.nameOrderRef.value;
    this.user=info.uname;
    this.userSer.getUserOrders(info).subscribe(result=>
      {this.orderArray = result;
        if(this.orderArray)
        {
          for (let i = 0; i < this.orderArray.length; i++) {
            for (let j = 0; j < this.orderArray[i].products.length; j++) {
              this.prodArray.push(this.orderArray[i].products[j]);
            }
          }
        }
      }, error=>console.log(error));
      if(this.prodArray)
      {
        this.prodArray = [];
      }
      this.nameOrderRef.reset();
  }
  toggleReqs()
  {
    this.toggle = !this.toggle;
  }
  toggleReps(){
    this.toggleRep = !this.toggleRep;
  }
  logOut(){
    this.router.navigate(["adminLogin"])
  }
 
}
