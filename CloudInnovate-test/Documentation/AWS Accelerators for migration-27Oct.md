# AWS Accelerators for migration

Contents:

* Package Location
* Deployment Instructions
* Configuration and Installation
* Functionality Description
* Demo

### Package Location 
Download the AWS accelerators archive from the below location:

 * https://ibm.box.com/s/8j3fsxvq133chhqavfnl3ycj05txu9u5

### Deployment instructions 
 * Not applicable

### Configuration and Installation
* Pre-Requisites :
    * You need to have Python 3.x and Boto framework 3.x installed in the server or work station where you will execute these accelerators
        * Download and install python from https://www.python.org/downloads/
        * To install Boto3, goto command line and execute below command
         ```
          pip install boto3
         ```

    * You must have your AWS account access key id and key.
    * These are the user specific credentials for AWS account , you can generate these by using the following link:
http://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html
    * Create RDS instance for mysql and Postgres

* Configure AWS Credentials:
    * Install aws-cli
    * Open aws-cli and execute below command 

```
aws configure

```

* It will prompt you aws access key id: enter the id , press enter
* Again it will ask you for aws secret key , enter the key , press enter
* Now it will prompt for region , enter the region where you want to create bucket and run the templates

### Functionality Description

* Bucket Creation in AWS:
    * goto the AWS_CODE folder after extracting the downloaded zip 
    * Run the createbucket python file from your command prompt.
    * Please update bucket name and region name  in main.json file
```
      python createbucket.py
```

NOTE: Region name must be same which you have given while configuring aws credentials.

This will create the S3 Bucket.

* Upload the templates into the Bucket:
    * These templates are embedded in code.
    * Templates will create resources for Network Layer in AWS. (VPC ,Subnet ,NACL ,Route Table, Gateways, Nat Gateway and security group),
     Application Layer using Elastic Beanstalk , DMS Source , Target and Rule Set for DB Migration. 
    * Run the following command , it will upload the templates into the bucket which you have created in earlier step
```
      python upload_files.py
```

This will upload the Cloud Formation Templates in the S3 bucket.


* Create stack by running the templates:
    * Execute the following command
```
      python createstack.py
``` 

* This will create the network resources in AWS.

 
 * Create Application layer Layer by  running the templates:
    * Execute the following command
```
      python applayer.py
``` 
 
* Please update following information in main.json file:
   * keypair- keypair created for the region 
   * This will create the application layer using AWS  BeanStalk  
* Ignore the warning if any, you can see the progress of applayer creation in the AWS portal
      
 * Create DB layer Layer by  running the templates:
     Execute the following command
   
```
      python dblayer.py
``` 
 
   * Please ensure main.json has following details:
      
      * MySqlDatabseUserName - user name for mysql RDS creation
      * MySqlDatabsePassword - passoword to be used for MySQL RDS
      * MySqlDBInstanceName - instance name of MySQL RDS
      * MySqlDatabaseName - Name of Database 
      * PostgresDatabseUserName- Username for Postgress database
      * PostgresDatabsePassword - Password for Postgress database 
      * PostgresDBInstanceName - Postgress database instance name
      * PostgresDatabaseName - Database name of Postgress DB
      * SourceDatabsePassword - Same as mysql RDS password 
      * TargetDatabsePassword - Same as Postgress DB password 
      * SourceDatabseUserName - Same as mySQL RDS user name
      * TargetDatabseUserName - Same as Postgress database user name 
      * targetRDSServerName - Same as Postgress RDS server name 
      * SourceRDSServerName - Same as MySQL RDS server name 
      * SourceRDSPort - Source (MySQLRDS) port 
      * TargetRDSPort  -Target  (Postgress RDS) port 
      * Keypair Name -Name of EC2 key pair 

* This will create source, target and rule-set in AWS DMS console.

* Ignore the warning if any, you can see the progress of dblayer creation in the AWS portal
* Troubleshooting
    * If the bucket creation fails
        * Try with a differant name for the bucket. Creation fails if the bucket already exists.
        * Do not use AWS as part of the bucket name.
        * Ensure you are using the same region for which the key is configured.
               
 

### 5. Demo
The demo can be found at the following URL : https://ibm.box.com/s/rop63wg1i77jee5k2tcq8vfiwxtcvp96
