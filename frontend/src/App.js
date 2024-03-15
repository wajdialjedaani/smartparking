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
import Parkingstation from "./pages/Auth/Parkingstation";
import View from "./pages/Auth/View";
import Fmessage from "./pages/Auth/Fmessage";
import Create from "./pages/Auth/Create";
import Dataanalytics from "./pages/Auth/Dataanalytics";
import Userfeedback from "./pages/Auth/Userfeedback";
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
        <Route path="pstation" element={<Parkingstation />} />
        <Route path="view" element={<View />} />
        <Route path="fmsg" element={<Fmessage />} />
        <Route path="create" element={<Create />} />
        <Route path="data" element={<Dataanalytics />} />
        <Route path="userfeed" element={<Userfeedback/>} />


        


        
        

      </Routes>
    </Router>
  );
}

export default App;
