# ICMS Project
This is an Insurance company's Claim management web app, built using the MERN Full-Stack, Docker, Git, ...

## Description
[Desc....]
- To run the backend app alone, run the following command: ```npm start``` -> This will run the backend server, as well as the mongoDB instance (created through Atlas)
- To run the frontend app alone, run the following command: ```npm start```


## Technologies / Tools

### Backend (NodeJS):
Used libraries:
- ```Express```: To run the app
- ```Axios```: HTTP client API framework that allows developers to make promises while making a request (GET, POST, DELETE, PUT requests) communicating with the server (tested with Postman). <!-- ? [Similar libraries: AJAX] -->
- ```nodemon```: a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
- ```Async```: using promises, callbacks, and async/await to handle asynchronous code.
- ```Mocha```: a popular JavaScript testing framework that can be used for both front-end and back-end testing.
- ```mongoose```: a MongoDB object modeling tool designed to work in an asynchronous environment.
- ```Helmet```: middleware for Node.js web applications that helps to secure them by setting various HTTP headers which can help to mitigate common web application security vulnerabilities.
- ```cors```: (Cross-Origin Resource Sharing) is a security feature designed to prevent malicious websites from stealing data from legitimate websites. the cors library is a package for providing a Connect/Express server-side middleware that can be used to enable CORS with various options.
- ```body-parser```: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
<!-- ```cloudinary```: provides simple image and video upload, transformation, optimization, and delivery capabilities that you can implement using code that integrates seamlessly with your existing Node.js application. -->
- ```multer```: Multer is a middleware for handling multipart/form-data, which is primarily used for uploading files in Node.js web applications. It allows you to handle data that is being submitted from forms containing files, such as images or videos, and store them on your server.
- ```bcrypt```: Used for password hashing after user creation.
- For authentication, i'm using the ```jwt``` token. Once the user logs in successfully a jwt token will be generated for them.


### Frontend (React):
- ```MaterialUI```: React UI component library for shipping new features faster.
- ```Redux```: state management library that provides a centralized store that holds all the application's state.
- ```React-Bootstrap```: front-end framework for building responsive and mobile-first web applications using React.
<!-- ```concurrently```: This will allow us to automate the task of starting our React app and our web server concurrently.
We need to include the following scripts in the package.json file to use concurrently:
    "backend": "node ../back/src/server.js",
    "frontend": "set PORT=3006 && react-scripts start",
    "dev": "concurrently \"npm run backend\" \"npm run frontend\"" -->


### DB: MongoDB (Mongo Atlas)


### Docker:
- ```Dockerfile```: specifies the dependencies and configuration needed for your application, and we use ```docker build``` command to create a Docker image from the Dockerfile, that can then be used to deploy the application in a containerized environment.


### Git


## Things to add:

You need to create 2 .env files (one for the backend, one for the frontend), where the one in the backend will contain these paramters: 

```js 
user='<mongo-atlas-username>'
password=<mongo-atlas-password>

PORT=<port>

jwt_secret='<secret_key-for-the-jwt-token>'
```


### PS: 
I'm also using the ```BetterComments``` VS Code extension for the comments, so if you're wondering why the additional ? / ! / * in the comments, it's because of the extension.
