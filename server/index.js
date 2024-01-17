import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
dotenv.config();//initialization of dotenv

//connection to DB

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{
    console.log("Connection failed")
})
const app = express();

app.use(express.json());
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})


//defining api route of user router

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);