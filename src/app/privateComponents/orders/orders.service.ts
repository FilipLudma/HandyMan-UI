import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { OrderModel } from '../../models/order/orderModel'
import 'rxjs/add/operator/map';

@Injectable()
export class OrdersService {

  constructor(private http: Http){ }

  private readonly apiUrl = `http://localhost/api/orders`;
  getOrders() {

      var headers = new Headers();
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

      var orders = this.http.get(this.apiUrl, { headers: headers })
        .map((res:Response) => res.json());
    
    // var ordersAuth = this.authHttp.get('http://localhost:5000/Orders')
    //   .map(res => res.json())
      
    return orders;
  }
}