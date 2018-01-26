import { Observable } from 'rxjs/Observable';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Subject } from "rxjs/Subject";
import { CategoryModel } from "app/models/categoryModel";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from '../config';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class CategoryService {

  constructor(private http: Http) { }
  private _config: Config = new Config();

  public categoryObject: CategoryModel = new CategoryModel();
  public categoryObjectChange: Subject<CategoryModel> = new Subject<CategoryModel>();
  public res: any;
  public result: any;

  getCategories(url: string): Promise<any> {
    return this.http.get(this._config.BaseUrl + url).map(response => {
      return response.json() || { success: false, message: "No response from server" };
    }).catch((error: Response | any) => {
      return Observable.throw(error.json());
    }).toPromise();
  }

  // post(url, data): Promise<any> {
  //   return this.http.post(Config.baseUrl + url, data).map(response => {
  //     return response.json() || { success: false, message: "No response from server" };
  //   }).catch((error: Response | any) => {
  //     return Observable.throw(error.json());
  //   }).toPromise();
  // }

  // DEMO RESPONSE
  // 	this.request.get("/user").then(response => {
	// 	console.log("Got response:", response);
	// }).catch(error => {
	// 	console.log("Got error:", error);
	// }).then(response => {
	// 	console.log("Another response:", response);
	// }).catch(error => {
	// 	console.log("Got another error:", error);
	// });
}