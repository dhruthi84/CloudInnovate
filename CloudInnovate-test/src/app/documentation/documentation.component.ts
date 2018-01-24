import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'angular2-markdown';
import {Router} from '@angular/router';
import {Http, Headers, RequestOptions,Response} from '@angular/http';
import { AppComponent } from '../app.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  data22;getreleasenotedata;gettutorialsdata;getdocumentdata;gethtmlcontent;
  busy: Subscription;

    constructor( private http: Http,private router: Router) { }

  ngOnInit() {
       this.data22 = localStorage.getItem('documentationdata');
  }

  home(){
    this.router.navigateByUrl('');
  }

    getrfcdetails(){
    this.router.navigateByUrl('rfc');
  }

    gettutorials(){
    this.router.navigateByUrl('tutorials');
  
  }

  getdocuments(){
    this.router.navigateByUrl('documentation');
  }

  getreleasenotes(){
        this.router.navigateByUrl('releaseNote');
  }

}
