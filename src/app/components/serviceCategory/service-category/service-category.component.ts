import { Component, OnInit } from '@angular/core';
import { OrderModel } from "app/models/orderModel";

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent implements OnInit {

  public newOrder: OrderModel;
  
  constructor() { }

  ngOnInit() {
  }

}
