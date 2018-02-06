import { Component, OnInit, Input } from '@angular/core';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'angular2-lightbox';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.css']
})

export class LightBoxComponent implements OnInit {
  public _albums: Array<IAlbum> = [];

  @Input() albums;

  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lighboxConfig: LightboxConfig,
  ) {
    _lighboxConfig.fadeDuration = 1;
  }

  ngOnInit() {
    console.log(this.albums);
    this._albums = this.albums;
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }
}
