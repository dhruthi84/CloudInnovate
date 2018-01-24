const express = require('express');
const fs = require('fs');
var sync = require('synchronize');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('properties.ini');
const router = express.Router();

const apiURL = properties.get('main.api.url');
const apiToken = properties.get('main.api.token');
const apiUser = properties.get('main.api.user');
const fileNames = properties.get('hometwo.seq.fileNames');
const arr = properties.get('hometwo.seq.arr');
/* GET api listing. */
router.get('/', (req, resp) => {
    var fiber = sync.fiber;
   // var await = sync.await;
    var defer = sync.defer;
    var token;
    var URI = apiURL;

    var bodyParser = require('body-parser');
    var reqBody = req.body;
    var reqBodyStr = JSON.stringify(reqBody);
    var step = 0;
    token = apiToken;
    var username =apiUser;
    var fileName="";

    var auth = 'Basic ' + new Buffer(username + ':' + token).toString('base64');
    var file_nos=fileNames.split(",");
	var data="";
	var showdown  = require('showdown'),
    converter = new showdown.Converter();


        try {
            fiber(function() {
                console.log("\n Calling download method");
                //	for(var i=0;i<file_nos.length;i++){
        		// fileName=file_nos[i];
                var res1 = sync.await(downloadartifact(fileName,auth,defer()));

				//resp.end();

                step = 1;
           // }
			//console.log("==============data================="+data);
              console.log('filename',fileName);
			//text=data;
			//var html = converter.makeHtml(text);
			
               // resp.send('<html><body>'+dn+dn1+html+'</body></html>');
                //resp.send('<html><body>'+dn+dn1+html+'</body></html>');
				//localStorage.setItem('jira_data',data)
              resp.send(data);
             // resp.json(text);
				//resp.redirect('https://localhost:8443');
               // resp.download("downloads/"+fileName);

            //localStorage.setItem('data2',savedata);

            });
        }

        catch(err) {
            console.log("Error while executing the download method");
            resp.json("err");
        }


          function downloadartifact(fileName,auth,callback){
        console.log("download artifact method started: ");
        var request = require('request');

/*
       return request({
                uri:URI + fileName,
                headers: {
                    'Authorization' : auth
                },
                method: "GET",
                encoding: null,
                timeout: 10000,
                rejectUnauthorized:false
            },function(err,res,body){

				data=body;
				callback(null,body);



            }
        );*/
		
		var unam = 'Dhruthi';
var password = 'Dhruthi';
var buffer = new Buffer(unam + ':' + password);
var base64String = buffer.toString('base64');
var authorization = 'Basic ' + base64String ;
var projectname = "NEX";
var jiraurl = 'https://gbsjiratest.in.edst.ibm.com';
var JIRA_TIMEOUT = 80000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var assignee = 'Siva K P';
var statustype = 'RETIRED';
		return request({
      headers:{'Authorization': authorization,
      'Content-Type': 'application/json'
         },
      uri:jiraurl+'/rest/api/2/search?jql=project="'+projectname+'"&maxResults=8000',
      method: "GET",
      timeout: JIRA_TIMEOUT

        },function(err,res,body){
                                  if (err===null){
                          if (res.statusCode===200 || res.statusCode===201){
                                  var resJSON = JSON.parse(body);
                       // console.log("Issues are:  "+JSON.stringify(res));
                           }else{
                                 // console.log("Error is: "+JSON.stringify(err));
                                 // console.log("Error body is: "+JSON.stringify(body));
                                }
                                  }else{
                                         // console.log("Error is: "+JSON.stringify(err));
                                          //console.log("Error body is: "+JSON.stringify(body));
                                       }
									   data=body;
									   callback(null,body);
          }
            ); 
		
		
		
    };




  //resp.send('api working from rouetes js');
});



	router.get('/test', (req, res) => {
  res.send('api works from test');
});
module.exports = router;
