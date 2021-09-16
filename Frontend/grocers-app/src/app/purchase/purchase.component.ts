import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  userUname?:string
  dummyRef=new FormGroup({})
  constructor(
    public activateRoute:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userUname=data.user);
  }

  goHome(){
    this.router.navigate(["userHome",this.userUname])
  }

}
