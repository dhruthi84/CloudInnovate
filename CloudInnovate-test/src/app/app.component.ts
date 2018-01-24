import {Component,  OnInit} from '@angular/core';
import {Http,Response,HttpModule,Headers,RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public static API_URL="https://localhost:9000";
//public static API_URL="https://nextgentooling-dev.mybluemix.net";
// public static API_URL = "https://nextgentooling.mybluemix.net";

  constructor(private router: Router, public http: Http) {  }
}
 