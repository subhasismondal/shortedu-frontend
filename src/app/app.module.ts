import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UploadFilesComponent } from './components/upload-files/upload-files.component';
import { RouterModule, Routes } from '@angular/router';
import { StudynotesComponent } from './components/studynotes/studynotes.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowdataComponent } from './components/showdata/showdata.component';
import { ShowimagesComponent } from './components/showimages/showimages.component';
import { AddcaComponent } from './components/addca/addca.component';
import { ShowcaComponent } from './components/showca/showca.component';
import { AddqaComponent } from './components/addqa/addqa.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    StudynotesComponent,
    ShowdataComponent,
    ShowimagesComponent,
    AddcaComponent,
    ShowcaComponent,
    AddqaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
