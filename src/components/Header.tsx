import logo from "../assets/react.svg"

const Header = () => {
  return (
    <div className='quiz-container'>
        
        <img src={logo} alt="react logo"/>

        <h1 className='quiz-title '>The React Quiz</h1>

    </div>
  )
}

export default Header