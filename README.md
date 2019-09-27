# Diamante
Diamante is a boilerplate full stack web application developed by Mario Martin. The project is boot strapped with Docker, Docker-Compose, Redis, PostgreSQL, Node, Express, React, SocketIO and uses SSL for encrypted communication and is entirely developed in [Typescript](https://www.typescriptlang.org).  

## Getting Started
The documentation below will get you up and running on your host machine for development and deployment. See the deployment section below for notes on how to deploy this project into production.

## Files and Folder structure
```
.
|-- .circleci
|   |-- config.yml
|
|-- keys
|   |-- auth
|       |-- private.key
|       |-- public.key
|   |-- server
|       |-- server.cert
|       |-- server.key
|
|-- lib
|   |-- client
|       |-- public
|           |-- favicon.ico
|           |-- manifest.json
|       |-- src
|           |-- assets
|               |-- images
|                   |-- logo.svg
|               |-- styles
|                   |-- App.styles.css
|                   |-- index.styles.css
|           |-- components
|           |-- containers
|               |-- app
|                   |-- App.test.tsx
|                   |-- App.tsx
|           |-- index.tsx
|           |-- react-app-env.d.ts
|           |-- serviceWorker.ts
|       |-- .gitignore
|       |-- package-lock.json
|       |-- package.json
|       |-- README.md
|       |-- tsconfig.json
|
|   |-- server
|       |-- constants
|           |-- server.constants.ts
|       |-- controllers
|           |-- auth
|               |-- authenticate.controller.ts
|           |-- register
|               |-- register.controller.ts
|           |-- signin
|               |-- createSession.controller.ts
|               |-- getAuthTokenId.controller.ts
|               |-- setToken.controller.ts
|               |-- signin.controller.ts
|               |-- signToken.controller.ts
|       |-- modules
|           |-- app.ts
|           |-- db.ts
|           |-- redis.ts
|           |-- socket.ts
|       |-- routes
|           |-- rest.api.routes.ts
|           |-- socket.routes.ts
|       |-- types
|           |-- type.definitions.ts
|       |-- server.ts
|
|-- postgres
|   |-- tables
|       |-- login.sql
|       |-- users.sql
|   |-- deploy_schemas.sql
|   |-- Dockerfile
|
|-- .gitignore
|-- docker-compose.yml
|-- Dockerfile
|-- package-lock.json
|-- package.json
|-- pg.env
|-- README.md
|-- server.env
|-- tsconfig.json
```

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
Before you continue, make sure you have [Typescript](https://www.npmjs.com/package/typescript) installed as a global npm package. You can check this by running the following command:
```
$ tsc -v
```

### Install the project dependencies
Next, run the following command in your terminal:
```
$ cd diamante && npm run build
```
This command will install all the necessary project dependencies.

### SSL for development
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
Diamante is boot strapped with Create React App.  To work on front end code head over to the client folder in this directory and in your terminal run: 
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

## Debugging real-time communication
Diamante uses Socket.IO for real-time communication. Provided, is a convenient javascript helper function to test your connection.

Create a seperate directory and run the following commands in your terminal:
```
$ npm init && npm install socket.io-client && touch client.js
```

Head over to your code editor of choice and copy and paste the following script in client.js:
```js
var io = require('socket.io-client');

var socket = io.connect('https://localhost', {rejectUnauthorized: false});

socket.on('connect', (stream) => {
    console.log('Connection Established');
    socket.emit('master', {data: "Hello World"});
    setInterval(() => {
        socket.emit('master', {data: "Hello World"});
        console.log("Message Sent");
    }, 5000);
});
```

...and then run the following command in your terminal:

```
$ node client.js
```
You should see some standard output in your terminal representing a connection established and packets being sent to the diamante server every 5 seconds.


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


