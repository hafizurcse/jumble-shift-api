*Notes before executing code*: Please open a terminal and run the following command:
```
npm install
```
# Question 1: Build a word jumble function jumbleSh(string, n) 

A jumble function called `jumbleShift` has been created in `jumble_tes/src/lib` and can be tested by cd'ing to the above mentioned directory and using the following code snippet :
```
const jumbleShift = require('./jumbleShift');
console.log(jumbleShift('test 123!', 1)); // uftu 123
console.log(jumbleShift('test 123!', 100)); // paop 123
// add more as needed
```

# Question 2: Build Unit Tests for the Jumble function

Unit tests has been written and executed for the jumbleShift function. In the root directory (`jumble_test`), just write in your console:

```
npm test
```
It will run unit tests written to test `jumbleShift``

# Question 3: Build The Jumble Service

A RESTful API has been built using express and some other node modules
To start the server, please run:
```
npm start
```
An API endpoint called `jumble` has been implemented. Considering server is running at  http://localhost:3000, the full endpoint path would be `http://localhost:3000/api/jumble?n=1` where `n` is the number of shifts. It requires the string to be shifted to be sent as request body in the following format:
```
{
	"message": "test 123!"
}
```
and considers `x-www-form-urlencoded` body as available in POSTMAN (https://www.getpostman.com/)


#Question 4:

## Building the Jumble Container
The docker configuration is defined in a docker file called `Dockerfile` which is available in the root directory. Please consider using a ubuntu machine/instance.
1. cd to the root directory `jumble_test`
2. run `docker build -t hafiz/jumble-api-service .`
(try with sudo if there is a permission issue)
3. run `docker run -p 8080:8080 hafiz/jumble-api-service`
(try with sudo if there is a permission issue)
It will build a docker container and deploy the jumble RESTful API

## Deploying in Heroku
It has been deployed in Google Cloud VM instance but due to IP issue, it is not accessible at this stage. Currently trying to deploy in Heroku.

Finally managed to deploy in Heroku. It has been so easy

Steps to deploy:
1. *CLI*: Heroku CLI installed dev machine
2. *Heroku login*: A user created and logged in using the credentials
3. *Create your App*: Run command
```
heroku create
```
which creates the app and gives the url `https://still-island-53664.herokuapp.com/ `
4. Run
```
git push heroku master
```
which deploys the app in the cloud.
5. *Ensure that at least one instance of the app* is running:
```
heroku ps:scale web=1
```
6. *Open the app* by running the following command:
```
heroku open
```
7. *Test API*:
Use the URL `https://still-island-53664.herokuapp.com/api/jumble?n=${NUMBER_OF_SHIFTS}`
and POSTMAN to test.
