const express = require('express');
const fs = require('fs');
var sync = require('synchronize');

const router = express.Router();

const apiURL = "https://gbsartifactory.in.edst.ibm.com/artifactory/NextGenTooling/1/";
const apiToken = "AKCp5Z3q911Zd5a28tf6RYFnTXWxSkAc8bpSQbK4XTUqQUnbs5V2UXcZZ8mJuUSj7xThZS5oz";
const apiUser = "premnav1@in.ibm.com";


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
    var fileName="properties.ini";
    var auth = 'Basic ' + new Buffer(username + ':' + token).toString('base64');
    
        
        try {
            fiber(function() {
                console.log("\n Calling download method");
                	
                var res1 = sync.await(downloadartifact(fileName,auth,defer()));
				//resp.end();
				
                step = 1; 
            
                resp.json('Files downloaded successfully');
				//resp.redirect('https://localhost:8443');	
				//fs.unlink("./server/routes/downloadable_files/"+fileName, function(err) {});
              /*  resp.download("./server/routes/downloadable_files/"+fileName,function(err){
    if (err){
      console.log("Some technical Error::"+err);
    } else {
      console.log('Downloaded and Deleted successful..............');
	 // fs.unlink("./server/routes/downloadable_files/"+fileName, function(err) {});
    }
  });*/
			  // console.log("SSSSS:::"+s);
				//fs.unlink("./server/routes/downloadable_files/"+fileName, function(err) {});
				
                
            });
        }

        catch(err) {
            console.log("Error while executing the download method");
            resp.json("err");
        }
    

          function downloadartifact(fileName,auth,callback){
        console.log("download artifact method started: ");
        var request = require('request');

		
        request({
                uri:URI + fileName,
                headers: {
                    'Authorization' : auth
                },
                method: "GET",
                encoding: null,
                timeout: 10000,
                rejectUnauthorized:false
            },function(err,res,body){
            	
				
				var dir_path=__dirname+ '/';
				console.log("dir_path::"+dir_path);
				console.log("__dirname::"+__dirname);
				
				if (fs.existsSync(dir_path)===false)
					{
						fs.mkdirSync(dir_path,0777);
					}
				var file_path=dir_path+fileName;
				fs.exists(dir_path+fileName, function(exists) {
				if (exists) {
			
			fs.unlink(dir_path+fileName, function(err) {});
			
			fs.writeFile(file_path, body,function(err) {
                    if(err)
                        console.log(err);
                    else
                        console.log("The file was saved-"+fileName);
				
					
                    callback(null,body);
                    
                });
			
			} else {
				
				fs.writeFile(file_path, body,function(err) {
                    if(err)
                        console.log(err);
                    else
                        console.log("The file was saved-"+fileName);
					
					
                    callback(null,body);
                    
                });
				
			}
				});
				
                
            }
        );
    };	
	

  //resp.send('api working from rouetes js');
});
module.exports = router;