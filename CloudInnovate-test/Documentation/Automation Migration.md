# Package Configuration Manual
# WAS on AIX to JBOSS container on Linux
Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Functionality Description
 * Demo


### 1. Package Location:

 * Automation Migration scripts are available in the below location in box which should be downloaded to your working directory
 
   https://ibm.box.com/s/nzvokhb5p25gjhpcv9ulpcpc6siqa5jy
 

### 2. Deployment Instructions:

Pre-Requisites:

* WAS 8.5.5  on a AIX machine
* Linux server with Docker.io installed
* Enterprise approved JBOSS image(The image referred in this procedure is not IBM recommended image)
* Network connectivity is there between AIX and Linux(RHEL) machine


Dependencies:

* None for now


### 3. Configuration and Installation:

* Versions
	* Tested on WAS 8.5.5
	* Target RHEL 7.2 with docker version-17.05-ce


### 4. Usage:

* Steps

1. Extract the package from the specified path in section 1. The package contains 
	a)script for Copying WAR files 
	b)Dockerfile for provisioning of JBOSS container with WAR/EAR deployment
	c)Instructions to enable password-less authentication
2. Migration of WAR from WAS on AIX to JBOSS container on LINUX
	* Follow the instructions provided in "sshsetup.docx" to enable password-less login to target servers
	* Create a folder name "JBOSS" and place the Dockerfile and this location is where you copy WAR from AIX
	* Run the script "migrateaixlinux.ssh",which will copy the WAR/EAR file from AIX Server (where WAS is installed) to the chosen folder of VM. (This path is user configurable).
	sample command:-
	```
	./migrateaixlinux.ssh $path $app $destinationip $user_name $dest_path
	```
	* Go to chosen folder in LINUX box and verify the Dockerfile and WAR/EAR files are present, and move it to /JBOSS folder using command 
	```
	mv scopeplus.war /home/clod_user/JBOSS/
	```
	
	* Configure the Dockerfile
		1.Change the Dockerfile to point to Enterprise approved JBOSS image on docker registry in line 1
		2.Change the "scopeplus.war" to the filename that is placed in APP in line 2
		* COMMANDS
		
		-- Run the below command to create the Docker Image
		```
			docker build -t jboss/wildfly-admin . 
		```	
		-- Run the below command to run the container using the image
		```
			docker run -P -d jboss/wildfly-admin 
		```	
		-- Run the below command to find out the port number of the JBOSS service running on the container
		```
			docker ps -a 
		```	
        
Now, you should be able to access the JBOSS Admin console by using the URL

"http://host-name:port/console/" 
Login to Admin console:
	Username/Password:admin/Admin#007
 
### 5. Demo
 * The demo is available at this link : https://ibm.ent.box.com/folder/39257541061
