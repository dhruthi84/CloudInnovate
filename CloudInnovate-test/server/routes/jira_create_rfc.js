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
var github = require('octonode');
/* GET api listing. */
router.get('/', (req, resp) => {
	

console.log("===req=======",req);	
//return false;

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
	//var showdown  = require('showdown'),
    //converter = new showdown.Converter();

	console.log("===========title====",req,req.title)

        try {
            fiber(function() {
                console.log("\n Calling create method");
                //	for(var i=0;i<file_nos.length;i++){
        		// fileName=file_nos[i];
                //var res1 = sync.await(downloadartifact(fileName,auth,defer()));

				//resp.end();

               // step = 1;
           // }
			//console.log("==============data================="+data);
          //    console.log('filename',fileName);
			//text=data;
			//var html = converter.makeHtml(text);
			
               // resp.send('<html><body>'+dn+dn1+html+'</body></html>');
                //resp.send('<html><body>'+dn+dn1+html+'</body></html>');
				//localStorage.setItem('jira_data',data)
				
				var unam = 'xxxx';
var password = 'xxxx';
var buffer = new Buffer(unam + ':' + password);
var base64String = buffer.toString('base64');
var authorization = 'Basic ' + base64String ;
var projectname = "NEX";
var jiraurl = 'https://gbsjiratest.in.edst.ibm.com';
var JIRA_TIMEOUT = 80000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var assignee = 'example@in.ibm.com';
var statustype = 'PUBLISH';
var pid = '13921';
var issuename = 'api_issue';
var issuetypeid = '10700';
adminName = 'xxxx';
var syncRequest = require('sync-request');
var issuekey = "NEX-13";
var issueid;
var description=req.query.title;

		  var request = require('request');
	var file_path='https://github.ibm.com/premnav1/testgit/blob/master/'+req.query.git_fileName;		  
var options = {
headers:{'Authorization': authorization,
      'Content-Type': 'application/json'},
      body: JSON.stringify({
        "fields": 
          {
            "project": { "id": pid },
            "summary": issuename,
            "issuetype": {"id": issuetypeid },
            "reporter": {"name": adminName },
            "description": description
          }
      }), 
      timeout: JIRA_TIMEOUT
};

  var obj1 = syncRequest("POST",jiraurl+"/rest/api/2/issue",options);
   obj1 = JSON.parse(obj1.getBody('utf8'));
   console.log("===create====",obj1.id);
   console.log("===key====",obj1.key);
   console.log("===title1====",req);
   console.log("===title2====",req.query);
   console.log("===title3====",req.query.title);
  // console.log("===title4====",query.title);
   //console.log("===title====",req.params.title);
   //console.log("===title====",req.params);
			
		 data=obj1;
		 
	//==============GIT START=============	
var client = github.client({
  username: 'sikumarp', //provide GITHUB username
  password: 'ee93ce1690da91d321f904257eb7dd3db29dad04'  // provide your personnal access token
},{
  hostname: 'github.ibm.com/api/v3'
});

client.get('/user', {}, function (err, status, body, headers) {
  //console.log(body); //json object
});
var ghpr  = client.pr('premnav1/testgit', 37);
var ghrelease  =  client.release('premnav1/testgit/Documentation', 37);
var ghrepo         = client.repo('premnav1/testgit');

//This is for create file
//1st comments 2nd content
ghrepo.createContents(req.query.git_fileName, req.query.git_content, req.query.git_content, function(err, data) {
        if (err) console.log("upload content: " + err);
        console.log(data);
        //resp.end();
    }); //path
	
	//==============GIT END=============	 
		 
		 
		 
		 
		 
				
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
        console.log("creating.. file ");
        

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
			
		
	//return true;	
		
    };




  //resp.send('api working from rouetes js');
});



	router.get('/test', (req, res) => {
  res.send('api works from test');
});
module.exports = router;
