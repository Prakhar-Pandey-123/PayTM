import { useNavigate } from "react-router-dom";

const Linker=({title,btntext,to}:{title:string;btntext:string;to:string})=>{
    const navigate=useNavigate();
    return(
        <div>
            {title}
            <button onClick={()=>{
                navigate(`${to}`)
            }} className="underline text-blue-800 cursor-pointer">
                {btntext}
            </button>
        </div>
    )
}
export default Linker
// tdb