import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Back from "./tbd/Back";

import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Education from "./Education";
import Miscellaneous from "./Miscellaneous";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/back" element={<Back />} />
            <Route path="/about" element={<About />} /> 

            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    </Router>
  );
}

export default App;