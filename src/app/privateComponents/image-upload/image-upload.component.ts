import { Directive, ElementRef, Input, Component, OnInit, Renderer, OnChanges, SimpleChanges } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})

@Directive({ selector: 'img[imgPreview]' })

export class ImageUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  public filePreviewPath: SafeUrl;

  @Input() image: any;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnChanges(changes: SimpleChanges) {

    let reader = new FileReader();
    let el = this.el;

    reader.onloadend = function (e) {
      el.nativeElement.src = reader.result;
    };

    if (this.image) {
      return reader.readAsDataURL(this.image);
    }
  }

  ngOnInit() {
  }

}
