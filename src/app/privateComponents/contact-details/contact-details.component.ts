import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { NewOrderComponent } from '../new-order/new-order.component'
import { DescriptionComponent } from '../description/description.component'
import { DatepickerModule } from 'angular2-material-datepicker'
import { OrderService } from '../../services/order/order.service';
import { OrderObjectService } from '../../services/order/order-object.service';
import { OrderModel } from "app/models/order/orderModel";
import { ImgAttachment } from "app/models/order/imgAttachment";
import { imgBlob } from 'app/models/common/ImgBlob';
import { User } from 'app/models/user/user';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  providers: [OrderService]
})

export class ContactDetailsComponent implements OnInit {
  private id;
  private sub;
  private _subscription: any;
  public _orderModel: OrderModel = new OrderModel();
  // Datetime picker localization
  public svk = {
    firstDayOfWeek: 1,
    dayNames: ["Nedela", "Pondelok", "Utorok", "Streda", "Stvrtok", "Piatok", "Sobota"],
    dayNamesShort: ["Ne", "Pon", "Ut", "Str", "Stv", "Pia", "Sob"],
    monthNames: ["Januar", "Februar", "Marec", "April", "May", "Jun", "Jul", "August", "September", "Oktober", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
  };

  // Min date
  public min: Date = new Date();
  // Max date = min date + 14 days
  public max = new Date(+this.min + 12096e5);

  public currentUser: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parentComponennt: NewOrderComponent,
    private orderService: OrderService,
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.orderService.getOrder('/Order', this.id).then(response => {
      this._orderModel = response;
      if (this.currentUser != null) {
        this._orderModel.firstName = this.currentUser["firstName"];
        this._orderModel.lastName = this.currentUser["lastName"];
        this._orderModel.email = this.currentUser["emailAddress"];
      }
    }).catch(error => {
      console.log("Got error:", error);
    });
  }

  public continue() {
    if (this._orderModel.orderTime != undefined
      && this._orderModel.orderDate != undefined) {
      var hours = this._orderModel.orderTime.getHours();
      var minutes = this._orderModel.orderTime.getMinutes();

      this._orderModel.orderDate.setHours(hours, minutes)
      this._orderModel.orderTime = this._orderModel.orderDate;
    }

    this.orderService.updateOrder('/UpdateOrder', this.id, this._orderModel)
      .then(response => {
        if (response != undefined && response) {
          this.router.navigate(['/novaPorucha/potvrdenie', this.id]);
          // this.parentComponent.stepTwoStatus = "stepper-step stepper-step-isValid";
          // this.parentComponent.stepThreeStatus = "stepper-step stepper-step-isActive";
        }
      }).catch(error => {
        console.log("Got error:", error);
      });
  }

  public back() {
    this.router.navigate(['/novaPorucha/popis', this.id]);
    this.parentComponennt.stepThreeStatus = "stepper-step";
  }
}
