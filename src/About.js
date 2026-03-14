import React from "react";
import { Link } from "react-router-dom";
import front from './pixel-components/book-page.png'; 
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    
         const handleClick = () => {
            navigate("/home");
        };
  return (
    <div className="App">
      <header className="About-body">
        {/* <img src={front} className="about" alt="about section of notebook" /> */}
        <MyButton onClick={handleClick} className="to-home" />

      </header>
    </div>
  );
};

function MyButton({ onClick, className }) {
  return (
    <button onClick={onClick} className={className}>
      Back
    </button>
  );
}

export default About;