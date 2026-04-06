
import userModel from "../models/User.js";
import bcrypt from "bcrypt"

const updateInfo=async(req,res)=>{
   try{
     const id=req.user.id;
    const {password="",firstname="",lastname=""}= req.body;

    const user=await userModel.findById(id);
    if(!user){
        return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    let hashed=user.password;
    if(password){
        if(password.length < 3){
            return res.status(400).json({
        success:false,
        message:"password too small"
    })
        }
        hashed=await bcrypt.hash(password,10);        
    }
    const updateduser=await userModel.findByIdAndUpdate(id,{
        firstname:firstname|| user.firstname,
        lastname:lastname||user.lastname,
        password:hashed||user.password    
    },{
        new:true
    });
    // await updateduser.save();
    return res.status(200).json({
        success:true,
        message:"updated successfully"
    })
   }
   catch(error){
    return res.status(500).json({
        success:false,
        message:"internal server error"
    })
   }
}

// api/users?filter=prakh
const searchUser=async(req,res)=>{
    try{
        const filter=req.query.filter || "";
        const id=req.user.id;
    const users=await userModel.find({
        _id:{$ne:id},
        $or:[
            {
                firstname:{
                    "$regex":filter
                }
            },{
                lastname:{
                    "$regex":filter
                }
            }
        ]
    }).select("username firstname lastname")
    if(!users){
        return res.status(400).json({
            message:"No user found !"
        })
    }
    return res.status(200).json({
        users:users
    })
    }
    catch(error){
        return res.status(500).json({
            message:"internal error"
        })
    }
}

export {updateInfo,searchUser}