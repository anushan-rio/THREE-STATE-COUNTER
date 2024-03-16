import React,{useState} from "react"
import Button from "./Button"
const App=()=>{
  
  const [count,setCount] =useState(0)
  function Incrment(){
    setCount(count+1)
  }
  function Decremnet(){
    if(count!=0)
      setCount(count-1)
  }

  return(
    <div>
      <p style={{marginLeft:"3cm"}}>YOUR CURRENT COUNET{count} </p>
       <button className="button" onClick={Incrment}>Increment</button>
       <button className="button" onClick={Decremnet}>Decremnet</button>
       <button className="button" onClick={()=>setCount(0)}>RESET</button>
    </div>
    
  )
}

export default App;