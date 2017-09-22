import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls:[
    './new-order.component.css',
    './new-order.component.scss'
    ]
})
export class NewOrderComponent implements OnInit {
  //STEPER OPTIONS:
  //stepper-step  
  //stepper-step stepper-step-isActive
  //stepper-step stepper-step-isValid
  
  public stepOneStatus: String = "stepper-step";
  public stepTwoStatus: String = "stepper-step";
  public stepThreeStatus: String = "stepper-step";
  public stepFourStatus: String = "stepper-step";

  constructor() { }

  ngOnInit() {
  }

  public resetDescription(){
    this.stepTwoStatus = "stepper-step";
    this.stepThreeStatus = "stepper-step";
    this.stepFourStatus = "stepper-step";
  }
}
