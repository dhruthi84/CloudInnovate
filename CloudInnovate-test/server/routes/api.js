const express = require('express');
const fs = require('fs');
var sync = require('synchronize');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('properties.ini');
const router = express.Router();

const apiURL = properties.get('main.api.url');
const apiToken = properties.get('main.api.token');
const apiUser = properties.get('main.api.user');
const fileNames = properties.get('files.seq.fileNames');
const arr = properties.get('files.seq.arr');
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
                	for(var i=0;i<file_nos.length;i++){
        		 fileName=file_nos[i];
                var res1 = sync.await(downloadartifact(fileName,auth,defer()));

				//resp.end();

                step = 1;
            }
		//	console.log("==============data================="+data);
              console.log('filename',fileName);
			text=data;
			var html = converter.makeHtml(text);
			var dn='<a href="http://localhost:3000/downloadfile?fileName=README.md">download artifact</a>';
			var dn1='<a href="https://gbsartifactory.in.edst.ibm.com/artifactory/NextGenTooling/1/home1.md">download direct</a>';
               // resp.send('<html><body>'+dn+dn1+html+'</body></html>');
                //resp.send('<html><body>'+dn+dn1+html+'</body></html>');
              resp.json(html);
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

				data+=body;
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
