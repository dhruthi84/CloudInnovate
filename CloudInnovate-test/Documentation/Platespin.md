# Platespin
Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Functionality Description


### 1. Package Location:

 * Automation Migration scripts are available in the below location in box which should be downloaded to your working directory
 
   https://ibm.box.com/s/0fi0otr8xsnh7u4cgpogegv877jktkcu
 

### 2. Deployment Instructions:

Pre-Requisites:

* PlateSpin Migrate Client (V12.2) to be installed. IP Address, Username and Password should be available for discovery/migration of source VM.
* Source: Servers to be discovered/migrated with credentiails having sudo access/root access 
* Destination: vCenter (ESX5). This is the hypervisor where destination VMs will be created post migration


Dependencies:
* Source and Destination should be Linux/Windows VM


### 3. Configuration and Installation:

* Versions
	* Platespin Migrate Client V12.2
    	* vCenter VESX5



### 4. Usage:

* Step by Step use of functionality.

1. Extract the package from the specified path in section 1 
2. Run the discovery_server.ps1 script in windows powershell where platespin is installed
	Sample Command:
	```syntax:- discovery_server.ps1 PATH="C:/Program Files (x86)/PlateSpin Migrate Client/CommandLine"PASSWORD="windows_server_password" SourceIP="x.xx.xxx.xxxx" sourceuser_name="sudo user of source server" source_password="password for sudo user of source sever" type="type of server linux or windows"
	ex- ./discovery_server.ps1 -path_cmd C:/Users/IBM_ADMIN/ -host_password nitish123 -source_ip 9.109.123.220 -source_username sourceUser -source_password xyzpzy -type windows
	```
