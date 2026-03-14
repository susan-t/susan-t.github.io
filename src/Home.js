import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="notebook-container">

      <div className="tabs">

        <button onClick={() => navigate("/about")}>About</button>

        <button onClick={() => navigate("/me")}>Me</button>

        <button onClick={() => navigate("/education")}>Education</button>

        <button onClick={() => navigate("/projects")}>Projects</button>

      </div>

      <div className="notebook-page">
        {/* content or notebook background */}
      </div>

    </div>
  );
};

export default Home;