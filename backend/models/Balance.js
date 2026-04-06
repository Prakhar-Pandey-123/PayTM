import mongoose from "mongoose";
import userModel from "./User.js";

const balanceSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        default:0
    }
})

const balanceModel=mongoose.model("Balance",balanceSchema);
export default balanceModel
