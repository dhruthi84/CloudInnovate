import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import {Http, Headers, RequestOptions,Response} from '@angular/http';
import {Subscription} from 'rxjs';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-docker-images',
  templateUrl: './docker-images.component.html',
  styleUrls: ['./docker-images.component.css']
})
export class DockerImagesComponent implements OnInit {

data22;getreleasenotedata;gettutorialsdata;getdocumentdata;gethtmlcontent;
  busy: Subscription;

  constructor( private http: Http,private router: Router) { }

  ngOnInit() {
       this.data22 = localStorage.getItem('downloadreleasedata');
  }

    downloadImages(){
      this.router.navigateByUrl('images');
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
