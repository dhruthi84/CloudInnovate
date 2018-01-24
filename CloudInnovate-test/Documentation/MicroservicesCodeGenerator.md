# Microservices code generation setup and usage

Contents:

 * Package Location
 * Deployment Instructions
 * Configuration and Installation
 * Functionality Description


### 1. Package Location:

 * Download the Microservices code generator present at https://ibm.ent.box.com/file/230161657513
  
### 2. Deployment Instructions
* Download the zip file and extract zip file contents into a local directory
* README.md in the zip file mentions pre-requisites. Ensure that those pre-requisites are met in local environment. Tool assumes Ant, Git and Node.Js runtime to be available.
* Install API-Connect NPM module using 'npm install -g apiconnect' command
 
### 3. Configuration and Setup
* Extracted folders contain build.properties file .Set values for properties as shown in example. 
 
    application.name=NextGen <br>
    application.dir=C:/dip-api-framework/NextGen <br>
    application.swagger.dir=C:/dip-api-framework <br>
    application.swagger.file=nextGenSwagger <br>
    application.swagger.ext=json <br>
    
    Optional properties<br>
    git.url=HTTPS based Git repository url where generated code should be added <br>
    git.url.ssh=SSH based Git repository url where generated code should be added <br>
    git.repo=git repository name <br>
    git.branch=git branch to use <br>
    deploy.environments=environments to provison in Urbancode deploy pipeline. <br>
   
    Note that the application directory name has to be same Application name as per StrongLoop requirements: 'NextGen' in 
    above example.

* Place your Swagger file in the directory mentioned in build.properties
* Run dip-api-framework\create.bat file to create implementation code. This command starts the program and prompts users to make selections. Most of the prompts show information from build.properties file for reconfirmation, so user can press enter to proceed to next step. List below depicts shown prompts and the selections to be made (<b>bold</b>) <br>
    **  ? What's the name of your application? NextGen   **** [ <b>Press Enter </b>]<br>
    **  ? Enter name of the directory to contain the project: NextGen   [<b> Press Enter</b> ]<br>
    **  ? Which version of LoopBack would you like to use? 3.x (current) [<b> Select 3.x (current) from the options</b> ]<br>
    **  ? What kind of application do you have in mind? empty-server [<b>Select empty-server from the options</b>]<br>
    **  ? Enter the swagger spec url or file path: C:\dip-api-framework\nextGenSwagger.json  [ <b>Press Enter</b> ]<br>
    **  ? Select models to be generated: swagger_  [<b>Press Enter</b> ]<br>
    **  ? Select the data-source to attach models to: (no data-source) [ <b>Press Enter</b> ]<br>

* Implementation code is generated in the application.dir configured in build.properties on successful execution of script.
    
### 4. Functionality Description
The code generator allows you to generate microservices implementation from API specification defined in swagger format. This will generate APIC and Strongloop based microservice implementation and integrate DIP API framework into it. Node.Js implementation code was generated with this tool with NextGen tool Swagger definitions as input.

### 5. Demo
A quick overview of how the tool works is provided as a recorded demo available at https://ibm.box.com/s/ujthkpr650d54qy3pwwraf0gnt54lcuy

