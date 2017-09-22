import { routes } from './../../app.routing';
import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../models/orderModel';
import { OrderService } from '../../services/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  providers: [OrderService]
})
export class OptionsComponent implements OnInit {

  private newOrderId: string;

  constructor(
    private ordersService: OrderService, private router: Router) {
  }

  ngOnInit() {
  }

  createOrder(): void {
    this.ordersService.createOrder()
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
