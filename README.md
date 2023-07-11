# NETFLIX-CLONE
LETS CREATE A FULL MERN NETFLIX CLONE
## 1. INFRASTRUCTURE
### 1.1 DESCRIPTION: The MERN project will be composed of two main folders.
> * SERVER
> * CLIENT
### 1.2 SET UP
#### 1.2.1 DEPLOY MONGODB
> **Create Database**: Go to mongodb.com and follow:
* 1. Press Database 
* 2. Press Create
* 3. Press Shared for free access
* 4. Leave as it is or select as you wish
If it is already created then just connect:
* 1. Press Database
* 2. Press Connect
* 3. Press Connect applicatin(since its an node.js app)
* 4. Press Drivers
* 5. Copy string
* 6. Replace password 
* 7. paste in your node.js project
        
        MONGODB_URL="your-string-with-your-password"
#### 1.2.3 DEPLOY TMBD MOVIES APP
> To fetch data from TMBD go to:

        https://www.themoviedb.org/settings/api/new/form?type=developer
 
> Then, do the following steps:
* 1. Create API
* 2. Fill the formulaire with any data
* 3. Copy Token API Key and paste it in .env
* 4. Copy Token url and paste it in .env  (https://api.themoviedb.org/3/)
#### 1.2.3 DEPLOY SERVER
> **Description:** The server side will be deployed using express in NODE.js a
dd the following code in your SERVER folder in ther terminal.
        
        yarn add axios cookie-parser cors dotenv express express-validator jsonwebtoken mongoose nodemon
> **Structure:**
> * SERVER
>> * node_modules: essential part of project it contains all the libraries.
>> * package.json: it contains the configuration of the file
>> * package-lock.json: similar to package.json
>> * index.js: we create the server here and add the middle ware
>> * src: folder where the logic behind the index is created.
>>   * axios: uses axios to call for data
>>   * controllers: final end point where the logic for the end points happens
>>   * handlers: responses to errors and validation
>>   * middleware: takes care of authentication for the jsw authenticaiton
>>   * models: cretaes the collections and logic for the database
>>   * routes: create files to be used for the routes for the end points
>>   * tmbd: connects to the tmbd api
>>  
>>     
>**Structure for test endpoint**
>> index.js -> ./src/routes/index.js -> ./user.route.js -> ../handlers/request.handler.js -> ../controllers/user.controller.js
> 
> **STEP 1**: Once the project is created add into the package.json the following lines: 

        "name": "mern-stack-ntflix-2023", 
        "type": "module",
        "version": "0.0.1",
        "author": "Lictical",
        "main": "index.js",
        "license": "",
        "scripts": {
        "start": "nodemon index.js"
        },
> **CREATE .env FILE**: in the server folder create a .env file and add:
        
        MONGODB_URL=yourmongostringhere
        PORT= 5000
        TOKEN_SECRET= yourrandomsecret
        TMBD_BASE_URL=your-tmbd-api-url
        TMBD_KEY=your-tmbd-api-key
> **CREATE THE index.js FILE WITH THE SERVER INFO**: To do so add the following code:

        import express from "express"
        import cookieParser from "cookie-parser"
        import cors from "cors"
        import http from "http"
        import mongoose from "mongoose"
        import "dotenv/config"

        const app = express();

        app.use(cors());
        app.use(express.json);
        app.use(express.urlencoded({extended: false}));
        app.use(cookieParser());

        const port = process.env.PORT || 5000;
        const server = http.createServer(app);

        mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("Mongodb connected");
            server.listen(port,()=>{
                console.log(`Server is listening on port ${port}`);
            });
        }).catch((err)=>{
            console.log({ err });
            process.exit(1);
        });

#### 1.2.2 D

