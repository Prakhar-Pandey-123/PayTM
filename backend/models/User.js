import mongoose, { Types } from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLenght:30
    },
})

const userModel=mongoose.model("User",userSchema);
export default userModel
