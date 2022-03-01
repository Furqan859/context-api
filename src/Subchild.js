import React, { useContext } from 'react'
import { GlobalInfo } from './component/Usecontextmain';


const Subchild = () => {
    const {appColor} = useContext(GlobalInfo)
  return (
    <div style={{color: appColor}}>Subchild</div>
  )
}

export default Subchild;