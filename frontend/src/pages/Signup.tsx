import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/inputBox"
import Linker from "../components/Linker"
const Signup=()=>{
    return(
        <div className="flex h-screen justify-center items-center">
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center max-w-1/2 ">
    
            <Heading title="Sign Up" subtitle="Enter your information to create an account"></Heading>

            <Inputbox title="First Name" placeholder="John" id="1"></Inputbox>

            <Inputbox title="Last Name" placeholder="Doe" id="2"></Inputbox>

            <Inputbox title="Email" placeholder="johndoe@gmail.com" id="3"></Inputbox>

            <Inputbox title="Password" placeholder="*********" id="4"></Inputbox>

            <div className="w-full bg-black rounded-lg">
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