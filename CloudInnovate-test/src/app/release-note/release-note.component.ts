import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import {Http, Headers, RequestOptions,Response} from '@angular/http';
import { AppComponent } from '../app.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-release-note',
  templateUrl: './release-note.component.html',
  styleUrls: ['./release-note.component.css']
})
export class ReleaseNoteComponent implements OnInit {

  data22;getreleasenotedata;gettutorialsdata;getdocumentdata;gethtmlcontent;
  busy: Subscription;
    constructor( private http: Http,private router: Router) { }

  ngOnInit() {
       this.data22 = localStorage.getItem('releasenotesdata');
  }

    home(){
    this.router.navigateByUrl('');
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
      getrfcdetails(){
    this.router.navigateByUrl('rfc');
  }

}
