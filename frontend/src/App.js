import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/Signup";
import Navbar from "./pages/navbar";
import About from "./pages/About";
import Disablepark from "./pages/Auth/Dispark";
import Carparking from "./pages/Auth/Carparking";
import Bikeparking from "./pages/Auth/Bikeparking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/disableparking" element={<Disablepark/>}/>
        <Route path="/carparking" element={<Carparking/>}/>
        <Route path="/bikeparking" element={<Bikeparking/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
