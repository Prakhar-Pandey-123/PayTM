import userModel from "../models/User.js";
import balanceModel from "../models/Balance.js";
import mongoose from "mongoose";

const checkBalance=async(req,res)=>{
  try{
      const id=req.user.id;
    //404=> resource not found. 400=> wrong input from user
    if(!id){
        return res.status(404).json({
            message:"user not found"
        })
    }
    const user=await balanceModel.findOne({
        userId:id
    });
    if(!user){
        return res.status(400).json({
            message:"user not found"
        })
    }
    const balance=user.balance;
    return res.status(200).json({
        success:true,
        balance,
    })
  }
  catch(error){
    console.log(error)
    return res.status(500).json({
        success:false,
        messasge:"internal server error"
    })
  }
}

const transfer=async(req,res)=>{
    const session = await mongoose.startSession();
try {
  session.startTransaction();

  const { amount, to } = req.body;

  const account = await balanceModel.findOne({ userId: req.user.id }).session(session);
  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Invalid input" });
  }

  const toAccount = await balanceModel.findOne({ userId: to }).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({ message: "Receiver not found" });
  }

  await balanceModel.updateOne(
    { userId: req.user.id },
    { $inc: { balance: -amount } }
  ).session(session);

  await balanceModel.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  await session.commitTransaction();
  res.json({ success: true });

} catch (err) {
  await session.abortTransaction();
  res.status(500).json({ success: false });
} finally {
  session.endSession();
}
}


export {checkBalance,transfer};