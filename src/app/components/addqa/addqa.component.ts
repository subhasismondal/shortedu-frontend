import { Component, OnInit } from '@angular/core';
import { QaserviceService } from 'src/app/services/qaservice.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-addqa',
  templateUrl: './addqa.component.html',
  styleUrls: ['./addqa.component.css']
})
export class AddqaComponent implements OnInit {
  message: any;
  submitted: boolean= false;

  qadata = {
    question: '',
    answer: '',
    explanation: ''
  };

  constructor(private qadataservice: QaserviceService,private router: Router) { }

  ngOnInit() {
  }

  saveQAdata() {
    const data = {
      question: this.qadata.question,
      answer: this.qadata.answer,
      explanation:this.qadata.explanation
    };

    this.qadataservice.create(data)
      .subscribe(
        response => {
          this.submitted=true;
        },
        error => {
          console.log(error);
        });
  }

  newQAdata() {
    this.router.navigate(['/addqa']);
    window.location.reload();
  }


}
