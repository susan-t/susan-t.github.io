import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const tabLinks = [
    { path: "/about", top: "13%", label: "about" },
    { path: "/aboutme", top: "31%", label: "me" },
    { path: "/education", top: "50%", label: "cse" },
    { path: "/miscellaneous", top: "69%", label: "cs" },
  ];

  return (
    <>
      {tabLinks.map((tab) => (
        <div
          key={tab.label}
          className="tab-hitbox"
          style={{ top: tab.top }}
          onClick={() => navigate(tab.path)}
        />
      ))}
    </>
  );
};

export default Navbar;