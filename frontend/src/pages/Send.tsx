import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import { useNavigate } from "react-router-dom"
import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"

const Send=()=>{
    const [number,setNumber]=useState("0");
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    const userid=searchParams.get("userId");
    const name:string|null=searchParams.get("name");

     const check=async()=>{
      try{
        if(!localStorage.getItem("token"))
        {
          navigate("/login");
        }
        const res=await axios.post("http://localhost:3000/api/v1/user/me",
          {},
        {
          headers:{
              Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
      )
    //   console.log(res);
      if(res.data.success===false){
        navigate("/login");
      }
      }
      catch(e){
        navigate("/login");

      }
    }

    async function fn(){
        try{
            console.log(number);
        console.log(userid);
        const res=await axios.post("http://localhost:3000/api/v1/balance/transfer",{
                to:userid,
                amount:number
            }
        ,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(res);
        if(res.data.success){
            toast.success("Transaction Successful")
            
        }
        else{
            toast.error(res.data.message);
        }
        }
        catch(e){
             toast.error("Error in sending the money");
             
        }
        finally{
            navigate("/dashboard");
        }
    }
    useEffect(()=>{
        check()
    },[])
    

    return(
        <div className="flex h-screen justify-center items-center">
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center w-2/4 md:w-1/3">
    
            <Heading title="Send Money" subtitle=""></Heading>
            <div className="flex mx-auto items-center gap-5 mb-4">
                <div className="bg-green-600 rounded-full w-10 h-10 flex items-center ">
                    <div className="mx-auto font-bold text-2xl">{
                    name[0].toUpperCase()}</div>
                </div>
                <div className="text-2xl font-medium">{name?.toUpperCase()}</div>
            </div>

            <Inputbox title="Amount (in Rs.)" placeholder="Enter amount" 
            onchange={setNumber}
            id="3"></Inputbox>

            <div className="w-full bg-green-600 rounded-lg cursor-pointer" onClick={()=>{
            fn()
        }}>
            <div className="flex mx-auto  text-white items-center rounded-md h-10 w-fit m-2 cursor-pointer">
        <button className="h-2/3 cursor-pointer"
        >
           Initiate Transfer
        </button>
    </div> 
            </div>

            <div className="w-full bg-blue-400 rounded-lg cursor-pointer" onClick={()=>{
            navigate("/dashboard")
        }}>
            <div className="flex mx-auto  text-white items-center rounded-md h-10 w-fit m-2" >
        <button className="h-2/3 cursor-pointer" >
        Cancel
        </button>
    </div> 
            </div>
        </div>
        </div>
    )
}
export default Send