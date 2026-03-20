import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const tabLinks = [
    { path: "/about", top: "12%", label: "about" },      // Points to About.js
    { path: "/aboutme", top: "31%", label: "me" },     // Points to AboutMe.js
    { path: "/education", top: "49%", label: "cse" },  // Points to Education.js
    { path: "/miscellaneous", top: "68%", label: "cs" },    // Points to Projects.js
  ];

  return (
    <div className="home-notebook-container">
      <div className="home-notebook-page-base home-page">
        
        {/* Clickable book tabs */}
        {tabLinks.map((tab) => (
          <div
            key={tab.label}
            className="home-tab-hitbox"
            style={{ top: tab.top }}
            onClick={() => {
              console.log("Navigating to:", tab.path);
              navigate(tab.path);
            }}
            title={`Open ${tab.label}`}
          />
        ))}

        {/* <div className="cloud-text">
           <p>WELCOME</p>
           <p style={{ fontSize: '7px', marginTop: '5px' }}>CLICK A TAB</p>
        </div> */}

      </div>
    </div>
  );
};

export default Home;