# Graph database configuration

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Usage


### 1. Package Location:

 * Neo4j package is available in the below box location
 
  https://ibm.box.com/s/zw152kvuq1wvbmgv2zv8ib9zeecp8sog
   
   
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
    2. Create a folder named "fabric"
    3. Download the package volume.zip inside the directory "fabric" from below location:
    	https://ibm.box.com/s/o6q0jzzfjz6oopozbhpzf8am3x50d4qt
    4. Unzip "volume.zip" and set the destination folder as $HOME/fabric/
    5. Remove the zip file
    6. Directory structure should be like now $HOME/fabric/<files and folder present in volume.zip>
    7. Go to "config" folder in "fabric" and edit the "host" in file "neo4j-host.conf", ex: host=server_ip
    8. Volume creation is complete
    
* Security (Keys, Ceritificates, OIDC)
    Neo4j creates its own self signed certificate
* Network (Ports)
    Port :7474(Neo4j Browser default)
    Port :7687(Neo4j Graph Database default)
    Port :7473(Neo4j secure port default)

### 4. Usage:

* Steps

1. Create a folder with any name of your choice(without special characters), ex:$HOME/neo4j
2. Download the zip from https://ibm.box.com/s/zw152kvuq1wvbmgv2zv8ib9zeecp8sog
3. Extract it in '$HOME/neo4j/' and remove the zip 
4. Now you should be able to see the file structure as '$HOME/neo4j/' and Dockerfile present in this location with a jar file to be pushed
5. Go to folder '$HOME/neo4j/' where Dockerfile is present
	* Run the following commands
		To create the image:
		```
		 	docker build -t ngt_neo4j:v1 .  
		```	
		To start the container
		```
			docker run --name=ngt_neo4j --publish=7474:7474 --publish=7687:7687 --publish=7473:7473 -d --volume=$HOME/fabric/neo4j/data:/data --volume=$HOME/fabric/neo4j/import:/import ngt_neo4j:v1
		```	
        
6. Neo4j URL is accessible at:
	* Http-Link: "http://host-name:7474/browser"
	* username/password for Neo4j database:neo4j/aic
        
# Ingestion and Analytics Configuration

Contents:

 * Package Location
 * Deployment Instructions, including steps for Configuration and Installation
 * Usage


### 1. Package Location:

 * Ingestion & Analytics Package is available at 
 	https://ibm.box.com/s/hc2oijzp1byh3ztgkp3xitoi9zg27913

### 2. Deployment Instructions:

Pre-Requisites:
* Docker.io is installed on the server. Get Docker at https://www.docker.com/
* A container with Neo4j is available. (refer to Neo4j usage guide)
* Volume containing import location for Neo4J should be available 

Dependencies:
* None 

Configuration and Installation:
1. Go to directory location  (e.g. /home/<<user_home>>)
2. Create a folder with any name for ex: /home/<<user_home>>/python/
2. Go to created folder in previous step and Extract the zip file downloaded from the Box location given in Setp:1(package Location)
3. Remove the zip file 'ingestion.zip'
4. Check for Dockerfile and Ingestion folder in the above location(/home/<<user_home>>/python/)
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

* Step by Step use of functionality.

1. Open Browser and enter url to view swagger api specifications: https://<<hostname>>:8443/
2. View REST end-points for Upload and Reports services. 
3. Upload data using POST method of datafiles end-point
	a)Selecting files to upload
	b)Data source type 
	c)Mode of upload (Synchronous or Asynchronous)
	d)Provide a unique id,to check the status of upload later(ex: 1234)
4. Check the status of ingestion process using GET /datafiles/{unique_id} endpoint.
5. Once the upload process is complete, user can execute reports using /reports/{reportName} endpoint.
