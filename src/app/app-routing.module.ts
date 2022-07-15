import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {StudynotesComponent} from './components/studynotes/studynotes.component';
import {UploadFilesComponent} from './components/upload-files/upload-files.component';
import { ShowdataComponent} from './components/showdata/showdata.component';
import { ShowimagesComponent} from './components/showimages/showimages.component';
import { ShowcaComponent } from './components/showca/showca.component';
import  {AddcaComponent} from './components/addca/addca.component'

const routes: Routes = [
  { path: '', pathMatch:'full', component: ShowdataComponent },
  { path: 'addgkfile', component: UploadFilesComponent },
  { path: 'addgk', component: StudynotesComponent },
  { path: 'addca', component:AddcaComponent  },
  { path: 'showca', component: ShowcaComponent },
  { path: 'showdata', component: ShowdataComponent },
  { path: 'showimages', component: ShowimagesComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
