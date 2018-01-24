# Core components : Content and Notes

### About
Core components consist of a Portal for ingestion and analytics, Python-based REST APIs and Open Source graph database (Neo4j). 

### Build
The following builds are included:
* Ingestion and Analytics - build number 155
* Neo4j - image version 1
* Portal - build number 26

### Features included in this release
REST APIs:
* Inventory Summary Report, providing sever, operating system, processor and file sytem details.
* Server by DNS report
* Inventory summary, server by dns and server by printer reports are available as downloadable reports. Reports can be downloaded in pdf, csv and html formats.

PORTAL:
* File upload for discovery data
    * ADDI
    * SCOPE
    * SCMD
    * SCOPE+
* View insights by means of reports
  1) Entities  
  2) Relationships
  3) Relationships by Entities
  4) Block Storage
  5) Server Information
  6) System Processor
  7) Server Model
  8) No Usage Relationship Nodes
  9) No Scope Relationship Nodes
  9) Inventory Summary
  10) Server Information by DNS
  11) Server Information by Printer


### Fixes
Not applicable

### Change log
Not applicable

### Known issues
* Audit functionality is yet to be implemented
* Bi-directional relationships are not formed for all nodes

Rest API:
* Discovery files are uploaded in the Graph section and Graph Files are uploaded in the Discovery File section. It should not have behaviour
* When we try to ingest the Empty files as one test and zip file containing only Rule Files as another test , we got the success status message
* Orphan node count report not generated as Expected after data ingestion

PORTAL:
* The access to the individual pages is not protected. User can access any page without logging in
* Upload graph file - allows to upload ADDI graph file  
* Upload file - allows to upload SCMD, SCOPE, SCOPE+ file
* No file size and extension validation have been implemented
* Upload button has not been disabled while app is uploading a file. Hence, has to wait till the response pops up. This may take few seconds based on data size.
* User gets 'some error occurred. Please try after sometime' when user tries to upload a file when previous request is being processed.
* Timeout/Exception handling and user data validation yet to be incorporated
* Orphan entities and orphan entities count reports are not working as expected
* Discovery files are uploaded in the Graph section and Graph Files are uploaded in the Discovery File section
* When we try to ingest the Empty files and zip file containing only Rule Files got the success message in UI 


### Unit Test cases
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
    
     1) Entities
     2) Relationships
     3) Relationships by Entities
     4) Block Storage
     5) Server Information
     6) System Processor
     7) Server Model
     8) No Usage Relationship Nodes
     9) No Scope Relatiionship Nodes
     10) Inventory Summary
     11) Server Information by DNS
     12) Server Information by Printer
* Unit Tests through Swagger Console:
    1) Inventory Summary report
    2) Server By DNS report
    3) Inventory summary, server by dns and server by printer reports are downloaded in pdf,csv and html formats.
* Automated test scenarios
     * Ingested file extension is not ZIP
     * Ingested zip file has non csv file
     * Ingested zip does not have file rules file
     * Check status of async upload with invalid unique_id
     * Ingest corrupted zip file
     * File rule file has filename which is not in ZIP file
     * ZIP has more files than file rules file has filenames
     * ZIP has corrupted csv file
     * NEO4J is not started during upload
     * NEO4j is not started during report
     * Try ingesting ZIP file while ingestion is already in progress
     * Verify report Server By Printer

  Test data is available <A HREF="https://ibm.ent.box.com/folder/40426281088">here </A>

### Test Artifacts - Functional Testing

* BOX link provided below for Functional TestCases.

* API_Ingestion_Funtional Test Cases

   https://ibm.ent.box.com/folder/40954306218
   
 * API_Analysis_Funtional Test Cases
 
   https://ibm.ent.box.com/folder/40954440072

 * UI_Funtional Test Cases
 
 https://ibm.ent.box.com/folder/40954418623
 
### Test Report
* Box Link

   https://ibm.ent.box.com/folder/41051437292

### Defect Report
* Box link 
https://ibm.ent.box.com/folder/41051437292 

### Code Artifacts 
All code artifacts are in https://github.ibm.com/ngt/zeus.git

### Deployment guidance
Please refer to the following for Core components(<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/CoreComponents-26Oct.md">link.</A>)
      

### Documentation
Please refer to the following for Core components(<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/CoreComponents-26Oct.md">link.</A>)

