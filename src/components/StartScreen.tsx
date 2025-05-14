const StartScreen = ({numQuestions}) => {
  return (
    <div className="text-center mt-5 p-4 border rounded bg-light shadow-sm">
      <h2 className="mb-3 text-primary">Welcome to The React Quiz!</h2>
      <p className="lead">{numQuestions} questions to test your React mastery</p>
      <button className="btn btn-success mt-3">Start Quiz</button>
    </div>
  );
};

export default StartScreen;
