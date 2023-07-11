import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import http from "http"
import mongoose from "mongoose"                 // This allow us to connect to mongodb
import "dotenv/config"                          // This allow us to connect to .env file
import routes from "./src/routes/index.js"

const app = express();

app.use(cors());                                // Add cors functionality for authenticating between pages
app.use(express.json());                          // Add express to run the server
app.use(express.urlencoded({extended: false})); // Add url encoding
app.use(cookieParser());                        // Add cookies parser

app.use("/api/v1", routes);

/*===============  CREATE A CONNECTION TO TMONGOB AND MAKE THE PORT 5001 LISTEN  ==================================*/ 
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
