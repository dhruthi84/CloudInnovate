# Package Configuration Manual

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Usage
 * Demo


### 1. Package Location:

 * Download the Portal Docker Image present in below Box location https://ibm.ent.box.com/folder/40368942158
   
 
### 2. Deployment Instructions:

Pre-Requisites:

* A Linux virtual Machine with Docker.io(Version:17.05.0-ce) and docker-compose installed
* After installation of Docker, check if docker is running or not
* Server has Internet connectivity
* Ensure ports are available for use

Dependencies:

* All mentioned pre-requisites should be up and running.
* Neo4j and Ingestion/Analytics container should be running to be consumed by UI.
* Set your HOME directory (see environment variable $HOME)


### 3. Configuration and Installation:

* Versions:
	1) React@15.5.0 
	2) Redux@3.0.4 
	3) Redux Thunk@2.2.0
	4) Webpack@2.2.0-rc.0
	5) Node@8.2.0
	

* Installation steps:
    1) Create a directory (i.e /home/<<user_home>>/portal)
    2) Change directory to portal => cd /home/<<user_home>>/portal)
    3) Go back to parent 'user name' directory (../portal) and extract the zip file (Note: Zip file available in Box location which mentioned in package location)
    4) Then, remove the zip file 'portal.zip'
    5) Ensure Dockerfile and web folder are available in the portal root directory(/home/<<user_home>>/portal/)
    6) Go to $HOME/fabric/properties folder, 
    7) open the properties.ini file
    8) change property root.url to 'python application hostname and port'. Ensure for valid hostname and port and it should be available
    9) change user.name to <user name>, user.pass to <user password>
    10) Run the command given below
    	docker build -t ngt_reactjs_image:v1 .
    11) Run the container image with command:
    	docker run --name=ngt_reactjs_container --publish=9000:9000 --volume=$HOME/fabric/cert:/cert -d ngt_reactjs_image:v1 

### 4. Usage:
 * Login to portal using appropriate user name and password. 
 * On home screen, click on discovery button in Banner
 * Browse graph (ADDI) and discovery files (SCMD, SCOPE, SCOPE+ ) and press upload button.
 * Go back to home screen, by clicking home icon on the left
 * On home screen, click on analyze button in Banner. 
 * To view report details, click on each report

### Demo:
   * Demo recording is available at https://ibm.ent.box.com/folder/40376634186
