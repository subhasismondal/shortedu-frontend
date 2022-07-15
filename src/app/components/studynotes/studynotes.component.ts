import { Component, OnInit } from '@angular/core';
import {StudynotesService} from '../../services/studynotes.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-studynotes',
  templateUrl: './studynotes.component.html',
  styleUrls: ['./studynotes.component.css']
})

export class StudynotesComponent implements OnInit {

  studynotes = {
    title: '',
    description: '',
    published: true
  };
  currentstudynotes= null;
  message: any;
  submitted: boolean= false;

  constructor(private studyNoteService: StudynotesService,private router: Router) { }

  ngOnInit() {
  }

  saveStudynotes() {
    const data = {
      title: this.studynotes.title,
      description: this.studynotes.description


    };

    this.studyNoteService.create(data)
      .subscribe(
        response => {
          this.submitted=true;
        },
        error => {
          console.log(error);
        });
  }

  newStudynotes() {
    this.router.navigate(['/addgk']);
    window.location.reload();
  }



}
