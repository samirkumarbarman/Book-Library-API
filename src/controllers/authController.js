import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/userModels";
import dotenv from "dotenv";

dotenv.config();

//Register a new User

export const registerUser = async () =>{
    try {
        const {userName, email, password} = req.body()
        let user = await User.findOne({email});
        if (user){
            return res.status(200).json({message:"user exist"});
        }

        const salt = await bcrypt.genSalt(10); //generate the salt
        const hashPassword = await bcrypt.hash(password, salt); //hash password

        user = new user({userName, email, password : hashPassword}); //create new user
        await user.save(); //save user

        res.status(200).json({message:"User registered successfully"});
    } catch (error) {
        res.error(500).json({message:"Something is wrong"});
    }
};


//User login

export const login = async () =>{
    try {
        const { email, password } = req.body();
        const user = await User.findOne({email});

        if (!user){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched){
            return res.status(404).json({message:"Invalid password"});
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{ecpiresIn:"1h"});

        res.json(token);
    } catch (error) {
        res.error(500).json({message:"Something went wrong"});
    }
};


// Get userProfile

export const getUserProfile = async () => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.error(500).json({message:"Something went wrong"});
    }
};