import { Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { NewOrderComponent } from '../new-order/new-order.component'
import { OrderRequest } from '../../models/order/OrderRequest'
import { CategoryService } from '../../services/category/category.service';
import { OrderService } from '../../services/order/order.service';
import { CategoryModel } from "app/models/categoryModel";
import { OrderModel } from "app/models/order/orderModel";

import { AccordionModule } from "ng2-accordion";
import { SubCategoryModel } from "app/models/subCategoryModel";
import { ImgAttachment } from 'app/models/order/imgAttachment';
import { imgBlob } from 'app/models/common/ImgBlob';
import { combineAll } from 'rxjs/operators/combineAll';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
  providers: [OrderService],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(350, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class DescriptionComponent implements OnInit {
  private sub;
  private id: string;

  public categories: CategoryModel[];
  public subCategories: SubCategoryModel[];
  public displayCategory: number = 0;
  public displaySubCategory: string = "";
  public orderModel: OrderModel = new OrderModel;
  public imgAttachments: ImgAttachment[] = new Array<ImgAttachment>();

  public displaySubCategorySection: boolean = false;
  public displayDescriptionSection: boolean = false;

  public addDescription: boolean = false;
  public addAttachment: boolean = false;
  public price = '100-200euro';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parentComponent: NewOrderComponent,
    private categoryService: CategoryService,
    private orderService: OrderService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });

    this.categoryService.getCategories('/GetCategories').then(response => {
      this.categories = response;
    }).catch(error => {
      console.log("Got error:", error);
    });

    // this.orderService.getOrder('/Order', this.id).then(response => {
    //   console.log('GET ORDER RESPONSE::', response);
    //   if (!!response) {
    //     // this.orderModel = response;
    //   }
    // }).catch(error => {
    //   console.log("Got error:", error);
    // });
  }

  public onDescriptionChange() {
    this.addDescription = !this.addDescription;
  }

  public onAttachmentChange() {
    this.addAttachment = !this.addAttachment;
  }

  public activateClass(subModule) {
    subModule.active = !subModule.active;
  }

  public continue() {
    this.orderModel.id = this.id;
    this.orderModel.price = this.price;
    this.orderModel.subCategory = this.displaySubCategory.toString();

    if (this.categories != undefined) {
      var categoryIndex = this.categories.findIndex(x => x.categoryType == this.displayCategory);
      if (categoryIndex > -1) {
        this.orderModel.category = this.categories[categoryIndex].categoryName;
      }
    }

    if (this.imgAttachments.length > 0) {
      this.orderModel.imgAttachments = this.b64toBlob(this.imgAttachments);
    }

    this.orderService.updateOrder('/UpdateOrder', this.id, this.orderModel)
      .then(response => {
        if (response != undefined && response) {
          this.parentComponent.stepTwoStatus = "stepper-step stepper-step-isValid";
          this.parentComponent.stepThreeStatus = "stepper-step stepper-step-isActive";
          this.router.navigate(['/novaPorucha/kontaktneInformacie', this.id]);
        }
      }).catch(error => {
        console.log("Got error:", error);
      });
  }

  public back() {
    this.router.navigate(['/novaPorucha/adresa']);
    this.parentComponent.stepTwoStatus = "stepper-step";
  }

  public showCategory(val) {
    this.displayCategory = val;
    this.displaySubCategory = "";
    this.displaySubCategorySection = true;
    this.displayDescriptionSection = false;
  }

  public showSubCategory(val) {
    this.displaySubCategory = val;
    this.displayDescriptionSection = true;
  }

  public b64toBlob(imgAttachments) {
    var imgBlobs = new Array<imgBlob>()
    var sliceSize = 512;

    for (var ind = 0; ind < imgAttachments.length; ind++) {
      var imgObj = new imgBlob();
      var imgAttachment = imgAttachments[ind];
      var parts = imgAttachment["src"].split(";base64,");
      var contentType = parts[0].replace("data:", "");
      var base64Data = parts[1];

      var byteCharacters = atob(base64Data);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      imgObj.imgBase64 = base64Data;
      //imgObj.imgArray = byteArray;
      imgObj.fileName = imgAttachment["caption"];


      imgBlobs.push(imgObj);
    }

    // const blob = b64toBlob(b64Data, contentType);
    // const blobUrl = URL.createObjectURL(blob);

    return imgBlobs;
  }
}
