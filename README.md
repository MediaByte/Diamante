# Diamante
Diamante is a boilerplate full stack web application developed by Mario Martin.  It is a stand alone data acquisition service for most web applications and embeded systems. This project is developed with Docker, Docker-Compose, Express, Redis, PostgreSQL, React front end.

## Getting Started
The following instructions will get you up and running on your host machine for development, integration and deployment purposes. See the deployment section below for notes on how to deploy this project into production.

## Development
Diamante is a batteries included development and deployment application.  To contribute to this project, you'll need to clone this repo:

Clone the repo to your host machine using ssh:
```
git clone git@github.com:MediaByte/diamante.git
```
If you do not have SSH setup in your github account, try cloning using HTTPS with this command:
```
git clone https://github.com/MediaByte/diamante.git
```

You will need Docker and docker-compose installed in your development machine.  follow these instructions [to get started with Docker on MacOS](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/)

You can run the following to verify if it is installed:
```
docker --version
```
If your output in the terminal looks something like this:
```
[~/desktop]
Administrator-> docker --version
Docker version 18.09.2, build 6247962
```
CONGRATULATIONS!!!! 

With Docker installed on your development machine, run the following command in your terminal:
```
docker-compose up --build
```


### Client Side Development
Diamante is boot strapped with Create React App.  To work on front end code head over to the dashboard folder in this directory and in your terminal run: 
```
npm install
```
next, run the development server for live reload:

```
npm start
```

To deploy your changes into a production build, run the following command in the dashboard directory:
```
npm run build 
```
to create a static optimized version for deployment.


## Running tests
Diamante uses Jest for unit tests. Our test suite is fully automated to test key functionality. Prior to making any changes in the code or pushing to github, make sure to run the following command in the Diamante directory and ensure that all tests pass before you push changes into a master branch:
```
npm test
```

## Deployment
To deploy this project, you will need docker and docker-compose installed on your linux host machine. 

Assuming you are running linux, follow these instructions [to get started with Docker](https://docs.docker.com/install/linux/docker-ce/debian/)

You can run the following to verify if it is installed:
```
docker --version
```
If your output in the terminal looks something like this:
```
[~/desktop]
Administrator-> docker --version
Docker version 18.09.2, build 6247962
```
CONGRATULATIONS!!!! 

With Docker installed on your deployment machine, run the following command in your terminal:
```
cd ~/diamante && docker-compose up --build -d
```


## Author
* **Mario Martin** - *Author* - [MediaByte](https://github.com/MediaByte)


