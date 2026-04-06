import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import { useState } from "react"
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
            localStorage.setItem("token",res.data.token);
            localStorage.setItem("username",res.data.username);
        }
        else {
            toast.error(res.data.message);
        }
    }
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