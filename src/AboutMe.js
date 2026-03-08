import React from "react";
import { Link } from "react-router-dom";
import front from './pixel-components/book-page.png'; 
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
    const navigate = useNavigate();
    
         const handleClick = () => {
            navigate("/front");
        };
  return (
    <div className="App">
      <header className="AboutMe-body">
        <MyButton onClick={handleClick} className="to-home" />
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

export default AboutMe;