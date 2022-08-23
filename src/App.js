import React, { useReducer } from 'react'
import Usecontextmain from './component/Usecontextmain';


const initialState = 0;
const reducer = (state, action)=>{
         switch(action){
           case 'INCREMENT' :
             return   state + 1
         case 'DECREMENT' :
             return  state- 1
             case 'reset' : 
             return   initialState

             default : return state
         
        }
}

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
    <Usecontextmain/>
     {state}
    <button onClick={()=>dispatch('INCREMENT')}>+</button>
    <button onClick={()=>dispatch('reset')}>Reset</button>
    <button onClick={()=>dispatch('DECREMENT')}>-</button>
    </div>
  )
}

export default App;