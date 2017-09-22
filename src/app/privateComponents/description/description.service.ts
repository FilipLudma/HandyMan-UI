import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { OrderRequest } from '../../models/order/OrderRequest'
import 'rxjs/add/operator/map';

@Injectable()
export class DescriptionService {

  constructor(private http: Http) { }

  private readonly apiUrl = `http://localhost/api/orders`;
  createOrder(request: OrderRequest) {

    var headers = new Headers();
    try {
      headers.append('Authorization', 'Bearer ' + localStorage.getItem('access_token'));

      var order = this.http.get(this.apiUrl, { headers: headers })
        .map((res: Response) => res.json());

      let input = new FormData();
      input.append("desctiption", request.description);

      var t = this.http.post(this.apiUrl, input,  { headers: headers })
        .map((res: Response) => res.json)

      return order;
    }
    catch (ex) {
      console.log(ex);
    }
  }
}