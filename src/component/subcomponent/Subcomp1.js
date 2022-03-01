import React,{useContext} from 'react'
import { GlobalInfo } from './../Usecontextmain';

const Subcomp1 = () => {
    const  {appColor,getDay} = useContext(GlobalInfo);
    const day = 'Sunday'
  return (
    <div style={{color: appColor}}>Subcomp1
    <button onClick={()=>getDay(day)}>Click Me</button>
    </div>
  )
}

export default Subcomp1