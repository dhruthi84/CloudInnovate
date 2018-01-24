# Core components : Content and Notes

### About
Core components consist of a Portal for ingestion and analytics, Python-based REST APIs and Open Source graph database (Neo4j). 

### Build
The following builds are included:
* Ingestion and Analytics - build number 155
* Neo4j - image version 1
* Portal - build number 131

### Features included in this release
REST APIs:
* Application By printers report detailing printers used by applications
* Easy Migration Candidates report providing list of application names that have no dependencies from other applications.
* Nodes Connected With Server report providing a list of Node types connected with a particular server

PORTAL:
* File upload for discovery data
    * ADDI
    * SCOPE
    * SCMD
    * SCOPE+
* View insights by means of reports
  1) Total Nodes
  2) Total Relationships
  3) Total Relationships by Node
  4) Volume Info
  5) Service Info
  6) Process Info
  7) Server Model Info
  8) Orphan Node Count
  9) Node Info
  10) Cross Application Database Crud Report
  11) Inventory Summary


### Fixes
Not applicable

### Change log
Not applicable

### Known issues
* Audit functionality is yet to be implemented
* Bi-directional relationships are not formed for all nodes
* Dynamic relation generation is not implemented
* Leading and trailing spaces in input file will result in duplicate nodes
* Server to DNS report does not return any kind of data
* Ingestion program fails if SCMD data is ingested before SCOPE.

PORTAL:
* The access to the individual pages is not protected. User can access any page without logging in
* Upload graph file - allows to upload ADDI graph file  
* Upload file - allows to upload SCMD, SCOPE, SCOPE+ file
* No file validation at this moment
* Spinner has not been incorporated when UI request is being processed
* Upload button has not been disabled while app is uploading a file. Hence, has to wait till the response pops up. This may take few seconds to minutes based on data size.
* No navigation from discovery screen to analyze screen. User can navigate to discovery/analyze screen from home screen
* Name of reports to be changed to more meaningful names
* As of now, user can see popup screen (browser) on success of upload.
* Timeout/Exception handling and user data validation yet to be incorporated


### Test cases
Following test cases were executed and tested:
* PORTAL UI: 
* Login to portal
    * User should be able to login using appropriate user and password
    * User should be able to navigate to discovery screen and analyze screen from home screen.
    * User should be able to navigate to discovery screen by clicking discovery button on the banner
    * User should be able to browse discovery and graph file and upload (please refer to known issues and limitations)
    * User should be able to navigate to home screen from discovery screen and analyze screen
    * User should be able to navigate to analyze screen by clicking analyze button on the banner
    * User should be able to view list of reports on analyze screen
    * User should able to view below reports
    
        1) Total Nodes
        2) Total Relationships
        3) Total Relationships by Node
        4) Volume Info
        5) Service Info
        6) Process Info
        7) Server Model Info
        8) Orphan Node Count
        9) Node Info
        10) Cross Application Database Crud Report
        11) Inventory Summary

* Tests through Swagger Console:
    1) Application By printers 
    2) Easy Migration Candidates report
    3) Nodes Connected With Server report
    
  Test data is available <A HREF="https://github.ibm.com/ngt/zeus/tree/master/tests/testdata">here </A>

### Code Artifacts 
All code artifacts are in https://github.ibm.com/ngt/zeus.git

### Deployment guidance
Please refer to the following for Core components(<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/CoreComponents-13Oct.md">link.</A>)
      

### Documentation
Please refer to the following for Core components(<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/CoreComponents-13Oct.md">link.</A>)

