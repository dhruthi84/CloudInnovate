import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarkdownModule } from 'angular2-markdown';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppComponent } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class HomeComponent implements OnInit {

  gethtmlcontent; getdocumentdata; getreleasenotedata; gethomeonedata; gettutorialsdata; getlinkdata;
  gethometwodata;

  busy: Subscription;


  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

    let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });
    console.log("home page data");

    //////////////////// file download ///////////////////////////////

    //  this.http.get(AppComponent.API_URL+'/propapi', headers).subscribe(res => {

    // console.log(res);
    // });

    ////////////////////////////home 1 ///////////////////////////////////////////

    this.busy = this.busy = this.http.get(AppComponent.API_URL + '/homeone', headers).subscribe(res => {
      this.gethomeonedata = res.json();
    });

    /////////////////////////////////// home 2 /////////////////////////////////////////////

    this.busy = this.http.get(AppComponent.API_URL + '/hometwo', headers).subscribe(res => {
      this.gethometwodata = res.json();
    });

    /////////////////////////////////////////////Latest News api  ///////////////////////////////

    this.busy = this.http.get(AppComponent.API_URL + '/news', headers).subscribe(res => {
      this.getlinkdata = res.json();
    });

    ///////////////////// Download Releases////////////////////////////////////////////

    this.busy = this.http.get(AppComponent.API_URL + '/api1', headers).subscribe(res => {
      this.gethtmlcontent = res.json();
      localStorage.setItem('downloadreleasedata', this.gethtmlcontent)
    });

    ///////////////////Documentation ///////////////////////////////////

    this.busy = this.http.get(AppComponent.API_URL + '/documentation', headers).subscribe(res => {
      this.getdocumentdata = res.json();
      localStorage.setItem('documentationdata', this.getdocumentdata)
    });


    /////////////////////////////Tutorials ///////////////////////////////
    this.busy = this.http.get(AppComponent.API_URL + '/tutorials', headers).subscribe(res => {
      this.gettutorialsdata = res.json();
      localStorage.setItem('tutorialsdata', this.gettutorialsdata)
    });

    ///////////////////////////////////Release Notes/////////////////////////

    this.busy = this.http.get(AppComponent.API_URL + '/release_notes', headers).subscribe(res => {
      this.getreleasenotedata = res.json();
      localStorage.setItem('releasenotesdata', this.getreleasenotedata)
    });

    //-------------------Function Ends ///////////////////////////
  }

  home() {

    // let headers = new Headers({ 'Content-Type': 'text/plain' });
    // let options = new RequestOptions({ headers: headers });

    // this.http.get(AppComponent.API_URL + '/propapi', headers).subscribe(res => {

    //   console.log(res);
    // });

    this.router.navigateByUrl('');
  }


  downloadImages() {
    this.router.navigateByUrl('images');
  }

  blueCat(){
     window.open("https://ibm.box.com/v/bluecat-apt-key-links", "_blank");
  }

  getstartedbluecat(){
    window.open("https://bluecatuat.mybluemix.net/", "_blank");
  }
  
  gettutorials() {
    this.router.navigateByUrl('tutorials');
  }

  getstarted() {
    window.open("https://inmbzp5220.in.dst.ibm.com:9000", "_blank");
    // https://inmbzp5220.in.dst.ibm.com:9000
    //this.router.navigateByUrl('get_started');
  }

  getdocuments() {
    this.router.navigateByUrl('documentation');
  }

  getrfcdetails(){
    this.router.navigateByUrl('rfc');
  }

  getreleasenotes() {
    this.router.navigateByUrl('releaseNote');
  }

}
