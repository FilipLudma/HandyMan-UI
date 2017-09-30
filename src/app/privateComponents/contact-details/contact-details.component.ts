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

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  providers: [OrderService]
})

export class ContactDetailsComponent implements OnInit {
  private id;
  private sub;
  private _orderModel: OrderModel = new OrderModel();
  private _subscription: any;

  // Datetime picker localization
  public svk = {
    firstDayOfWeek: 1,
    dayNames: ["Nedela", "Pondelok", "Utorok", "Streda", "Stvrtok", "Piatok", "Sobota"],
    dayNamesShort: ["Ne", "Pon", "Ut", "Str", "Stv", "Pia", "Sob"],
    monthNames: ["Januar", "Februar", "Marec", "April", "May", "Jun", "Jul", "August", "September", "Oktober", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
  };

  // Min date
  public min: Date = new  Date();
  // Max date = min date + 14 days
  public max = new Date(+this.min + 12096e5);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parentComponennt: NewOrderComponent,
    private orderService: OrderService,
  ) {

  }

  ngOnInit() {
    // console.log(this.descriptionComponent.orderModel);
  }

  public continue() {
    alert('Not implemented yet')

    if(this._orderModel.orderTime != undefined 
      && this._orderModel.orderDate != undefined){
        var hours = this._orderModel.orderTime.getHours();
        var minutes = this._orderModel.orderTime.getMinutes();

        this._orderModel.orderDate.setHours(hours, minutes)
        this._orderModel.orderTime = this._orderModel.orderDate;
      }

    console.log(this._orderModel);
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
