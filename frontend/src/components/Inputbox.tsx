
const Inputbox=({title,placeholder,id}:{title:string,placeholder:string; id:string})=>{
    return <div>
        <label htmlFor={id} className="font-medium text-xl my-2">{title}
        </label>
        <div>
        <input placeholder={placeholder} id={id} className="border-1 w-full my-2 rounded-lg p-1 "></input>
        </div>
    </div>
}
export default Inputbox