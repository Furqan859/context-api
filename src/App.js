import React, { useReducer } from 'react'
import Usecontextmain from './component/Usecontextmain';



function reducer  (state, action){
  console.log(state,action)
         switch(action.type){
           case 'INCREMENT' :
             return { count: state.count + 1}
         
           case 'DECREMENT' :
             return { count: state.count - 1}

             default : return state
         
        }
}

function App() {

  const [state,dispatch] = useReducer(reducer,{count : 0})
  return (
    <div>
    <Usecontextmain/>
     {state.count}
    <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
    <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
    </div>
  )
}

export default App;