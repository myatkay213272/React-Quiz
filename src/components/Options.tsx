import { useState } from "react"

const Options = ({question,dispatch,answer}) => {

    const [hasClicked, setHasClicked] = useState(false);

  const handleClick = (index) => {
  if (!hasClicked) {
    setHasClicked(true);
    dispatch({ type: 'newAnswer', payload: index });
  }
};


  return (
    <div className="btn-group-vertical mb-5 w-50">
        {question.options.map((option,index)=>{
            
            const isCorrect = index ===  question.correctOption
            const isSelected = index === answer

            let btnClass = "btn mt-2 rounded-pill shake-on-hover p-3 text-white";

            if(!hasClicked) {
                btnClass += " bg-secondary"
            }else{
                if(isCorrect){
                    btnClass += " bg-success"
                }else if (isSelected && !isCorrect) {
                    btnClass += " bg-danger"; 
                } else {
                    btnClass += " bg-secondary";
                }
            }
            
             return (
           <button
            key={index}
            className={btnClass}
            onClick={() => handleClick(index)}
            disabled={hasClicked}
            >

                {option}
            </button>
           )
            
            
            
           

          
                
            
        

})}
    </div>
  )
}

export default Options


