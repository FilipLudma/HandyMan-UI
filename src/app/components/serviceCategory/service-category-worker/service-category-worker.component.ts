import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../models/order/orderModel';
import { Router } from '@angular/router';

import { OrderService } from '../../../services/order/order.service';
import { OrderObjectService } from '../../../services/order/order-object.service';

@Component({
  selector: 'app-service-category-worker',
  templateUrl: './service-category-worker.component.html',
  styleUrls: ['./service-category-worker.component.css'],
  providers: [OrderService]
})
export class ServiceCategoryWorkerComponent implements OnInit {

  private newOrderId: string;
  private _subscription: any;
  public starsCount: number;

  constructor(
    private orderService: OrderService,
    private orderObjectService: OrderObjectService,
    private router: Router) {
  }

  ngOnInit() {
    this.starsCount = 5;
  }

  createOrderWithCategory() {
    console.log('Create order with category');
    this.orderObjectService.orderCategory();

    console.log(this.orderObjectService.getOrder());
    this.router.navigate(['/novaPorucha/adresa']);
  }

  createOrder(): void {
    console.log('Create Order test')

    var testOrder: OrderModel = new OrderModel();
    testOrder.firstName = 'Filip'

    console.log('Object to send: ' + testOrder)

    this.orderService.createOrderWithParam(testOrder)
      .subscribe(orderId => this.newOrderId = orderId);

    console.log(this.newOrderId);

    if (this.newOrderId != null && this.newOrderId != "") {
      this.router.navigate(['/novaPorucha/adresa', this.newOrderId]);
    }
    else {
      alert("Something went wrong");
    }
  }
}
