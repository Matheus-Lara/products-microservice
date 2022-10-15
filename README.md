# products-microservice

This project aims to meet the requirements for a semester architecture discipline project of software engineering bachelor degree course at Positivo University.

### Description

A simple dockerized Node.js CRUD API for simple products management.

### Setup the project

To run the project you must have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

1) In the project root folder, run `docker compose up -d` to build and run the Node.js api server and MongoDB database server. 
  If everything works, you will see the output below at the end of the process.

![image](https://user-images.githubusercontent.com/63257275/196007322-53c5cf59-7e30-43d9-b932-023f85f43ed7.png)

This first step will install npm dependencies into `nodejs-api` container as well.

2) Check if the database and the api server are up running `docker compose ps` command:

![image](https://user-images.githubusercontent.com/63257275/196007495-4a3c5573-5093-4980-afd3-74d705091a69.png)

You can also use the docker VSCode extension to check if the containers are up:

![image](https://user-images.githubusercontent.com/63257275/196007698-6f2a4f62-ba31-4516-8eeb-9961c9eace61.png)

### Testing the api

to test the API you have two possible ways:

1) Check `server,js` to verify the available endpoints and `model/product.model.js` to check the required schema for POST/PUT requests

2) You can install [Postman](https://www.postman.com/downloads/) and [import](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-data-into-postman) the `postman-collection/products-microservice.postman_collection.json` into a Postman workspace, the API endpoints will be shown as below:

![image](https://user-images.githubusercontent.com/63257275/196007904-9af1f963-8bb7-484c-aca5-f6b75b47d0ba.png)
