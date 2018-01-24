# Overview of APIs

NextGen APIs can be accessed at http://localhost:3000/downloadfile?fileName=README.md Browser shows a message that the security certificate presented by this website was not issued by a trusted certificate authority and request user to choose next step. Please click on "continue to this website" to view APIs.

## Available Endpoints
 * POST /datafiles/discovery<br> This endpoint can be used to ingest discovery data from SCOPE or SCMD sources. It takes four parameters: <br>
 **file** This takes ZIP file containing discovery files along with file mapping rules file (file_rules.json). Instructions on configuring file_rules.json file can be found in "Referenced files" section.<br>
 **source** List of discovery tools using which ingested files are generated. Currently we have SCMD and SCOPE. <br>
 **mode** Options are sync and async. Selecting sync will wait for upload to finish and then throw status. Selecting async will cause upload to process in background. Status of upload can be queried by using provided unique_id in GET /datafiles/{unique_id} URL.<br>
 **unique_id** A string value which is an identifier to identify upload requests. 
* GET /datafiles/{unique_id}<br>This endpoint is used to get the status of datafile upload.
* POST /datafiles/graph<br> This endpoint can be used to ingest Graph files directly to Neo4J database. It takes three parameters <br>
 **file** This takes ZIP file containing discovery files along with configuration file required to upload graph files. Instructions on preparing configuration files can be found in "Referenced files" section<br>
 **mode** Options are sync and async. Selecting sync will wait for upload to finish and then through status. Selecting async will cause upload to process in background. Status of upload can be queried by using provided unique_id in GET /datafiles/{unique_id} URL.<br>
 **unique_id** A string value which is an identifier to identify upload requests. 
* GET /reports/app_attr_list <br> This report returns the attributes created for 'Application' node. 
* GET /reports/app_list <br> This report returns the list of Application Names in the database.
* GET /reports/app_node_report <br> This report provide information about Application whether it is associated with a job or module or transaction and also other information like type.It takes following parameters: <br> **app_list** User can get list of applications available by performing GET /reports/app_list and then use one or more application names to provide as comma separated list. eg: A, A01
* GET /reports/application_job_execution_nodes_and_complexity_report <br> This report gets all Job execution nodes for an App with Complexity. Execution nodes are nodes that have 'Executes' relationship with Application node. It takes following parameters: <br> **app_name** User can get list of applications available by performing GET /reports/app_list. User can then provide one application name from the list. <br> **app_attr** User can get list of application attributes available by performing GET /reports/app_attr_list. User can then provide one application attribute name from the list.
* GET /reports/application_job_execution_nodes_report <br> This report gets all 'Execution' Nodes for Jobs within an Application. 'Execution' nodes are those nodes that have 'Executes' relationship with Application node. It takes following parameters: <br> **app_name** User can get list of applications available by performing GET /reports/app_list. User can then provide one application name from the list. <br> **app_attr** User can get list of application attributes available by performing GET /reports/app_attr_list. User can then provide one application attribute name from the list.
* GET /reports/cross_app_interface_dataset <br> This report returns Interface data set for an application. It takes following parameters: <br> **app_list** User can get list of applications available by performing GET /reports/app_list. User can then use one or more application names to provide as comma separated list. eg: A, A01
* GET /reports/cross_application_database_crud_report <br> This report returns the database CRUD operations done on the application - outside the code. 
* GET /reports/in_scope_and_not_used_by_app <br> This report returns Applications that are in scope but not used. It takes following argument. <br> **app_name** User can get list of applications available by performing GET /reports/app_list. User can then provide one application name from the list.
* GET /reports/job_attr_list <br> This report returns attributes of Jobs. 
* GET /reports/job_data_nodes_report <br> This report gets all Data Nodes for a Job. It takes following parameters: <br> **job_name** User can get list of jobs available by performing GET /reports/job_list. User can then provide one job name from the list. <br> **job_attr** User can get list of job attributes available by performing GET /reports/job_attr_list. User can then provide one job attribute name from the list.
* GET /reports/job_execution_node_report <br> This report gets all EXECUTION Nodes for a Job. It takes following parameters: <br> **job_name** User can get list of jobs available by performing GET /reports/job_list. User can then provide one job name from the list. <br> **job_attr** User can get list of job attributes available by performing GET /reports/job_attr_list. User can then provide one job attribute name from the list.
* GET /reports/job_list <br> This report returns list of Jobs.
* GET /reports/no_scope_relationships_nodes <br> This report returns nodes without scope attribute. 
* GET /reports/no_usage_relationship_nodes <br> This report returns nodes without USAGE relationship. 
* GET /reports/node_info <br> This report gets Orphan node information.
* GET /reports/orphan_node_count <br> This report gets Orphan node count by Node type.
* GET /reports/out_of_scope_and_used_by_app <br> This report gets list of nodes that are tagged as out of scope but are used by Application. It returns Applications that are in scope but not used. It takes following parameters: <br> **app_name** User can get list of applications available by performing GET /reports/app_list. User can then provide one application name from the list.
* GET /reports/process_info_report <br> This report lists processes configured on the server.
* GET /reports/server_info_report <br> This report details of server such as hostname,IP address, OS and root filesystem size.
* GET /reports/server_model_info <br> This report gives information about the server, its model and IP addresses.
* GET /reports/total_nodes <br> This report gets count of nodes for each node type.
* GET /reports/total_relationships <br> This report gets overall Relationship counts from the database.
* GET /reports/total_relationships_by_node <br> This report gets overall Relationship counts by Node Association from the database.
* GET /reports/volume_info_report <br> This report gets information on Volumes configured on a server. 

## Pre-requisites
 These APIs can be invoked through browser or a tool like POSTMAN or through any REST client such as curl.

## Input Datasets
* Current version of the tool can consume input files from SCMD, SCOPE and ADDI. Sample data files are located in box.
* In the current version, User also need to provide a file_rules.json configuration file, along with data, to map CSV columns to Graph Nodes. This task will not be needed in the future version. Ingestion program will pick right set of files in next version.
* Instructions on configuring file_rules.json file can be found in "Reference" section. Sample file_rules.json for SCMD is available in "Sample" section.

## Example

Sample input file for SCMD and output as a Neo4J graph are stored in box. User can download the sample, modify contents and upload data.

## Reference

Instruction to create **file_rules.json**: <br><br>
**file_rules.json** is array of discovery file names. Each file has json block in which we have following sections: <br>
**source_columns key** matches with column name in the corresponding discovery file. <br>
**target_columns key** matches with node name for corresponding node label in graph. <br>
**target_columns relationship** is an optional field which contains information required to build relationship between nodes when there is ambiguity. This may contain two fields i.e. **occurrence** and **order**. <br>
**occurrence** If in a file multiple columns are mapped to same node name then first node name has occurrence 1 and next occurrence 2 and so on.<br>
**order** If relationship exists between same node label then we need to provide which node label is source and which node label is target.


## Sample

* <A HREF="https://ibm.box.com/s/gbptm4mg0u7kepgz9fejbi2zju8etmby">Sample_CSV_FILE_DIR</A>



