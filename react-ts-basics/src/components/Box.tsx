import { Dispatch, SetStateAction } from "react";


type inputValType = string | number

const Box = <T extends inputValType> ({
    label,value,setter
}:{
    label:string;
    value:T
    setter : Dispatch<SetStateAction<T>>
}) => {
  return (
    <form action="">
        <label>{label}</label>
        <input type="text" value={value} onChange={(e)=>setter(e.target.value as T)}  />
        <button type="submit">Submit</button>
    </form>
  )
}

export default Box
