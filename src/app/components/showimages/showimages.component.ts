import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-showimages',
  templateUrl: './showimages.component.html',
  styleUrls: ['./showimages.component.css']
})
export class ShowimagesComponent implements OnInit {

  constructor(private showImages: UploadFileService ) { }
  imageFiles=null;
  ImgUrl=null;

  ngOnInit() {
    this.getImagesGk();
  }

  getImagesGk() {
    this.showImages.getFiles()
      .subscribe(
        data => {
          this.imageFiles = data;
          this.ImgUrl =  'http://localhost:8081/images';
        },
        error => {
          console.log(error);
        });
  }

}
