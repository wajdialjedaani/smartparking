import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Disabledparking from "./pages/Auth/Disabledparking";
import Carparking from "./pages/Auth/Carparking";
import Evparking from "./pages/Auth/Evparking";
import Bicycleparking from "./pages/Auth/Bicycleparking";
import Parkingdetails from "./pages/Auth/Parkingdetails";
import Feedback from "./pages/Auth/Feedback";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/Auth/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dparking" element={<Disabledparking />} />
        <Route path="cparking" element={<Carparking />} />
        <Route path="bparking" element={<Bicycleparking />} />
        <Route path="eparking" element={<Evparking />} />
        <Route path="parkingdet" element={<Parkingdetails />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />

        
        

      </Routes>
    </Router>
  );
}

export default App;
