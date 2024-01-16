import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();//initialization of dotenv

//connection to DB

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log("Connection failed")
})
const app = express();
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})
