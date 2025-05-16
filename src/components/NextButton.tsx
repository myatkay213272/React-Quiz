const NextButton = ({ dispatch, answer,numQuestions,index }) => {
  if (answer === null) return null;
   if (index + 1 === numQuestions) return null; 

  return (
    <button
      className="btn btn-primary mt-3"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
};

export default NextButton;
