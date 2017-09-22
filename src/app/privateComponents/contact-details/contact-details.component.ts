import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NewOrderComponent } from '../new-order/new-order.component'

import { OrderService } from '../../services/order/order.service';
import { OrderObjectService } from '../../services/order/order-object.service';
import { OrderModel } from "app/models/orderModel";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  providers: [OrderService, OrderObjectService]
})

export class ContactDetailsComponent implements OnInit {
  private id;
  private sub;
  private newOrder: OrderModel;
  private _subscription: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parentComponennt: NewOrderComponent,
    private orderService: OrderService,
    private orderObjectService: OrderObjectService
  ) {
      this.newOrder = orderObjectService.orderObject;
      this._subscription = orderObjectService.orderObjectChange.subscribe((value) => {
      this.newOrder = value;
    });
  }

  ngOnInit() {
  }

  public continue() {
    alert('Not implemented yet')
    // this.router.navigateByUrl('/novaPorucha/popis');
  }

  // public continue() {
  //   this.router.navigate(['/novaPorucha/kontaktneInformacie', this.id]);
  //   this.parentComponennt.stepThreeStatus = "stepper-step stepper-step-isValid";
  //   this.parentComponennt.stepFourStatus = "stepper-step stepper-step-isActive";
  // }

  public back() {
    this.router.navigate(['/novaPorucha/popis', 1]);
    this.parentComponennt.stepThreeStatus = "stepper-step";
  }
}
