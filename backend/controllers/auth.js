
import express from "express"
import jwt from "jsonwebtoken"
import userModel from "../models/User";
import bcrypt from "bcrypt";
import balanceModel from "../models/Balance";
// hc v/s 
const signup=async (req,res)=>{
   try{
     const {firstname,lastname,password,username}=req.body;
    if(!firstname || !lastname || !password || !username){
        return res.status(400).json({
            success:false,
            message:"all input data needed"
        })
    }
    const olduser=await userModel.findOne({username});
    if(olduser){
        return res.status(400).json({
            success:false,
            message:"user already exists"
        })
    }
    const hashed=await bcrypt.hash(password,10);
    const user=await userModel.create({
        firstname,lastname,
        password:hashed,
        username
    })
    
    await balanceModel.create({
        userId:user._id,
        balance:1+Math.random()*1000
    })

    return res.status(200).json({
            success:true,
            message:"user created successfully"
        })
   }
   catch(error){
    console.log(error);
    return res.status(500).json({
            success:false,
            message:"internal server error",
            
        })
   }
}

const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({
            success:false,
            message:"all input data needed"
        })
    }
    const user=await userModel.findOne({username});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"user not found"
        })
    }
    const compared=await bcrypt.compare(password,user.password);
    if(!compared){
        return res.status(400).json({
            success:false,
            message:"wrong password"
        })
    }
    const token= jwt.sign({
        id:user._id
    },process.env.JWT_SECRET,
    {
        expiresIn:"7d"
    });
    return res.status(200).json({
        success:true,
        message:"signed in",
        username:username,
        token:token
    })
    }
    catch(error){
        console.log(error);
       return res.status(500).json({
        success:false,
        message:"internal server error"
    }) 
    }
}

export {signup,login}