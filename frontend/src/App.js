import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Disabledparking from "./pages/Auth/Disabledparking";
import Carparking from "./pages/Auth/Carparking";
import Evparking from "./pages/Auth/Evparking";
import Bicycleparking from "./pages/Auth/Bicycleparking";
import Parkingdetails from "./pages/Auth/Parkingdetails";
import Feedback from "./pages/Auth/Feedback";
import Feedmessage from "./pages/Auth/Feedmessage";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";
import { AuthProvider } from "./contexts/authContext";
import NotFound from "./pages/NotFound";
import CreateParking from "./pages/Station/create";
function App() {
  return (
    <AuthProvider>
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
          <Route path="feedmsg" element={<Feedmessage />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute element={Dashboard} />} />
          <Route path="/admin/station/create" element={<ProtectedRoute element={CreateParking} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
