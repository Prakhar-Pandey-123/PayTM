const Navbar=({title}:{title:string})=>{
    return(
        <div className="bg-white flex flex-row  m-4 justify-between w-full border-b-3 p-2 px-10 border-gray-300 ">
            <div className=" text-3xl font-bold">
                {title}
            </div>
            <div className="flex items-center gap-4 font-semibold text-xl">
                Hello, User
                <div className="bg-gray-200 w-13 h-13 rounded-full">
                </div>
            </div>
        </div>
    )
}
export default Navbar