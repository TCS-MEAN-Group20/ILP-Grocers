import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  userUname?:string
  cartJson?:any
  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router,
    public userSur:UserService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userUname=data.user);
  }

}
