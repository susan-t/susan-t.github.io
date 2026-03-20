import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import './About.css';

const About = () => {
    const navigate = useNavigate();
    
    const handleBackClick = () => {
        navigate("/home");
    };

    return (
    <div className="notebook-container">
      {/* Use the base class that has the width/height/scale logic */}
      <div className="notebook-page-base book-page">
        <Navbar /> 
        <p>about page</p>
        <div className="about-content">
            <MyButton onClick={handleBackClick} className="to-home" />
        </div>
      </div>
    </div>
  );
};

// Reusable Button Component
function MyButton({ onClick, className }) {
    return (
        <button onClick={onClick} className={className} id="btn">
            Back
        </button>
    );
}

export default About;