import Heading from "../components/Heading"
import Inputbox from "../components/Inputbox"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const Send=()=>{
    const [number,setNumber]=useState("0");
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    const userid=searchParams.get("userId");
    const name=searchParams.get("name");
    function fn(){
        console.log(number);
        console.log(userid);
        console.log(name);
    }
    

    return(
        <div className="flex h-screen justify-center items-center">
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center w-2/4 md:w-1/3">
    
            <Heading title="Send Money" subtitle=""></Heading>
            <div className="flex mx-auto items-center gap-5 mb-4">
                <div className="bg-green-600 rounded-full w-10 h-10 flex items-center ">
                </div>
                <div className="text-2xl font-medium">Friend's Name</div>
            </div>

            <Inputbox title="Amount (in Rs.)" placeholder="Enter amount" 
            onchange={setNumber}
            id="3"></Inputbox>

            <div className="w-full bg-green-600 rounded-lg cursor-pointer" onClick={()=>{
            fn()
        }}>
            <div className="flex mx-auto  text-white items-center rounded-md h-10 w-fit m-2">
        <button className="h-2/3 "
            onClick={()=>{
                fn()
            }}
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