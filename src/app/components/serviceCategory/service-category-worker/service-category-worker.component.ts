import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrderModel } from '../../../models/order/orderModel';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { OrderService } from '../../../services/order/order.service';
import { OrderObjectService } from '../../../services/order/order-object.service';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryModel } from 'app/models/categoryModel';
import { SubCategoryModel } from 'app/models/subCategoryModel';
import { IAlbum } from 'angular2-lightbox';

import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-service-category-worker',
  templateUrl: './service-category-worker.component.html',
  styleUrls: [
    './service-category-worker.component.css',
    '../../../shared/css/font.family.css'
  ],
  providers: [OrderService, CategoryService, HeaderComponent],
})

export class ServiceCategoryWorkerComponent implements OnInit {
  private _newOrderId: string;
  private _subscription: any;
  private _sub;
  private _albums: Array<IAlbum> = [];

  public optionSelected: any;
  public categories: CategoryModel[];
  public selectedCategory: CategoryModel = new CategoryModel();
  public subCategoriesToDisplay: SubCategoryModel[] = new Array<SubCategoryModel>();
  public subCategoriesForDropDown: SubCategoryModel[] = new Array<SubCategoryModel>();
  public strInput: string = "Opraváreň";

  public back = "../../../../images/OccupationImages/1.png";

  constructor(
    private orderService: OrderService,
    private categoryService: CategoryService,
    private orderObjectService: OrderObjectService,
    private route: ActivatedRoute,
    private headerComponent: HeaderComponent,
    private router: Router) {

  }

  optionSelected1(event) {
    console.log(event);//option value will be sent as event
  }

  ngOnInit() {
    window.scroll(0, 0);
    this._sub = this.route;
    console.log('HEADER COMPONENT::', this.headerComponent)
    if (this.headerComponent != undefined) {
      this.headerComponent.isPrivate = true;
    }

    this.categoryService.getCategories('/GetCategories').then(response => {
      this.categories = response;
      if (this.categories.length > 0) {
        var categoryIndex = this.categories.findIndex(x => x.categoryName.toLowerCase() == this._sub.url._value[0]['path']);
        if (categoryIndex != -1) {
          this.selectedCategory = this.categories[categoryIndex];

          this.subCategoriesToDisplay = this.selectedCategory.orderSubCategories.slice(0, 6);

          if (this.selectedCategory.orderSubCategories.length > 6) {
            for (var i = 6; i < this.selectedCategory.orderSubCategories.length; i++) {
              this.subCategoriesForDropDown.push(this.selectedCategory.orderSubCategories[i]);
            }
          }

          this.back = "../../../../images/OccupationImages/" + this.selectedCategory.categoryType + ".png";

          for (let i = 1; i < 5; i++) {
            var imgName = this.selectedCategory.categoryType + "_" + i + ".png";
            const album = {
              src: "../../../../images/ServiceCategories/" + imgName,
              caption: imgName,
              thumb: "../../../../images/ServiceCategories/" + imgName
            };

            this._albums.push(album);
          }
        }
      }
    }).catch(error => {
      console.log("Got error:", error);
    });
  }

  backToIndex() {
    this.router.navigate(['/']);
  }

  createOrderWithCategory(selectedSubCategory) {
    if (!!selectedSubCategory) {
      localStorage.setItem('SelectedCategory', this.selectedCategory.categoryName)
      localStorage.setItem('SelectedSubCategory', selectedSubCategory)
    } else {
      localStorage.removeItem('SelectedCategory');
      localStorage.removeItem('SelectedSubCategory');
    }
    
    this.router.navigate(['/novaPorucha/adresa']);
  }

  createOrder(): void {
    console.log('Create Order test')

    var testOrder: OrderModel = new OrderModel();
    testOrder.firstName = 'Filip'

    console.log('Object to send: ' + testOrder)

    this.orderService.saveOrder('/createOrderWithBody', testOrder).then(response => {
      this._newOrderId = response;
    }).catch(error => {
      console.log("Got error:", error);
    });

    console.log(this._newOrderId);

    if (this._newOrderId != null && this._newOrderId != "") {
      this.router.navigate(['/novaPorucha/adresa', this._newOrderId]);
    }
    else {
      alert("Something went wrong");
    }
  }
}
