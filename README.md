# NETFLIX-CLONE
LETS CREATE A FULL MERN NETFLIX CLONE
## 1. INFRASTRUCTURE
### 1.1 DESCRIPTION: The MERN project will be composed of two main folders.
> * SERVER
> * CLIENT
### 1.2 SET UP
#### 1.2.1 DEPLOY SERVER
> **Description:** The server side will be deployed using express in NODE.js a
dd the following code in your SERVER folder in ther terminal.
        
        yarn add axios cookie-parser cors dotenv express express-validator jsonwebtoken mongoose nodemon

**STEP 1**: Once the project is created add into the package.json the following lines: 
        "name": "mern-stack-ntflix-2023", 
        "type": "module",
        "version": "0.0.1",
        "author": "Lictical",
        "main": "index.js",
        "license": "",
        "scripts": {
        "start": "nodemon index.js"
        },
