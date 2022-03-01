import React, { createContext ,useState} from 'react';
import Child from './Child';
import Subchild from './../Subchild';
import Subcomp1 from './subcomponent/Subcomp1';


export const GlobalInfo = createContext();
function Usecontextmain() {
  const [color , setColor] = useState('red')
  const [day , setDay] = useState('Monday')
  const getDay = (item) => {
    console.log(item)
    setDay(item)
  }
  return (
    <GlobalInfo.Provider value={{appColor:color,getDay:getDay}}>
    <div>
    Parent
    <Child/>
    <Subchild/>
    <Subcomp1/>
    {day}
    
    </div>
    </GlobalInfo.Provider>
    );
}

export default Usecontextmain;
