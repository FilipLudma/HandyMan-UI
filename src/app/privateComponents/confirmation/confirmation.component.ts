import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { OrderService } from '../../services/order/order.service';
import { EmailService } from '../../services/email/email.service';

import { OrderModel } from "app/models/order/orderModel";
import { ImgAttachment } from "app/models/order/imgAttachment";
import { imgBlob } from 'app/models/common/ImgBlob';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  providers: [OrderService, EmailService]

})

export class ConfirmationComponent implements OnInit {
  private _id;
  private _sub;
  public _orderModel: OrderModel = new OrderModel();
  private _subscription: any;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _orderService: OrderService,
    private _emailService: EmailService) { }

  ngOnInit() {
    this._sub = this._route.params.subscribe(params => {
      this._id = params['id'];
    });

    this._orderService.getOrder('/Order', this._id).then(response => {
      this._orderModel = response;
      console.log(this._orderModel);
    }).catch(error => {
      console.log("Got error:", error);
    });
  }

  process() {
    if (this._id != undefined && this._id != null && this._id != '') {
      this._emailService.sendEmail('/SendEmail', this._id);
    } else {
      alert('Lutujeme niekde nastala chyba, prosim skuste vasu objednaku potvrdit znova.')
    }
  }
}
