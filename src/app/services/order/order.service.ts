import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { OrderModel } from '../../models/order/orderModel'
import { Config } from '../config';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }
  private _config: Config = new Config();
  private readonly apiUrl = `http://localhost:5000/api/Orders/createOrderWithBody`;

  createOrder() {
    var headers = new Headers();
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

    var orderId = this.http.post(this.apiUrl, null, { headers: headers })
      .map((res: Response) => res.json());

    return orderId;
  }

  saveOrder(url: string, request: OrderModel): Promise<any> {
    // var headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    // // , { headers: headers }
    return this.http.post(this._config.BaseUrl + url, request).map(response => {
      return response.json() || { success: false, message: "No response from server" };
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }

  updateOrder(url: string, id: string, request: OrderModel): Promise<any> {
    // var headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    // // , { headers: headers }
    url = url + '/' + id;
    return this.http.put(this._config.BaseUrl + url, request).map(response => {
      return response.json() || { success: false, message: "No response from server" };
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }

  getOrder(url: string, id: string): Promise<any> {
    url = url + '/' + id;
    return this.http.get(this._config.BaseUrl + url).map(response => {
      return response.json() || { success: false, message: "No response from server" };
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }
}