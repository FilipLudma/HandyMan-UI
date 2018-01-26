import { Component, OnInit } from '@angular/core';
import { HowItWorksModel } from 'app/models/common/howItWorksModel';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: [
    './custom.component.css',
    '../../shared/css/font.family.css'    
  ]
})
export class CustomComponent implements OnInit {

  private _steps: HowItWorksModel[] = new Array<HowItWorksModel>();

  constructor() { }

  ngOnInit() {
    this.populateSteps(this._steps);
  }

  private populateSteps(steps: HowItWorksModel[]) {
    // 1
    var step1 = new HowItWorksModel();
    step1.stepName = "Contact us";
    step1.stepDescription = "Submiting your order is as simple as filling the form in the end of this page. Please include all your requirements and links to your design files.";
    step1.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-submite.png"

    // 2
    var step2 = new HowItWorksModel();
    step2.stepName = "Analyze & Estimate";
    step2.stepDescription = "Our sales team will contact you within 24 hours with a detailed quote or questionaire based on your inquiry.";
    step2.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-analyze.png";

    // 3
    var step3 = new HowItWorksModel();
    step3.stepName = "Confirm & Pay";
    step3.stepDescription = "Once you agree our proposal we will send you an invoice with flexible ways to pay. We accept paypal and almost every kind of credit card. You payment will be 100% secured.";
    step3.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-confirm.png";

    // 4
    var step4 = new HowItWorksModel();
    step4.stepName = "Deliver";
    step4.stepDescription = "Once we are ready with your project we will send you an archive with all the source and graphic files. We can also help you with installing it on your web server.";
    step4.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-delivery.png"

    steps.push(step1);
    steps.push(step2);
    steps.push(step3);
    steps.push(step4);
  }
}
