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
    step1.stepName = "Prihlásanie/Registrácia";
    step1.stepDescription = "Prihláste sa pomocou svojho gmailového účtu, alebo cez krátky registračný formulár.";
    step1.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-submite.png"

    // 2
    var step2 = new HowItWorksModel();
    step2.stepName = "Popis Problému";
    step2.stepDescription = "Popíšte nám problém s ktorým potrebujete pomôcť.";
    step2.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-delivery.png"
    
    // 3
    var step3 = new HowItWorksModel();
    step3.stepName = "Vybrať čas a miesto";
    step3.stepDescription = "Vyberte si z kalendára čas kedy sa u Vás zastavíme a miesto kde vás najdeme.";
    step3.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-analyze.png";
    
    // 4
    var step4 = new HowItWorksModel();
    step4.stepName = "Potvrdenie objednávky";
    step4.stepDescription = "Potvrednie objednávky.";
    step4.stepImgUrl = "http://frontendfactory.com/wp-content/themes/frontendfactory/images/icons/work-confirm.png";
    
    steps.push(step1);
    steps.push(step2);
    steps.push(step3);
    steps.push(step4);
  }
}
