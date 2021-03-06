import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { RequestService } from '../request.service';
import { TicketService } from '../ticket.service';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';


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

  changeRef = new FormGroup({})

  ticketMsg?:string
  empUname?:string
  orderArray?:Array<any>
  productArray?:Array<any>
  ticketsArray?:Array<any>

  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public empService:EmployeeService,
    public reqService:RequestService,
    public ticketService:TicketService,
    public prodService:ProductService,
    public userSur:UserService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.empUname=data.user);
    this.empService.getAllOrders().subscribe(
      result=>{this.orderArray = result},
      error=>console.log(error)
    );
    this.prodService.getAllProducts().subscribe(
      result=>{this.productArray = result},
      error=>console.log(error)
    );
  }

  sendReq(){
    let request = this.reqRef.value

    let temp = {productName:request.product, action:request.action}
    this.reqService.addRequest(temp).subscribe(
      result=>console.log(result),
      error=>console.log(error)
    );

    this.reqRef.reset()
  }

  updateOrder(){
    let orderObj = this.orderRef.value

    let temp = {order:orderObj.order, status:orderObj.status}
    this.empService.updateOrderStatus(temp).subscribe(
      result=>console.log(result),
      error=>console.log(error)
    );
    this.orderRef.reset();
  }

  viewTickets(){
    this.ticketService.getTickets().subscribe(
      result=>{
        this.ticketsArray = result;
        if(this.ticketsArray?.length==0){
          this.ticketMsg = "No active tickets"
        }else{
          this.ticketMsg = ""
        }
      },
      error=>console.log(error));
  }

  unblockUser(username:any){

    this.ticketService.unblockUser(username).subscribe(
      result=>{this.viewTickets();},
      error=>console.log(error)
    );
    let user = {uname:username, attempts:0}
    this.userSur.updateUserDetails(user).
    subscribe(result=>{console.log(result);})

  }

  changePassword(){
    this.router.navigate(["changePassword",this.empUname])
  }


}
