const Button=({props}:{props:string})=>{
    return (
    <div className="flex mx-auto bg-black text-white items-center rounded-md h-10 w-fit m-2">
        <button className="h-2/3 ">
            {props}
        </button>
    </div> )
}
export default Button