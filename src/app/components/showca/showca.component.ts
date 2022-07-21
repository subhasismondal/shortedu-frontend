import { Component, OnInit } from '@angular/core';
import {CAservice} from '../../services/caservice.service';

@Component({
  selector: 'app-showca',
  templateUrl: './showca.component.html',
  styleUrls: ['./showca.component.css']
})
export class ShowcaComponent implements OnInit {

  constructor(private showCA:CAservice) { }
  CAdata=null;
  ImgUrl=null;

  ngOnInit() {
    this.getCurrentAffairs();
  }

  getCurrentAffairs(){

    this.showCA.getCAFiles()
      .subscribe(
        data => {
          this.CAdata = data;
          this.ImgUrl =  'http://65.20.72.240:8081/images';
        },
        error => {
          console.log(error);
        });
  }

  }


