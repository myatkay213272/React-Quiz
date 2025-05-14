const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div>
      <h2>Welcome to The React Quiz!</h2>
      <p>{numQuestions} questions to test your React mastery</p>
      <button 
        className="btn btn-success mt-3"
        onClick={() => dispatch({ type: 'start' })}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen