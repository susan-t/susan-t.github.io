import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";


function App() {
  return(
    <Router>
        <Routes>
            <Route
                path="/home"
                element={<Home />}
            />
            <Route
                path="/about"
                element={<About />}
            />
            {/* <Route
                path="/contactus"
                element={<ContactUs />}
            />  */}
            <Route
                path="*"
                element={<Navigate to="/home" />}
            />
        </Routes>
    </Router>
  );
  
}

export default App;
