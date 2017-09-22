import { Component, OnInit } from '@angular/core';
import { PortfolioModule } from './portfolio.module'
import { PortfolioService } from './portfolio.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './portfolio.component.css',
    '../../shared/css/style.default.css'
  ],
  providers: [PortfolioService]
})

export class PortfolioComponent implements OnInit {
  images: any;
  constructor(private portfolioService: PortfolioService) { }

  getImages(): void {
    this.portfolioService.getPortfolioImages()
      .then(images => this.images = images);
  }

  ngOnInit() {
    this.getImages();
  }

}
