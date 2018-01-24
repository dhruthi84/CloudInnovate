# Microservices Generator: Content and Notes

This document relates to V1.0 released on 06 October 2017. 
This document pertains to Microservices Generator Component of the Next Gen Tooling release train

### About

There are many ways to start implementing microservices. One of the prominent one is to start with a Swagger. Swagger profiles complete specification for an API including API signatures and security model. For example, CMA has published swagger for Open Banking Read Write APIs. We have built an accelerator that takes this swagger as in input and generates a complete microservice chassis for every API in the swagger with a single command. The accelerator;
1. Creates implementation hooks for business logic for each API operations.
2. Create unit test case skeleton for each API operation.
3. Plugs in logging, error handling and API framework
4. Plugs in monitoring tools for operational monitoring
5. Registers the microservice with the microservice registry for consumers to discover.
6. Provides persistence implementation to easily persist the resources manages by the microservice
7. Provisions DevOps pipeline for continuous build and deploy for the microservice
8. Create JIRA tasks for each TODO task in the microservice

### Build

* The following builds are included in this release
    * MicroserviceCodeGenerator_Java V1.0 Build #  Date 06 Oct 2017

### Features
* The accelerator is capable of generating the above described chassis using Java technologies 

### Fixes
* Not applicable

### Change log
* Not applicable

### Known issues
 * Component fails to generate code for API's that do not have input parameters.

### Test cases
 * Test Execution Report can be found at https://github.ibm.com/ngt/zeus/blob/master/tests

### Code Artifacts
 * Download the Microservices code generator present at https://ibm.ent.box.com/file/230829336855

### Deployment guidance
* Please click <A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/MicroservicesCodeGenerator-Java.md">here.</A>

### Documentation
* Please click <A HREF="https://github.ibm.com/ngt/zeus/blob/master/Documentation/MicroservicesCodeGenerator-Java.md">here.</A>
