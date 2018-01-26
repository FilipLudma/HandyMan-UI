import { Component, OnInit } from '@angular/core';
import { OrderModel } from "app/models/order/orderModel";
import { HeaderComponent } from 'app/shared/components/header/header.component';

@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent implements OnInit {

  public newOrder: OrderModel;
  public headerComponent: HeaderComponent;

  constructor() { }

  ngOnInit() {
  }

}
