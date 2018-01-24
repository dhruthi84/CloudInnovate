import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'angular2-markdown';
import {Router} from '@angular/router';
import {Http, Headers, RequestOptions,Response} from '@angular/http';
import { AppComponent } from '../app.component';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-rfc',
  templateUrl: './rfc.component.html',
  styleUrls: ['./rfc.component.css']
})
export class RfcComponent implements OnInit {

  constructor( private http: Http,private router: Router) { }

  data22;getreleasenotedata;gettutorialsdata;getdocumentdata;gethtmlcontent;rfc_list=[];
  busy: Subscription;

  ngOnInit() {
	  
	  
                // this.users = [
                //     { name: 'Jilles', age: 21 },
                //     { name: 'Todd', age: 24 },
                //     { name: 'Lisa', age: 18 }
                // ];
	  
    this.data22 = localStorage.getItem('documentationdata');
   // this.jira_data = localStorage.getItem('jira_data');
         let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });
    console.log("rfc  page data");
    console.log("====git calling====");
	//this.submit_rfc();
	/*
     this.busy = this.http.get(AppComponent.API_URL + '/blx_git', headers).subscribe(res => {
     // this.getreleasenotedata = res.json();
      this.getreleasenotedata = res;
      console.log('===git resp in rfc file=====', this.getreleasenotedata)
    });
	*/
	
    

	this.busy = this.http.get(AppComponent.API_URL + '/jira_all_rfcs', headers).subscribe(res => {
     
      this.getreleasenotedata = res.json();
	  
     // console.log('===JIRA resp in rfc file=====', this.getreleasenotedata);
      //console.log('===JIRA resp in expand file=====', this.getreleasenotedata.expand);
      //console.log('===JIRA resp in maxResults file=====', this.getreleasenotedata.maxResults);
      console.log('===JIRA resp in issues file=====', this.getreleasenotedata.issues);
	  
	  for (let key in this.getreleasenotedata.issues) {
   // console.log ('key: ' +  key + ',  value: ' + this.getreleasenotedata.issues[key]);
		}
		
		for (let key of this.getreleasenotedata.issues) {
			var rfc_id="";
			var desc="";
			
			
			for(var i in key){
				if(i==="key"||i==="fields"){
				//console.log('key: ' +  i + ',  value: ' + key[i]);
				//console.log('key desc: ' +  i + ',  value: ' + key["fields"]["issuetype"]["description"]);
				
				//this.rfc_list.push({'rfc_id':key[i],'rfc_type':'rfc_type','rfc_title':key[i].issuetype["description"]+'Lorem ipsum dolor sit amet consectetuer','submitted_by':'Marian Vrbican','date':'11 Jan 18','status':'Published'});
				rfc_id=key[i];
				 if(i==="fields"){
				//console.log('key===fields==: ',key[i]);
				//console.log('key===issuetype==: ',key[i].issuetype["description"]);
				//console.log('key creatd: ' +  i + ',  value: ' + key[i].issuetype.created);
				//this.rfc_list.push({'rfc_id':key[i],'rfc_type':'rfc_type','rfc_title':'Lorem ipsum dolor sit amet consectetuer','submitted_by':'Marian Vrbican','date':'11 Jan 18','status':'Published'});
				//desc=key[i].issuetype["description"];
				}
				if(i==="key"){
				this.rfc_list.push({'rfc_id':rfc_id,'rfc_type':'rfc_type','rfc_title':key["fields"]["description"],'submitted_by':key["fields"]["creator"]["name"],'date':key["fields"]["created"],'status':key["fields"]["status"]["name"]});
				}
			
			}else{
				
			//	console.log('else key: ' +  i + ',  value: ' + key[i]);
			}
				/*
				if(i=="fields"){
					for(var j in i){
					console.log('key: ' +  i+ "=>" +j+ ',  value: ' + i[j]);
					}
					
				}*/
				
		}
		
		
		}
      
    });
  }

  opencreaterfc(){
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
  submit_rfc(f: NgForm){
	   let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });
	var git_fileName=f.value.git_fileName;
	var git_content=f.value.git_content;
	  this.http.get(AppComponent.API_URL + '/jira_create_rfc?title='+f.value.title+'&git_fileName='+git_fileName+'&git_content='+git_content, headers).subscribe(res => {
      this.getreleasenotedata = res.json();
     
      console.log('===git creat in rfc file=====', this.getreleasenotedata)
    });
	window.location.reload();
  }
  
   onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.value.title);  // { first: '', last: '' }
    console.log(f.valid);  // false
	
	
	window.location.reload();
	
  }

  
}


