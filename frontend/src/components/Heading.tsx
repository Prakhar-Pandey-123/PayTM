
const Heading=({title,subtitle}:{title:string ;subtitle:string})=>{
    return(
        <div className="flex flex-col  mx-auto pb-6">
        <div className="text-4xl p-2 font-medium flex flex-col mx-auto">
            {title}
            </div>
            <div className="text-md text-gray-500">{subtitle}</div>
        </div>
    )
}
export default Heading