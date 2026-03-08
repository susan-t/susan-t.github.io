import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import front from './pixel-components/front-page.png'; 
// import About from "./About";

const Home = () => {

    const navigate = useNavigate();

     const handleClick = () => {
        navigate("/about");
    };

     const handleBack = () => {
        navigate("/back");
    };

  return (
    <div className="App">
      <header className="App-body">
        {/* <img src={front} className="home" alt="front of notebook homepage" /> */}
        <MyButton className="to-about" onClick={handleClick} />
        <MyButton className="to-back" onClick={handleBack} />

        <area shape="rect" coords="123, 73, 129, 95" href="Education.js" onClick={handleClick}></area>
      </header>
    </div>
  );
};

function MyButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      Hello
    </button>
  );
}

export default Home;