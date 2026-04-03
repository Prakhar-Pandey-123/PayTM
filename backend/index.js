import express from "express"
const app=express();

import dotenv from "dotenv"
dotenv.config();

import connectDB from "./config/mongodb.js";
connectDB();

app.get("/users",(req,res)=>{
    const {username,password}=req.body

    // add to db

    res.json({
        message:"user created successfully"
    })
})

app.listen(3000,()=>{
    console.log("app listening at the port 3000")
})