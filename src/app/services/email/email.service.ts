import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { OrderModel } from '../../models/order/orderModel'
import { Config } from '../config';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }
  private _config: Config = new Config();

  sendEmail(url: string, id: string): Promise<any> {
    // var headers = new Headers();
    // headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));
    // // , { headers: headers }
    return this.http.get(this._config.EmailBaseUrl + url + "?id=" + id).map(response => {
      return response.json() || { success: false, message: "No response from server" };
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }
}