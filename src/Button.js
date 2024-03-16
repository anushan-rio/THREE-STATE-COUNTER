import React,{useState} from "react"
import "./index.css"
const Button=({title})=>{
    return(
        <div>
            <button className="button" >{title}</button>
        </div>
    )
}

export default Button;