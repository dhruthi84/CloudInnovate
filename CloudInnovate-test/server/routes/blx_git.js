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
	
var github = require('octonode');
var fs = require('fs');
console.log("calling git....");
var client = github.client({
  username: 'sikumarp', //provide GITHUB username
  password: 'ee93ce1690da91d321f904257eb7dd3db29dad04'  // provide your personnal access token
},{
  hostname: 'github.ibm.com/api/v3'
});

client.get('/user', {}, function (err, status, body, headers) {
  console.log(body); //json object
  
  
});
var ghpr  = client.pr('premnav1/testgit', 37);
ghpr.files(function(){
	
    console.log(ghpr.repo);
    console.log('inside callback');
	   resp.send(ghpr.repo);
	
});


  //resp.send('api working from rouetes js');
});



	router.get('/test', (req, res) => {
  res.send('api works from test');
});
module.exports = router;
