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

  public _steps: HowItWorksModel[] = new Array<HowItWorksModel>();

  constructor() { }

  ngOnInit() {
    this.populateSteps(this._steps);
  }

  private populateSteps(steps: HowItWorksModel[]) {
    // 1
    var step1 = new HowItWorksModel();
    step1.stepName = "Prihlásanie";
    step1.stepDescription = "Prihláste sa pomocou svojho gmailového účtu, alebo cez krátky registračný formulár.";
    step1.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-delivery.png"

    // 2
    var step2 = new HowItWorksModel();
    step2.stepName = "Identifikujete Problém";
    step2.stepDescription = "Na to aby sme Vám vedeli čo najrýchlejšie pomôcť potrebujeme aby ste vyplnili zopár základnych informácií.";
    step2.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-submite.png"
    
    // 3
    var step3 = new HowItWorksModel();
    step3.stepName = "Skontaktujeme sa s Vami";
    step3.stepDescription = "Na základe informacií zadaných v kontaktnom formulári Vás budeme čo najskôr kontaktovať formou mailu alebo telefonicky.";
    step3.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-analyze.png";
      
    // 4
    var step4 = new HowItWorksModel();
    step4.stepName = "Pomožeme Vám";
    step4.stepDescription = "Po Vami potvrdenom termíne vyriešime problém ktorý ste identifikovali.";
    step4.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-confirm.png";
    
    //steps.push(step1);
    steps.push(step2);
    steps.push(step3);
    steps.push(step4);
  }
}
