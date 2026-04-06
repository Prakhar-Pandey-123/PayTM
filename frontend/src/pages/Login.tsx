import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import { useState,useEffect } from "react"
import Linker from "../components/Linker"
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Login=()=>{
    const navigate=useNavigate();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");

    async function fn(){
        console.log(username);
        console.log(password);
        const res=await axios.post("http://localhost:3000/api/v1/user/login",{
            username,
            password
        })
        console.log("res=",res);
        // console.log("res.data=",res.data);
        if(res.data.success){
            toast.success(res.data.message);
            navigate("/dashboard");
            console.log(res);
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",res.data.username);
            localStorage.setItem("firstname",res.data.firstname);
        }
        else {
            toast.error(res.data.message);
        }
    }
     const check=async()=>{
        if(localStorage.getItem("token"))
        {
          navigate("/dashboard");
        }
        const res=await axios.post("http://localhost:3000/api/v1/user/me",
          {},
        {
          headers:{
              Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        }
      )
      if(res.data.success===true){
        navigate("/dashboard");
      }
      
      
    }
    useEffect(()=>{
        check()
    },[])
    return(
        <div className="flex h-screen justify-center items-center">
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center max-w-1/2 ">
    
            <Heading title="Sign Up" subtitle="Enter your credentials to access your account"></Heading>

            <Inputbox title="Email" placeholder="johndoe@gmail.com" id="3"
            onchange={setusername}
            ></Inputbox>

            <Inputbox title="Password" placeholder="*********" id="4"
            onchange={setpassword}
            ></Inputbox>

            <div className="w-full bg-black rounded-lg" onClick={fn}>
            <Button props="Sign In">

            </Button>
            </div>

            <Linker title="Don't have an account ? " btntext="Sign Up" to="/signup">
            </Linker>

        </div>
        </div>
    )
}
export default Login