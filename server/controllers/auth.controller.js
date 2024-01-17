import bcryptjs from 'bcryptjs'
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/Error.js';

export const signup = async(req,res,next)=>{
    const{name,email,password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({name,email,password:hashedPassword});
    try{
        await newUser.save();
        res.status(201).json('User created successfully');
    }catch(error){
        next(error);
    }
}

export const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        const validUser = await User.findOne({email})
        if(!validUser){
            return next(errorHandler(404,'User not Found'));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password)
        if(!validPassword) return next (errorHandler(401,'wrong Credentials'));
        const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET);
        const {passwod:pass, ...rest} = validUser._doc;
        res.cookie('access_token',token,{htttpOnly:true}).status(200).json(rest);
    }catch(error){
        next(error)
    }
}