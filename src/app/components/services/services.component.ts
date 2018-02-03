import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from '../../services/category/category.service';
import { CategoryModel } from 'app/models/categoryModel';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: [
    './services.component.css',
    '../../shared/css/font.family.css'
  ],
  providers: [CategoryService],
})

export class ServicesComponent implements OnInit {
  public categories: CategoryModel[];
  public serviceImg: String = "../../../images/OccupationImages/";

  constructor(
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCategories('/GetCategories').then(response => {
      this.categories = response;
      this.categories = this.categories.slice(0, 6);
    }).catch(error => {
      console.log("Got error:", error);
    });
  }

  redirectToDetail(service) {
    var url = '/prehladslužieb/' + service.toLowerCase();
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
  }

}
