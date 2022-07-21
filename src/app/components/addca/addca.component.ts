import { Component, OnInit } from '@angular/core';
import {  CAservice} from 'src/app/services/caservice.service';
import {Data} from '../../interfaces/data.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormArray,FormBuilder,FormGroup,FormControl, Validators, NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-addca',
  templateUrl: './addca.component.html',
  styleUrls: ['./addca.component.css']
})
export class AddcaComponent implements OnInit {
  userForm: FormGroup;
  isPhotoError = false;
  image: string;
  submitted : boolean = false;
  uploadError: string = '';

  constructor(private fb: FormBuilder, private router: Router, private caService: CAservice) { }

  ngOnInit() {
    this.newForm();
  }

  newForm = function () {
    this.userForm = this.fb.group({
      title    : ['', Validators.compose([Validators.required])],
      description     : ['', Validators.compose([Validators.required])],
      urltoimage         : [''],
      url        : ['']
    })
  }

  PostData(form: NgForm) {
    this.submitted = true;
    if(!this.userForm.valid) {
      return false;
    }
    this.uploadError = '';
    const formData = new FormData();
    formData.append("title", this.userForm.controls.title.value);
    formData.append("description", this.userForm.controls.description.value);
    formData.append("urltoimage", this.userForm.controls.urltoimage.value);
    formData.append("url", this.userForm.controls.url.value);
    this.caService.post('http://65.20.72.240:8081/api/uploadcas', formData).subscribe(resp => {
      if(resp['status'] != 'success') {
        this.uploadError = resp['statusMessage'];
        return;
      }
     // this.router.navigate(['/allnotes'])
      this.submitted=true;
    }, (resp)=> {
      this.uploadError = 'Some error occured please try later';
      console.log(resp);
    });


  }
  upload(event: Event) {
    const target = event.target as HTMLInputElement;
}
newCAdata() {
  this.router.navigate(['/addcas']);
  window.location.reload();
}


}
