# Migration Automation: Content and Notes

### About
This tool automates the migration of WebSphere based Java applications to JBoss (container image). The tool extracts the current application archives (WAR & EAR files), creates a new container image for the application with JBoss and deploys the application. The deployed application then can be validated by migration engineers or end users.

### Build
The following builds are included:
* Migration Automation scripts - version 0.1

### Features included in this release
* Password-less of copy of the WAR and EAR file from AIX server to Linux server
* Creation of JBOSS Docker image
* Deployment of the copied WAR and EAR file onto JBOSS running on container

### Fixes
Not applicable

### Change log
Not applicable

### Known issues
* Current implementation supports a single instance of JBOSS container. Clustered JBOSS scenario is not supported in this version. 

### Test cases
Following test cases were executed and tested:
* End to end testing:
    * Deploye a war file on WAS 8.5.5, using WAS console. Verify application is deployed successfully.
    * Enable password less authentication using sshsetup.docx
    * Run the <migrateaixlinux.sh> script. Verify that the war file is copied to the destination folder on Linux server.
    * Create JBOSS image using instructions provided in the release document.
    * Create a Docker container using instructions provided in the release document. Verify that the WAR file is deployment on JBOSS
    * Login to the admin console of JBOSS - default user : admin, password : Admin#007 
    * Verify that the war is visible on the console and there is option to remove / update the war file

### Code Artifacts 
Please refer the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/Automation%20Migration.md">link.</A>)

### Deployment guidance
Please refer to the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/Automation%20Migration.md">link.</A>)
      

### Documentation
Please refer to the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/Automation%20Migration.md">link.</A>)

