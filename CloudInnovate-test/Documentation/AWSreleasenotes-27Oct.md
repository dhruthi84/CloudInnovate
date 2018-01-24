# AWS ACCELERATION MIGRATION

### About
AWS acceleration migration is achieved through python programs which are creating the bucket, uploading the templates into that bucket and then executing those templates to create stack

### Build
The following builds is included:
* version 0.3

### Features included in this release
This version consists of five python scripts , which are creating S3 bucket , uploading the templates into that bucket, creating network layer, application layer and database migration from mysql to postgresql using Cloud Formation Templates.

### Fixes
Not applicable

### Change log
* Externalization of user inputs into file. A json file has all the input required instead of providing all the inputs 
  on command line. This is done for automation where stack creation needs to be performed without manual intervention.
* Added error handling . 

### Known issues
* All the error conditions are not handled.

### Test cases
Following test cases were executed and tested:
* To check if that bucket has been successfully created.
* Check that the templates are placed in correct bucket.
* Check if all the stacks are created or not.
* Check if all the templates got executed.
* In AWS DMS console verify that source and target is created and rule-set is generated.

### Code Artifacts 
Please refer to the link (<A HREF="https://ibm.box.com/s/8j3fsxvq133chhqavfnl3ycj05txu9u5">link.</A>)

### Deployment guidance
Please refer to the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/AWS%20Accelerators%20for%20migration-27Oct.md">link.</A>)
      

### Documentation
Please refer to the following (<A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/AWS%20Accelerators%20for%20migration-27Oct.md">link.</A>)
