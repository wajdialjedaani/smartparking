import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FindStations from './pages/Client/Stations/FindStations'
import Feedback from "./pages/Client/Feedback/Feedback";
import Login from "./pages/Auth/login";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";
import { AuthProvider } from "./contexts/authContext";
import NotFound from "./pages/NotFound";
import CreateParking from "./pages/admin/Station/create";
import EditParking from "./pages/admin/Station/edit";
import { AlertProvider } from "./contexts/alertContext";
import Stations from "./pages/admin/Station/stations";
import StationsView from "./pages/admin/Station/view";
import AdminStation from "./pages/admin/Station/station";
import Station from "./pages/Client/Stations/station"
import UserFeedback from "./pages/admin/Users/UserFeedback";
import Analytics from './pages/admin/Analytics/Analytics';
function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback/:id" element={<Feedback />} />
            <Route path="/login" element={<Login />} />
            <Route path="/parking-stations/:id" element={<FindStations />} />
            <Route path="/station/:id" element={<Station />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute element={Dashboard} />} />
            <Route path="/admin/stations/" element={<ProtectedRoute element={Stations} />} />
            <Route path="/admin/stations/create" element={<ProtectedRoute element={CreateParking} />} />
            <Route path="/admin/stations/edit/:id" element={<ProtectedRoute element={EditParking} />} />

            <Route path="/admin/stations/view" element={<ProtectedRoute element={StationsView} />} />
            <Route path="/admin/stations/:id" element={<ProtectedRoute element={AdminStation} />} />
            <Route path="/admin/user-feedback" element={<ProtectedRoute element={UserFeedback} />} />
            <Route path="/admin/analytics" element={<ProtectedRoute element={Analytics} />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
