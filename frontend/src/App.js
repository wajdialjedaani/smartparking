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
import { AlertProvider } from "./contexts/alertContext";
import Stations from "./pages/Station/stations";
import MapSearch from "./Components/Maps/MapSearch";
function App() {
  return (
    <AuthProvider>
      <AlertProvider>
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
            <Route path="/admin/dashboard" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/admin/stations/" element={<ProtectedRoute element={Stations} />} />
            <Route path="/admin/stations/create" element={<ProtectedRoute element={CreateParking} />} />
            <Route path="/admin/stations/view" element={<ProtectedRoute element={MapSearch} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
