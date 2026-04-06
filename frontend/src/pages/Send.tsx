import Heading from "../components/Heading"
import Inputbox from "../components/inputBox"

const Send=()=>{
    return(
        <div className="flex h-screen justify-center items-center">
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center w-1/4 ">
    
            <Heading title="Send Money" subtitle=""></Heading>
            <div className="flex mx-auto items-center gap-5 mb-4">
                <div className="bg-green-600 rounded-full w-10 h-10 flex items-center ">
                </div>
                <div className="text-2xl font-medium">Friend's Name</div>
            </div>

            <Inputbox title="Amount (in Rs.)" placeholder="Enter amount" id="3"></Inputbox>

            <div className="w-full bg-green-600 rounded-lg">
            <div className="flex mx-auto  text-white items-center rounded-md h-10 w-fit m-2">
        <button className="h-2/3 ">
           Initiate Transfer
        </button>
    </div> 
            </div>

            <div className="w-full bg-blue-400 rounded-lg">
            <div className="flex mx-auto  text-white items-center rounded-md h-10 w-fit m-2">
        <button className="h-2/3 ">
        Cancel
        </button>
    </div> 
            </div>
        </div>
        </div>
    )
}
export default Send