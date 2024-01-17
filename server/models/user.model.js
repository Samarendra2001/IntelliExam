import mongoose from "mongoose";

//creating the Schema 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true}
);

//now creating the model

const User = mongoose.model('User',userSchema);

export default User;