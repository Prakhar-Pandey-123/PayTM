import express from "express"
import jwt from "jsonwebtoken"

const auth=(req,res,next)=>{
    try{
        const headers=req.headers.authorization;
    if(!headers || !headers.startsWith("Bearer ") ){
        return res.status(401).json({
            message:"token not valid"
        })
    }
    const token=headers.split(" ")[1];
    const validate= jwt.verify(token,process.env.JWT_SECRET);
    req.user=validate
    next();
    }
    catch(error){
        console.log(error);
        return res.status(401).json({
            message:"token invalid"
        })
    }
}
export default auth