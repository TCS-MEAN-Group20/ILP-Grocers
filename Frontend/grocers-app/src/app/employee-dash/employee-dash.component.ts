import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpLoginService } from '../emp-login.service';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {
  
  user?:string
  constructor(
    public activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.user=data.user);
  }


}
