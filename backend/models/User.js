import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    password:String,
    username:String,
    balance:Number
})

const Usermodel=mongoose.model("User",userSchema);
