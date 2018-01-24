# Package Download and Extraction

   1. Go to your HOME directory of the Server(Linux Machine) $HOME (/home/<system_user>)
   2. Download the package Corecomponents.tar from below location:
   
    	https://ibm.box.com/s/e3w57cegqd8lfkc644pzlmw9p2z3zkxx
   3. Untar the Corecomponents_27th_oct.tar file using the command given below
   	```
		tar -zxvf Corecomponents_27th_oct.tar
	```
   4. Remove the tar file
   5. Directory structure should be like $HOME/Corecomponents/

# Graph database configuration

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Usage


### 1. Package Location:

 * Refer to Package Download and Extraction
   
   
### 2. Deployment Instructions:

Pre-Requisites:

* A Linux virtual Machine with Docker.io(Version:17.05.0-ce) and docker-compose installed
* Set your HOME directory (see environment variable $HOME):

Dependencies:
* None as of now

### 3. Configuration and Installation:

* Versions
	* Neo4j version used is 3.2.1
        	
* Volumes
    1. Go to your HOME directory
    2. Download the package volume.zip inside the directory $HOME from below location:
    	https://ibm.box.com/s/5qye21swn0ggevbe6m2co6p3a8tewmp1
    3. Untar "volume.tar" file using the command given below

    ```
        tar -zxvf Volume.tar
    ```

    4. Remove the tar file
    5. Directory structure should be like now $HOME/fabric/<files and folder present in volume.zip>
    6. Volume creation is complete
    
* Security (Keys, Ceritificates, OIDC)
    * Neo4j creates its own self signed certificate
* Network (Ports)
    * Port :7474(Neo4j Browser default)
    * Port :7687(Neo4j Graph Database default)
    * Port :7473(Neo4j secure port default)

### 4. Usage:

Follow below Steps

1. Go to $HOME/Corecomponents/graphdb
2. Verify Dockerfile is present
	* Run the following commands
		To create the image:
		```
		docker build -t ngt_neo4j:v1 .  
		```	
		To start the container
		```
		docker run --name=ngt_neo4j --publish=7474:7474 --publish=7687:7687 --publish=7473:7473 -d --volume=$HOME/fabric/neo4j/data:/data --volume=$HOME/fabric/neo4j/import:/import ngt_neo4j:v1
		```	
        
3. Neo4j URL is accessible at:
	* Http-Link: "http://host-name:7474/browser"
	* username/password for Neo4j database:neo4j/aic
        
# Ingestion and Analytics Configuration

Contents:

 * Package Location
 * Deployment Instructions, including steps for Configuration and Installation
 * Usage


### 1. Package Location:

 * Refer to Package Download and Extraction

### 2. Deployment Instructions:

Pre-Requisites:
* Docker.io is installed on the server. Get Docker at https://www.docker.com/
* A container with Neo4j is available. (refer to Neo4j usage guide)
* Volume containing import location for Neo4J should be available 

Dependencies:
* None 

Configuration and Installation:
1. Go to directory location  $HOME/Corecomponents/ingestion
4. Check for Dockerfile and Deploy folder in the above location
4. Run the command given below
	```
	docker build -t ngt_python_image:v1 .
	```
5. Provide HOSTNAME of the server in the below docker run command (-e NEXT_GEN_TOOLING_SERVER_HOSTNAME="<<--HOSTNAME--->>")
	ex :-e NEXT_GEN_TOOLING_SERVER_HOSTNAME="abcdefgh5343.in.ibm.com"
6. Run the container image with command
```
	docker run --name=ngt_python_container --publish=8443:8443 --volume=/home/cloud_user/fabric/neo4j/data:/data --volume=/home/cloud_user/fabric/cert:/cert --volume=/home/cloud_user/fabric/neo4j/import:/import -e NEXT_GEN_TOOLING_SERVER_HOSTNAME="<<--HOSTNAME--->>" -d ngt_python_image:v1
```

### 3. Usage:

Step by Step use of functionality.

1. Open Browser and enter url to view swagger api specifications: https://<<hostname>>:8443/
2. View REST end-points for Upload and Reports services. 
3. Upload data using POST method of datafiles end-point <br>
	a)Selecting files to upload <br>
	b)Data source type <br>
	c)Mode of upload (Synchronous or Asynchronous) <br>
	d)Provide a unique id,to check the status of upload later(ex: 1234) <br>
	
User has to ensure that the zip file contains datafiles and also a configuration file (file_rules.json). Configuration file maps columns of CSV file to Common Information Model keys. Guidance to create this file is available <A href="https://github.ibm.com/ngt/zeus/blob/master/Documentation/Ingestion%20Rules%20ConfigurationV0.1.docx"> here </A>
    
4. Check the status of ingestion process using GET /datafiles/{unique_id} endpoint.
5. Once the upload process is complete, user can execute reports using /reports/{reportName} endpoint.



# Portal Configuration

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Usage
 * Demo


### 1. Package Location:

 * Refer to Package Download and Extraction
   
 
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
    1) Go to $HOME/fabric/properties folder, 
    2) open the properties.ini file
    3) change property root.url to the hostname and port of the ingestion and analytics container.
    4) change user.name to "user name" of your choice, user.pass to "user password" of your choice
    5) Go to $HOME/Corecomponents/portal/ directory
    6) Ensure Dockerfile and deploy folder are available in the portal root directory(/home/<<user_home>>/Corecomponents/portal/)
    7) Run the command given below
    
    		docker build -t ngt_reactjs_image:v1 .
    8) Run the container image with command, make sure the port you specify is free:
    
    		docker run --name=ngt_reactjs_container --publish=9000:9000 --volume=$HOME/fabric/cert:/cert --volume=$HOME/fabric/properties:/properties -d ngt_reactjs_image:v1 

### 4. Usage:
 * Login to portal using appropriate user name and password selected in the above section. 
 * On home screen, click on discovery button in Banner
 * Browse graph (ADDI) and discovery files (SCMD, SCOPE, SCOPE+ ) and press upload button.
 * Go back to home screen, by clicking home icon on the left
 * On home screen, click on analyze button in Banner. 
 * To view report details, click on each report

### Demo:
  * Demo recording is available at https://ibm.ent.box.com/file/241433536200
