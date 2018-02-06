import { Directive, ElementRef, Input, Component, OnInit, Renderer, OnChanges, SimpleChanges } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Lightbox, LightboxConfig, LightboxEvent, LIGHTBOX_EVENT, IEvent, IAlbum } from 'angular2-lightbox';

import { Subscription } from 'rxjs';

import { DescriptionComponent } from '../description/description.component'
import { ImgAttachment } from 'app/models/order/imgAttachment';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

export class ImageUploadComponent implements OnInit {
  public _albums: Array<IAlbum> = [];
  private _options: Object = {};
  private _subscription: Subscription;
  private image: any;

  constructor(
    private _lightbox: Lightbox,
    private _lightboxEvent: LightboxEvent,
    private _lighboxConfig: LightboxConfig,
    private _descriptionComponent: DescriptionComponent,
  ) {
    // set default config
    _lighboxConfig.fadeDuration = 1;
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];

    if (file != undefined) {
      var myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.image = myReader.result;
        this.addImage(this.image, file.name);
      }
      myReader.readAsDataURL(file);
    }
  }

  addImage(base64Img, fileName) {
    var attachment: ImgAttachment = new ImgAttachment();
    attachment.src = base64Img;
    attachment.caption = fileName;
    attachment.thumb = base64Img;

    this._descriptionComponent.imgAttachments.push(attachment);

    const album = {
      src: attachment.src,
      caption: attachment.caption,
      thumb: attachment.thumb
    };

    this._albums.push(album);
  }

  removeImg($event): void {
    var el = $event.target;
    var imgAlbumName = el.previousElementSibling.name;

    // Remove from LightBox
    var albumIndex = this._albums.findIndex(x => x.caption == imgAlbumName);
    if (albumIndex > -1) {
      this._albums.splice(albumIndex, 1);
    }

    // Remove from Object
    var albumObjIndex = this._descriptionComponent.imgAttachments.findIndex(x => x.caption == imgAlbumName);
    if (albumObjIndex > -1) {
      this._descriptionComponent.imgAttachments.splice(albumObjIndex, 1);
    }

    el.parentNode.remove();
  }

  ngOnInit() {
    console.log(this._descriptionComponent.imgAttachments)
    if (this._descriptionComponent != undefined
      && this._descriptionComponent.imgAttachments != undefined
      && this._descriptionComponent.imgAttachments.length > 0) {
      for (let i = 0; i < this._descriptionComponent.imgAttachments.length; i++) {
        const src = this._descriptionComponent.imgAttachments[i].src;
        const caption = this._descriptionComponent.imgAttachments[i].caption;
        const thumb = this._descriptionComponent.imgAttachments[i].thumb;
        const album = {
          src: src,
          caption: caption,
          thumb: thumb
        };

        this._albums.push(album);
      }
    }
  }
}



