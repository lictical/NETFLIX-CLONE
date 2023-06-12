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

#### 1.2.2 DEPLOY SERVER
> **Description:** The server side will be deployed using express in NODE.js a
dd the following code in your SERVER folder in ther terminal.
        
        yarn add axios cookie-parser cors dotenv express express-validator jsonwebtoken mongoose nodemon

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
> ** CREATE .env FILE **: in the server folder create a .env file and add:
        
        MONGODB_URL=yourmongostringhere
        PORT= 5000
        TOKEN_SECRET= yourrandomsecret
        TMBD_BASE_URL=your-tmbd-api-url
        TMBD_KEY=your-tmbd-api-key
        
#### 1.2.2 D

