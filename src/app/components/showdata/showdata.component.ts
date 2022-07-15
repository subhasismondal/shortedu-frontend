import { Component, OnInit } from '@angular/core';
import {StudynotesService} from '../../services/studynotes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  currentstudynotes= null;
  constructor(private studyNoteService: StudynotesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
   // this.message = '';
    this.getStudynotes();
  }

  getStudynotes() {
    this.studyNoteService.getAll()
      .subscribe(
        data => {
          this.currentstudynotes = data;
        },
        error => {
          console.log(error);
        });
  }

}
