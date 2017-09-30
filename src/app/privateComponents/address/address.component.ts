import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedModule } from '../../shared/shared.module'
import { MapsAPILoader } from "angular2-google-maps/core";

import { OrderService } from '../../services/order/order.service';
import { OrderObjectService } from '../../services/order/order-object.service';
import { OrderModel } from "app/models/order/orderModel";

import { NewOrderComponent } from '../new-order/new-order.component'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [OrderService]
})

export class AddressComponent implements OnInit {

  @ViewChild("search")
  public searchElementRef: ElementRef;

  @ViewChild('infoModal')
  public infoModal;

  private sub;
  private values: String = "";
  private newOrder: OrderModel;
  private _subscription: any;

  public id: String;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  public myForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private parentComponennt: NewOrderComponent,
    private orderService: OrderService,
    private orderObjectService: OrderObjectService,
    private _fb: FormBuilder) {
  }

  ngOnInit() {
    // set the address step as an active
    this.parentComponennt.stepOneStatus = "stepper-step stepper-step-isActive";

    this.newOrder = this.orderObjectService.getOrder();

    this.myForm = this._fb.group({
      address: ['', [<any>Validators.required]]
    });

    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['kategoria']; // (+) converts string 'id' to a number
    // });

    // console.log(this.id);

    //set google maps defaults
    this.zoom = 15;
    this.latitude = 48.1486;
    this.longitude = 17.1077;

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {

          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 16;
        });
      });
    });
  }

  public continue() {
    this.submitted = true;
    //console.log(this.searchElementRef.nativeElement.value);

    // Check availability radius
    var origin = new google.maps.LatLng(48.1486, 17.1077);
    var dest = new google.maps.LatLng(this.latitude, this.longitude);

    var distance = google.maps.geometry.spherical.computeDistanceBetween(origin, dest).toFixed(0);
    var intDistance = parseInt(distance);

    // Updated an order object
    this.myForm.value['address'] = this.searchElementRef.nativeElement.value;

    // Save and redirect on successful validation, otherwise display an error message/modal
    if (Math.max(intDistance, 0) < 35000 && this.myForm.value['address'] != '') {

      this.newOrder.address = this.myForm.value['address'];
      var oderToSave = this.orderObjectService.updateOrder(this.newOrder);

      this.orderService.createOrderWithParam(oderToSave)
        .subscribe(orderId => this.newOrder.id = orderId);

      if (this.newOrder.id != undefined && this.newOrder.id != '') {
        console.log("NEW ID" + this.newOrder.id);
        this.router.navigate(['/novaPorucha/popis', this.newOrder.id]);
        this.parentComponennt.stepOneStatus = "stepper-step stepper-step-isValid";
        this.parentComponennt.stepTwoStatus = "stepper-step stepper-step-isActive";
      }

    } else if (this.myForm.value['address'] == '') {
      return null;
    } else {
      this.infoModal.open();
    }
  }

  public back() {
    this.router.navigateByUrl('/prehlad');
    this.parentComponennt.stepOneStatus = "stepper-step";
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }
}
