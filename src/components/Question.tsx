import Options from "./Options";

const Question = ({ question,dispatch,answer }) => {
  console.log(question);
  return (
    <div className="card p-3 mb-3">

      <h4>{question.question}</h4>

       <div>
        <Options 
          question = {question}
          dispatch = {dispatch}
          answer = {answer}
        />
      </div>

    </div>
  );
};

export default Question;