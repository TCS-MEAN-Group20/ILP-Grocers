import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admind-index',
  templateUrl: './admind-index.component.html',
  styleUrls: ['./admind-index.component.css']
})
export class AdmindIndexComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  logOut(){
    this.router.navigate(["adminLogin"])
  }
}
