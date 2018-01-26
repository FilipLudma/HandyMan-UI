import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { OrderModel } from '../../models/order/orderModel';

import { ActivatedRoute } from '@angular/router';
import { AuthHttp, AuthConfig, tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [
    './orders.component.css',
    '../../shared/css/style.default.css'
  ],
  providers: [
    OrdersService,
  ]
})
export class OrdersComponent implements OnInit {
  private path;
  private orders: OrderModel[];

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute) { }

  getOrders(): void {
    this.ordersService.getOrders()
      .subscribe(orders => this.orders = orders);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['selector'];

      console.debug(this.route.params['status'])
      this.getOrders();
    })
  }

}
