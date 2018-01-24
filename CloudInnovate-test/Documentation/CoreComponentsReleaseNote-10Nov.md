# Core components : Content and Notes

### About
Core components consist of a Portal for ingestion and analytics, Python-based REST APIs and Open Source graph database (Neo4j). 

### Build
The following builds are included:
* Ingestion and Analytics - 0.3.0
* Neo4j - image version 1
* Portal - 0.2.0

### Features included in this release
* New REST API endpoints:
  * file_systems, reporting all file system details
  * middleware_components, reporting all middleware component details
  * network_interface, reporting all network interface details
  * server_function, reporting list of servers and their primary function
  * virtual_servers,returning list of virtual servers
* Ingest Bluecat data
* Ingest disposition data from SCOPE
* Ingestion program to apply default configurations based on source
* Enhancements to asynchronous requests, using queues

PORTAL:
* File upload for discovery data 
    * ADDI
    * SCOPE
    * SCMD
    * SCOPE+
    * BlueCAT
* View insights by means of reports
  1) Block Storage
  2) Server Information
  3) System Processor
  4) Server Model
  5) Inventory Summary
  6) Server Information by DNS
  7) Server Information by Printer
  8) Application By DNS
  9) Application By Printer
  10) Easy Migration Candidate
  11) File Systems
  12) Middleware Components
  13) Network Interface
  14) Server Function
  15) Virtual Servers


### Fixes
Not applicable

### Change log
Not applicable

### Known issues
* Audit functionality is yet to be implemented
* Bi-directional relationships are not formed for all nodes

Rest API:
* No validations to check for 
    1) Empty zip files during file upload
    2) Existance of data files in the zipped folder.
    
PORTAL:
* Maximum File Size for Ingestion - No Limitation.
* If user encounters "Some error occurred, please try after sometime" message during file upload, Ingestion will not be initiated. Please contact the Administrator to get the Next gen Tooling Swagger Console link. Access the link in browser, Add and Confirm the security exception and retry file upload in the portal.
* Timeout/Exception handling yet to be incorporated
* Logout functionality yet to be incoporated
* Following reports download empty files
  1) Block Storage
  2) Server Information
  3) System Processor
  4) Server Model


### Unit Test cases
Following test cases were executed and tested:
* PORTAL UI: 
* Login to portal
    * User should be able to login using W3id credentials
    * User should be able to navigate to discovery screen and analyze screen from home screen.
    * User should be able to navigate to discovery screen by clicking discovery button on the banner
    * User should be able to browse discovery, graph files and upload (please refer to known issues and limitations)
    * User should be able to navigate to home screen from discovery screen and analyze screen
    * User should be able to navigate to analyze screen by clicking analyze button on the banner
    * User should be able to view list of reports on analyze screen
    * User should able to view below reports
    * User should be able to download reports on analyze screen in three formats i.e., html, csv and pdf.
    
  1) Block Storage
  2) Server Information
  3) System Processor
  4) Server Model
  5) Inventory Summary
  6) Server Information by DNS
  7) Server Information by Printer
  8) Application By DNS
  9) Application By Printer
  10) Easy Migration Candidate
  11) File Systems
  12) Middleware Components
  13) Network Interface
  14) Server Function
  15) Virtual Servers

* Unit Tests through Swagger Console:
   * file_systems, reporting all file system details
   * middleware_components, reporting all middleware component details
   * network_interface, reporting all network interface details
   * server_function, reporting list of servers and their primary function
   * virtual_servers,returning list of virtual servers

* Unit Tests through IDE:
    * Ingest Bluecat data
    * Ingest disposition data from SCOPE  
    * Ingestion program to apply default configurations based on source
    * Enhancements to asynchronous requests, using queues
* Automated test scenarios
    * Check extension of ingested file. It should be ZIP.
    * Check extension of files in ZIP file. ZIP can only have file_rules.json and CSV files
    * Check content of file_rules.json. It should be valid JSON
    * Check if unique_id is tracked in API: GET /datafiles/unique_id/{unique_id}. 
    * Check if ingested ZIP file is a valid ZIP file
    * Python code should be able to consume ingested ZIP file with extra files not included in file_rules.json
    * Python code should be able to consume ingested ZIP file which does not have all the files included in file_rules.json
    * Check if ingested ZIP file has all files readable
    * Python code should through appropriate error if NEO4J connection is not available
    * Python code should through appropriate error if NEO4J connection is not available
    * Python code should through appropriate error if NEO4J connection is not available
    * Python code should through error when upload request is made while another upload is in progress
    * Check if file_rules.json is available in ZIP file
    * Check if ZIP file is not empty
    * Python should be able to execute and create required directory if data directory is missing in import directory in neo4j home
    * Python should be able to execute and create required directory if graph_files directory is missing in import directory in neo4j home
    * Python should be able to execute and create required directory if graph_files/nodes directory is missing in import directory in neo4j home
    * Python should be able to execute and create required directory if graph_files/relationships directory is missing in import directory in neo4j home
    * Python should be able to execute and create required directory if config/node directory is missing in import directory in neo4j home
    * Python should be able to execute and create required directory if config/relationship directory is missing in import directory in neo4j home
    * Check sync mode is working for discovery files upload
    * Check sync mode is working for graph files upload
    * Test Report Server by Printer

### Test Artifacts - Functional Testing

* API_Ingestion_Funtional Test Cases

   https://ibm.ent.box.com/folder/41564435080
   
 * API_Analysis_Funtional Test Cases
 
   https://ibm.ent.box.com/folder/41564435080

 * UI_Funtional Test Cases
 
 https://ibm.ent.box.com/folder/41564452240
 * Test Data
 
 https://ibm.ent.box.com/folder/41564120062
 
### Test Report
* Box Link

   https://ibm.ent.box.com/folder/41723050781

### Defect Report
* Box link 
https://ibm.ent.box.com/folder/41723050781 

### Code Artifacts 
All code artifacts are in https://github.ibm.com/ngt/zeus.git
