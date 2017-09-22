import { Component, OnInit, ElementRef } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

const URL = 'http://localhost:49513/api/values/';

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.css']
})
export class ImgUploadComponent implements OnInit {

  constructor(private element: ElementRef) { }

  fileChange(event) {
    let fileList: FileList = event.target.files;

    let image = this.element.nativeElement.querySelector('.image');
    this.element.nativeElement.append('img');

    if (fileList.length > 0) {
      let file: File = fileList[0];
      let reader = new FileReader();

      // Preview File name
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      console.log(file);
      console.log(reader);

      // Preview Img
      reader.onload = function (e) {
        console.log(e);
        var src = e.target['result'];

        image.src = src;
      };

      console.log(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0]);

      let headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      alert('Done');

      // let options = new RequestOptions({ headers: headers });
      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //     .map(res => res.json())
      //     .catch(error => Observable.throw(error))
      //     .subscribe(
      //         data => console.log('success'),
      //         error => console.log(error)
      //     )
    }
  }

  ngOnInit() {
  }

}
