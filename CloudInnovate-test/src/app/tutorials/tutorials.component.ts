import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers, RequestOptions,Response} from '@angular/http';
import { AppComponent } from '../app.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  data22;gettutorialsdata;getreleasenotedata;getdocumentdata;gethtmlcontent;
  busy: Subscription;
  
 constructor( private http: Http,private router: Router) { }

  ngOnInit() {
       this.data22 = localStorage.getItem('tutorialsdata'); 
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

    home(){
    this.router.navigateByUrl('');
  }

}
