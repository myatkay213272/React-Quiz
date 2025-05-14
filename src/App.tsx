import Header from "./components/Header"
import Main from "./components/Content"
import { useEffect, useReducer } from "react"

const initialState = {
  questions : [],

  //'loading','error','ready','active','finished'
  status : 'loading'
}

const reducer = (state,action) =>{
  switch(action.type){
    case 'dataReceived' :
      return {
        ...state,
        questions : action.payload,
        status: "ready"
      }
    case 'dataFailed' :
      return {
        ...state,
        status : "error"
      }
    default :
      throw new Error('Action unknown')
  }
}

const App = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    fetch('http://localhost:8000/questions')
      .then(res=>res.json())
      .then(data=>dispatch({type:'dataReceived',
        payload : data
      }))
      .catch(err=>dispatch({type: 'dataFailed'}))
  },[])

  return (
    
    <div className="app-container">
      <Header/>


      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>

    

  )
}

export default App