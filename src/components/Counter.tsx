import  { useReducer, useState } from 'react'


const reducer = (state,action) =>{
    switch(action.type){
        case "dec":
            return {...state,count :state.count - state.step}
        case "inc":
           return {...state,count : state.count + state.step}
        case "setCount" :
            return {...state,count : action.payload}
        case "setStep" :
            return {...state,step : action.payload}
        case "reset" :
            return { count : 0 ,step : 1 }
        defaul :
            throw new Error("Unknown action")
    }
}


const Counter = () => {

    const initialState = {count : 0,step : 1}
    const [state,dispatch] = useReducer(reducer,initialState)
    const {count,step} = state

   const dec = ()=>{
    dispatch({type:"dec"})
   }

   const inc = ()=>{
    dispatch({type:"inc" })
   }

   const defineStep = (e)=>{
   dispatch({type:"setStep" , payload : Number(e.target.value)})
   }

   const defineCount = (e)=>{
    dispatch({type: "setCount" ,payload :Number(e.target.value)})
   }


   const reset = ()=>{
    dispatch({type : "reset"})
   }

  return (
    <div>

        <input 
        type="range" 
        min="0" 
        max="10"
        value={step}
        onChange={defineStep}
        />{step}


        <br/>

        <button onClick={dec}> - </button>

      <input 
        type="text" 
        value={count} 
        onChange={defineCount}
        />


        <button onClick={inc}> + </button>

        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter