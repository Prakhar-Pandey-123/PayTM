
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate=useNavigate();
    const username = localStorage.getItem("username") || "User";
    const firstname = localStorage.getItem("firstname") || "User"; // default
    const [bal,setBal]=useState("0");
    const [arr,setarr]=useState([]);
    const [search,setSearch]=useState("");

    async function fn(){
        // console.log(localStorage.getItem("token"));
         const res=await axios.get("http://localhost:3000/api/v1/balance/getBalance",{
            headers:{
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
         })
        //  console.log(res);
         const num=res.data.balance;
         const result=num.toFixed(2);
         setBal(result);
    }
    async function getusers(){
        // console.log(search)
        const res=await axios.get("http://localhost:3000/api/v1/user/searchUser",
          {
            headers:{
              Authorization:`Bearer ${localStorage.getItem("token")}`
            }
          ,
            params:{
                filter:`${search}`
            }            
        })
        // console.log(res);
        setarr(res.data.users);
    }
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
      // console.log(res);
      if(res.data.success===false){
        navigate("/login");
      }
      }
      catch(e){
        navigate("/login");

      }
    }
    useEffect(()=>{
        getusers();
    },[search]);

    useEffect(()=>{
      check();
       fn()
      //  getusers()
    },[]);


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow "
      >
        <h1 className="text-2xl font-bold cursor-pointer">Payments App</h1>

        <div className="flex items-center gap-3">
          <span className="text-gray-700">Hello, {firstname}</span>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
            {username[0].toUpperCase()}
          </div>
          <button className="border-2 p-1 rounded-md bg-red-200 cursor-pointer " onClick={()=>{
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            navigate("/login");
          }}>
            Log Out
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="p-6 max-w-5xl mx-auto">

        {/* Balance */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Your Balance - <span className="ml-2 font-bold" >₹ {bal}</span>
          </h2>
        </div>

        {/* Users Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Users</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e)=>{
                setSearch(e.target.value)}
            }
          />

          {/* User List */}
          <div className="space-y-3">
            {arr.map((user:any) => (
              <div
                key={user._id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-medium">
                    {user.firstname[0].toUpperCase()}
                  </div>
                  <span className="font-semibold">{user.firstname}{" "}{user.lastname}</span>
                </div>

                {/* Right */}
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                onClick={()=>{
                    navigate(`/send?userId=${user._id}&name=${user.firstname}`)
                }}
                >
                  Send Money
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;