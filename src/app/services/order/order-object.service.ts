import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { OrderModel } from '../../models/order/orderModel'
import { Subject } from "rxjs/Subject";

@Injectable()
export class OrderObjectService {
    public orderObject: OrderModel = new OrderModel();
    public orderObjectChange: Subject<OrderModel> = new Subject<OrderModel>();

    constructor() {
    }

    orderCategory() {
        this.orderObject.firstName = "Filip"
        this.orderObjectChange.next(this.orderObject);
    }

    updateOrder(order: OrderModel) {
        this.orderObject = order;
        return this.orderObject;
    } 

    getOrder() {
        return this.orderObject;
    }
}