import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="d-flex align-items-center gap-3 py-3 px-4 bg-dark text-white rounded shadow-sm mb-4">
      <img src={logo} alt="React logo" style={{ width: "50px", height: "50px" }} />
      <h1 className="h3 m-0">The React Quiz</h1>
    </header>
  );
};

export default Header;
