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
  public order: any = {};
  public showOverlay: any = false;

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
    }).catch(error => {
      console.log("Got error:", error);
    });
  }

  process() {
    if (this._id != undefined && this._id != null && this._id != '') {
      this._emailService.sendEmail('/SendEmail', this._id)
        .then(response => {
          this.showOverlay = true;
        }).catch(error => {
          this.showOverlay = false;
          console.log("Got error:", error);
        });
    } else {
      this.showOverlay = false;
      alert('Lutujeme niekde nastala chyba, prosim skuste vasu objednaku potvrdit znova.')
    }
  }

  redirectHome() {
    this._router.navigate(['/']);
  }
}
