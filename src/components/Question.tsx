const Question = ({ question }) => {
  console.log(question);
  return (
    <div className="card p-3 mb-3">

      <h4>{question.question}</h4>

       <div className="btn-group-vertical">
        {question.options.map((option, index) => (
          <button key={index} className="btn bg-secondary text-white mb-2 rounded-pill shake-on-hover">
            {option}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Question;