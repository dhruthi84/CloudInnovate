# Package Configuration Manual

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Functionality Description


### 1. Package Location:

 * Download the Portal Docker Image present in below Box location 
 	https://ibm.box.com/s/5bkp0hp7t5tzpj5yetbakjdx01mtuodk
 
   
 
### 2. Deployment Instructions:

Pre-Requisites:

    Docker.io is installed on the server
    Set your HOME directory (see environment variable $HOME)
    Container hosting Neo4j is hosted and running along with all the configuration(refer to Neo4j usage guide)
    Python container should be hosted and running
    Volume containing import location for Neo4J should be available

Dependencies:

* None as of now


### 3. Configuration and Installation:

    1.Create a directory (i.e /home/<<user_home>>/portal)
    2.Change to newly created directory => cd /home/<<user_home>>/portal)
    3.Place the image in folder created in step 2
    4.Load the docker image, using command: 
    	docker load -i react_image.tar
		
    5.Run the container image with command:
    	docker run --name=ngt_reactjs_container --publish=9000:9000 --volume=$HOME/fabric/cert:/cert -d ngt_reactjs_image:v1
	


### 4. Usage:
Login url: ```https://<hostname:9000> ```        
	step 1: Login with *ngt_user/ngt_user*
	step 2: Home page Click on Discovery Button from Banner or Discovery Toolset link from Navigation.
	step 3: Browse SCMD or SCOPE ZIP file and press upload button.
	step 4: Select Report List Menu item to View Report Table. 
