import Header from "./components/Header";
import Main from "./components/Content";
import { useEffect, useReducer } from "react";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],
  status: 'loading' // 'loading','error','ready','active','finished'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
    case 'dataFailed':
      return {
        ...state,
        status: "error"
      };
    default:
      throw new Error('Action unknown');
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;

  const numQuestions = questions.length

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then(res => res.json())
      .then(data => dispatch({
        type: 'dataReceived',
        payload: data
      }))
      .catch(err => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className="container py-4">
      
      <Header />

      <Main>
        {status === "loading" && (
          <div className="text-center mt-5">
            <Loader />
          </div>
        )}
        {status === "error" && (
          <div className="text-center mt-5">
            <Error />
          </div>
        )}

        {status === "ready" && (
          <div className="text-center mt-5">
             <StartScreen numQuestions = {numQuestions}/>
          </div>
        )}
       
      </Main>
    </div>
  );
};

export default App;
