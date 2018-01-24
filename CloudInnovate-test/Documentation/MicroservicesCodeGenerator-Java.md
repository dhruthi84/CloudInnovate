# Microservices code generation setup and usage

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Functionality Description


### 1. Package Location:

 * Download the Microservices code generator present at https://ibm.ent.box.com/file/230829336855
  
### 2. Deployment Instructions
* Download the zip file and extract zip file contents into a local directory
* README.md in the zip file mentions pre-requisites. Ensure that those pre-requisites are met in local environment. Tool assumes Maven and Java 8 to be available.
 
### 3. Configuration and Setup
* Extracted folders contain build.properties file .Set values for properties as shown in example. 
 
    application.name=NextGen <br>
    appliaction.package=com.ibm.nextgen <br>
    application.dir=C:/MicroserviceCodeGenerator_Java/MicroserviceCodeGenerator_Java <br>
    application.swagger.dir=C:/MicroserviceCodeGenerator_Java/MicroserviceCodeGenerator_Java <br>
    application.swagger.file=payment-initiation-app-1-1-0-swagger <br>
    application.swagger.ext=json <br>
    application.feature.isCamel=false <br>
    application.feature.isMysql=true <br>
       
* Place your Swagger file in the directory mentioned in build.properties
* Run create.bat file to create implementation code. This command starts the program and prompts users to make selections. Most of the prompts show information from build.properties file for reconfirmation, so user can press enter to proceed to next step. List below depicts shown prompts and the selections to be made (<b>bold</b>) <br>
    **  Please press 1(or)2 --1 =Normal Microservice Template. 2 =PCF Microservice Template-otherwise,defaulted to 1 [ <b>Press Enter </b>]<br>
    **  Confirm properties configuration:  [<b> Press Enter</b> ]<br>
    **  Do you want to commit to cloned git repo(Y/N)? [<b> Type N and click Enter</b> ]<br>

* Implementation code is generated in the application.dir configured in build.properties on successful execution of script.
    
### 4. Functionality Description
The code generator allows you to generate microservices implementation from API specification defined in swagger format. This will generate SpringBoot based microservice implementation.

### 5. Demo
A quick overview of how the tool works is provided as a recorded demo available at https://ibm.box.com/s/ujthkpr650d54qy3pwwraf0gnt54lcuy
