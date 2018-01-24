import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import {DataTableModule} from "angular2-datatable";
import { ResponsiveModule } from 'ng2-responsive';
import { ChartsModule } from 'ng2-charts';
import { Ng2CompleterModule } from "ng2-completer";
import { HomeComponent } from './home/home.component';
import { ReleaseNoteComponent } from './release-note/release-note.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { DockerImagesComponent } from './docker-images/docker-images.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BusyModule} from 'angular2-busy';
import {TrustHtmlPipe} from "trust-html-pipe";
import { RfcComponent } from './rfc/rfc.component';

@NgModule({
  declarations: [
    // TestComponent,
    AppComponent,
    HomeComponent,
    ReleaseNoteComponent,
    DocumentationComponent,
    TutorialsComponent,
    DockerImagesComponent,
    TrustHtmlPipe,
    RfcComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    DataTableModule,
    ResponsiveModule,
    CommonModule,
    MarkdownToHtmlModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
   // BrowserAnimationsModule,
    BusyModule
    // RouterModule.forRoot(AppRoutes,{})
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
