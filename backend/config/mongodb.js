import mongoose from "mongoose";


const connectDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected successfully");
    }
   catch(error){
    console.log("error in connecting to db",error);
   }
}
export default connectDB