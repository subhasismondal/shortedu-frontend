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
  photo : any;

  constructor(private fb: FormBuilder, private router: Router, private caService: CAservice) { }

  ngOnInit() {
    this.newForm();
  }

  newForm = function () {
    this.userForm = this.fb.group({
      title    : ['', Validators.compose([Validators.required])],
      description     : ['', Validators.compose([Validators.required])],
      urltoimage         : [''],
      url        : [''],
      photo         : ['']
    })
  }

  PostData(form: NgForm) {
    this.submitted = true;
    if(!this.userForm.valid) {
      return false;
    }
    if (this.userForm.get('photo').invalid) {
      this.isPhotoError = true;
    }

    this.uploadError = '';
    const formData = new FormData();
    formData.append("title", this.userForm.controls.title.value);
    formData.append("description", this.userForm.controls.description.value);
    formData.append("urltoimage", this.userForm.controls.urltoimage.value);
    formData.append("url", this.userForm.controls.url.value);
    formData.append('photo', this.photo[0], this.photo.name);
    //formData.append('photo', this.userForm.get('photo').value);
    //console.log("title:"+this.userForm.controls.title.value);
    //console.log("Phovo Value:"+this.userForm.get('photo').value);
    // interval(1000).pipe(exhaustMap(() => this.apiService.post('http://localhost:8081/user/add', formData))).subscribe(resp => {
    //     if(resp['status'] != 'success') {
    //       this.uploadError = resp['statusMessage'];
    //       return;
    //     }
    //     this.router.navigate(['/users'])
    //   }, (resp)=> {
    //     this.uploadError = 'Some error occured please try later';
    //     console.log(resp);
    //   });
    // );
    this.caService.post('http://localhost:8081/api/uploadcas', formData).subscribe(resp => {
      if(resp['status'] != 'success') {
        this.uploadError = resp['statusMessage'];
        return;
      }
      this.router.navigate(['/allnotes'])
    }, (resp)=> {
      this.uploadError = 'Some error occured please try later';
      console.log(resp);
    });


  }
  upload(event: Event) {
    const target = event.target as HTMLInputElement;
    this.photo = target.files as FileList;

    console.log(this.photo[0]);
}


}
