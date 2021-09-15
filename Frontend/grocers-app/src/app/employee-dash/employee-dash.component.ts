import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { RequestService } from '../request.service';
// import { ProductService } from '../product.service';


@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {
  
  reqRef = new FormGroup({
    product: new FormControl(),
    action: new FormControl()
  })

  orderRef = new FormGroup({
    order: new FormControl(),
    status: new FormControl()
  })

  blockedRef = new FormGroup({
    user: new FormControl()
  })

  changeRef = new FormGroup({})

  msg?:string
  empUname?:string
  orderArray?:Array<any>
  productArray?:Array<any>

  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public empService:EmployeeService,
    public reqService:RequestService
    //public prodService:ProductService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.empUname=data.user);
    this.empService.getAllOrders().subscribe(
      result=>{this.orderArray = result},
      error=>console.log(error)
    );
    // TODO: Add product service
    // this.prodService.getAllProducts().subscribe(
    //   result=>{this.productArray = result},
    //   error=>console.log(error)
    // );
    console.log(this.orderArray);
  }

  sendReq(){
    let request = this.reqRef.value
    console.log(request)

    let temp = {productName:request.product, action:request.action}
    this.reqService.addRequest(temp).subscribe(
      result=>console.log(result),
      error=>console.log(error)
    );

    this.reqRef.reset()
  }

  updateOrder(){
    let orderObj = this.orderRef.value
    console.log(orderObj)

    let temp = {order:orderObj.order, status:orderObj.status}
    this.empService.updateOrderStatus(temp).subscribe(
      result=>console.log(result),
      error=>console.log(error)
    );
    this.orderRef.reset();
  }

  unblockUser(){
    let user = this.blockedRef.value
    console.log(user);

    this.blockedRef.reset()
  }

  changePassword(){
    this.router.navigate(["changePassword",this.empUname])
  }


}
