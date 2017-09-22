import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { OrderModel } from '../../models/orderModel';

import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../app/components/security/auth.service'
import { AuthGuard } from '../../../app/components/security/auth-guard.service'
import { AuthHttp, AuthConfig, tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [
    './orders.component.css',
     '../../shared/css/style.default.css'
     ],
  providers:[ 
    OrdersService,
    AuthService,
    // AuthHttp,
    // AuthConfig
    ]
})
export class OrdersComponent implements OnInit {
  private path;
  private orders: OrderModel[];

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute) { }

    getOrders(): void{
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
