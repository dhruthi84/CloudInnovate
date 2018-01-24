# Core components : Content and Notes

### About
The core components are built using open source graph database (Neo4j) and Python. 

### Build
The following builds are included:
* Ingestion and Analytics - build number 135
* Neo4j - image version 1

### Features included in this release
This version consists of swagger APIs for data ingestion and reports to gain insight into the IT landscape.

### Fixes
Not applicable

### Change log
Not applicable

### Known issues
* Audit functionality is yet to be implemented
* Bi-directional relationships are not formed for all nodes

### Test cases
Following test cases were executed and tested:
* Ingest the SCMD data from the swagger console
* Ingest the SCOPE data from the swagger console
* Ingest the ADDI data from the swagger console
* Process data from SCMD and then SCOPE for the same server node. Verify that data gets inserted or updated correctly. Ensure there there are no duplicates.
* Process data from SCOPE and then SCMD for the same server node. Verify that data gets inserted or updated correctly. Ensure there there are no duplicates.
* Upload data (zip file) with some correct and some incorrect formatted files - verify that all and the only correct files are processed.
* Trigger the following reports and verify that the proper JSON data is returned 
    * GET /reports/app_attr_list. 						This report returns the attributes created for 'Application' node. 
    * GET /reports/app_list.  						This report returns the list of Application Names in the database.
    * GET /reports/application_job_execution_nodes_and_complexity_report.	This report gets all Job execution nodes for a App with Complexity. Execution nodes are nodes that have 'Executes' relationship with Application node. 
    * GET /reports/application_job_execution_nodes_report.			This report gets all 'Execution' Nodes for Jobs within an Application. 'Execution' nodes are those nodes that have 'Executes' relationship with Application node.
    * GET /reports/cross_app_interface_dataset				this report returns Interface data set for an application. 
    * GET /reports/cross_application_database_crud_report			This report returns the database CRUD operations done on the application - outside the code. 
    * GET /reports/in_scope_and_not_used_by_app				This report returns Applications that are in scope but not used. 
    * GET /reports/job_attr_list						This report returns attributes of JOB object. 
    * GET /reports/job_data_nodes_report					This report gets all Data Nodes for a JOB. 
    * GET /reports/job_execution_node_report					This report gets all EXECUTION Nodes for a Job. 
    * GET /reports/job_list							This report returns list of Jobs.
    * GET /reports/no_scope_relationships_nodes				This report returns nodes without scope attribute. 
    * GET /reports/no_usage_relationship_nodes				This report returns nodes without USAGE relationship. 
    * GET /reports/node_info							This report gets Orphan node information
    * GET /reports/orphan_node_count						This report gets Orphan node count by Node type
    * GET /reports/out_of_scope_and_used_by_app				This report gets list of nodes that are tagged as out of scope but are used by Application.
    * GET /reports/process_info_report					This report lists processes configured on the server.
    * GET /reports/server_info_report						This report details of server such as hostname,IP address,  OS and root filesystem size
    * GET /reports/server_model_info						This report gives information about the server, its model and IP addresses
    * GET /reports/total_nodes						This report gets count of nodes for each node type
    * GET /reports/total_relationships					This report gets overall Relationship counts from the database
    * GET /reports/total_relationships_by_node				This report gets overall Relationship counts by Node Association from the database
    * GET /reports/volume_info_report						This report gets information on Volumes configured on a server. 


### Code Artifacts 


### Deployment guidance
Please refer to the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/CoreComponents.md">link.</A>)
      

### Documentation
Please refer to the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/CoreComponents.md">link.</A>)

