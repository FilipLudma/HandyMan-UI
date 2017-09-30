import { Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { NewOrderComponent } from '../new-order/new-order.component'
import { OrderRequest } from '../../models/order/OrderRequest'
import { CategoryService } from '../../services/category/category.service';
import { CategoryModel } from "app/models/categoryModel";
import { OrderModel } from "app/models/order/orderModel";

import { AccordionModule } from "ng2-accordion";
import { SubCategoryModel } from "app/models/subCategoryModel";
import { ImgAttachment } from 'app/models/order/imgAttachment';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
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

  public displaySubCategorySection: boolean = false;
  public displayDescriptionSection: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parentComponent: NewOrderComponent,
    private categorytService: CategoryService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });

    this.categorytService.getCategories('/GetCategories').then(response => {
      this.categories = response;
    }).catch(error => {
      console.log("Got error:", error);
    });
  }

  // public model = new OrderRequest(18, 'Address', this.categories[0], 'description', '01234567');
  public addDescription: boolean = false;
  public addAttachment: boolean = false;
  public price = '100-200euro';

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
      if (categoryIndex > 0) {
        this.orderModel.category = this.categories[categoryIndex].categoryName;
      }
    }
    
    this.router.navigate(['/novaPorucha/kontaktneInformacie', this.id]);
    this.parentComponent.stepTwoStatus = "stepper-step stepper-step-isValid";
    this.parentComponent.stepThreeStatus = "stepper-step stepper-step-isActive";
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
}
