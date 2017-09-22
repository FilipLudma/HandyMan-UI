import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAM9IVHjsvjmPFtFK1ASMjrtbBFF1Xfzsg',
      libraries: ["places", "geometry"]
    }),
  ],
  declarations: [],
  exports: [ AgmCoreModule ]
})
export class SharedModule { }


