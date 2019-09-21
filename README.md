# Diamante
Diamante is a boilerplate full stack web application developed by Mario Martin. The project is boot strapped with Docker, Docker-Compose, Redis, PostgreSQL, Node, Express, React, SocketIO and uses SSL for encrypted communication and is entirely developed in [Typescript](https://www.typescriptlang.org).  

## Getting Started
The following instructions will get you up and running on your host machine for development. See the deployment section below for notes on how to deploy this project into production.

## Development
Diamante is a stand alone, batteries included application.  But there is a small setup process to make things easier.  Follow these directions and you'll be up and running in no time. First thing you'll need to do is clone this repo:

### Clone the repo
Clone using ssh:
```
git clone git@github.com:MediaByte/diamante.git
```
or https:
```
git clone https://github.com/MediaByte/diamante.git
```
### Make sure you have typescript installed as a global
Before you continue, make sure you have [Typescript installed](https://www.npmjs.com/package/typescript) as a global npm module. You can check this by running the following command:
```
$ tsc -v
```

### Install the project dependencies
Next, run the following command in your terminal:
```
$ cd diamante && npm install && tsc && cd dashboard && npm install && npm run build && cd ..
```
This command will install all the necessary project dependencies.

### HTTPS for development
Diamante uses OpenSSL as its certificate authority for secure & encrypted communication.  You are free to use whatever certificate authority you like, but if you're strapped with time and need to start developing, use this quick helper to get a certificate that will work (make sure to run this in the diamante directory):
```
$ cd config
$ openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
During this process, you'll be prompted to answer a few questions. If you are building this for development, you can safely ignore all the prompts and just hit the return key to get your keys.

### Install Docker and Docker-Compose
Next, you will need Docker and docker-compose installed in your development machine.  Follow these instructions [to get started with Docker on MacOS](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/)

You can run the following to verify your installation:
```
docker-compose --version
```

With Docker installed on your development machine, run the following command in your terminal:
```
docker-compose up --build
```
Your project should immediately come up and you are ready to begin development.  Verify your project is up by copy and pasting the following URL in a browser: [https://localhost:5000](https://localhost:5000).

That's all there is to it.  Happy hacking!

## Client Side Development
Diamante is boot strapped with Create React App.  To work on front end code head over to the dashboard folder in this directory and in your terminal run: 
```
npm start
```
This should start the development server on port 3000 with hot reload.


To create a static production build, run the following command in the dashboard directory:
```
npm run build 
```

## Tests
Diamante uses Jest for unit tests. Our test suite is fully automated to test key functionality. Prior to making any changes in the code or pushing to github, make sure to run the following command in the Diamante directory to ensure your tests are passing:
```
npm test
```

## Deployment
To deploy this project, you will need docker and docker-compose installed on your host machine. Assuming you are running linux, follow these instructions [to get started with Docker](https://docs.docker.com/install/linux/docker-ce/debian/)

You can run the following to verify if it is installed:
```
$ docker-compose --version
```

With Docker installed on your deployment machine, run the following command in your terminal:
```
$ docker-compose start
```


## Author
* **Mario Martin** - *Author* - [MediaByte](https://github.com/MediaByte)


