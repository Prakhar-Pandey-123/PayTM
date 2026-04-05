import Button from "../components/Button"
import Heading from "../components/Heading"
import Inputbox from "../components/inputBox"
import Linker from "../components/Linker"

const Login=()=>{
    return(
        <div className="flex h-screen justify-center items-center">
        <div className="border-2 mx-auto  flex-col  p-4 rounded-lg items-center justify-center max-w-1/2 ">
    
            <Heading title="Sign Up" subtitle="Enter your credentials to access your account"></Heading>

            <Inputbox title="Email" placeholder="johndoe@gmail.com" id="3"></Inputbox>

            <Inputbox title="Password" placeholder="*********" id="4"></Inputbox>

            <div className="w-full bg-black rounded-lg">
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