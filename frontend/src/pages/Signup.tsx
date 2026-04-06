import axios from "axios"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import Linker from "../components/Linker"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const Signup=()=>{
    const navigate=useNavigate();
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    async function fn(){
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
        const res=await axios.post("http://localhost:3000/api/v1/user/signUp",{
            firstname,
            lastname,
            username:email,
            password
        })
        console.log(res);
        if(res.data.success){
            toast.success(res.data.message);
            navigate("/login")
        }
        else{
            toast.error(res.data.message);
        }
    }

    return(
        
        <div className="flex h-screen justify-center items-center">
            
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center max-w-1/2 ">
    
            <Heading title="Sign Up" subtitle="Enter your information to create an account"></Heading>

            <Inputbox title="First Name" placeholder="John" id="1"
            onchange={setfirstname}
            ></Inputbox>

            <Inputbox title="Last Name" placeholder="Doe" id="2"
            onchange={setlastname}
            ></Inputbox>
            

            <Inputbox title="Email" placeholder="johndoe@gmail.com"
            onchange={setemail}
            id="3"></Inputbox>

            <Inputbox title="Password" placeholder="*********" id="4"
            onchange={setpassword}
            ></Inputbox>

            <div className="w-full bg-black rounded-lg" onClick={fn}>
            <Button props="Sign Up">

            </Button>
            </div>

            <Linker title="Already have an account ? " btntext="Login" to="/login">
            </Linker>

        </div>
        </div>
    )
}
export default Signup