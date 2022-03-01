import React,{useContext} from 'react'
import { GlobalInfo } from './Usecontextmain';



const Child = () => {
    const {appColor} = useContext(GlobalInfo);
  return (
    <div style={{color:appColor}}>
    <div>Child</div>
    
    </div>
  )
}

export default Child