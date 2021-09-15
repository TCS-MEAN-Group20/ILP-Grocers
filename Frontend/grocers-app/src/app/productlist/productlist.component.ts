import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() {}

  products: any = [{
    "id": 1,
    "name": "Banana",
    "price": "100.00",
    "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "quantity": 200
  },
  {
    "id": 2,
    "name": "Banana",
    "price": "100.00",
    "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "quantity": 200
  },
  {
    "id": 3,
    "name": "Banana",
    "price": "100.00",
    "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "quantity": 200
  },
  {
    "id": 4,
    "name": "Banana",
    "price": "100.00",
    "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "quantity": 200
  },
  {
    "id": 5,
    "name": "Banana",
    "price": "100.00",
    "imageUrl": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "quantity": 200
  }];

  ngOnInit(): void {
  }

}
