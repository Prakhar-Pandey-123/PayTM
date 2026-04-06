
type Props={
    title:string;
    placeholder:string;
    id:string;
    onchange:(value:string)=>void
}

const Inputbox=({title,placeholder,id,onchange}:Props)=>{
    return <div>
        <label htmlFor={id} className="font-medium text-xl my-2">{title}
        </label>
        <div>
        <input placeholder={placeholder} id={id} className="border-1 w-full my-2 rounded-lg p-1 "

        onChange={(e)=>onchange(e.target.value)}
        ></input>
        </div>
    </div>
}
export default Inputbox