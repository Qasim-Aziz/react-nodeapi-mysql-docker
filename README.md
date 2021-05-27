1. download or clone this repository 

https://github.com/Qasim-Aziz/react-nodeapi-mysql-docker/tree/new/data-from-json

2. extract files from zip folder 

3. open extracted folder with vs code and also open vscode terminal

4. cd json-example

5. docker-compose up --build

### wait until building images and and successfully spinup containers

## if you navigate to localhost:8181 here our appOne will be running

app one showing a little bit information of our data so clicked over view all button . it will take you on second app which will be running on localhost:8282 where it shows all the details.

you can do experiments with  comment the first app in docker-compose.yaml and then run docker-compose up

after that you can run app-one locally without docker container and access the second app with view all button it will navigate to you on second app which is running within container. 