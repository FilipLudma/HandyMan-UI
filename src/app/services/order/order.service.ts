import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { OrderModel } from '../../models/orderModel'
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  private readonly apiUrl = `http://localhost:5000/api/Orders/createOrderWithBody`;
  
  createOrder() {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

    var orderId = this.http.post(this.apiUrl, null, { headers: headers })
      .map((res: Response) => res.json());

    return orderId;
  }

  createOrderWithParam(order) {
    // var headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    // // , { headers: headers }

    console.log('Request:' + order);
    var orderId = this.http.post(this.apiUrl, order)
      .map((res: Response) => res.json());
  
    return orderId;
  }
}