import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Overview from "../components/dashboard/Overview";
import DetectSeizure from "../components/dashboard/DetectSeizure";
import History from "../components/dashboard/History";
import Profile from "../components/dashboard/Profile";

function Dashboard() {


  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />

      {/* Main Content */}
      <div className="pt-20 sm:ml-64 px-4 sm:px-6 pb-10">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="detect" element={<DetectSeizure />} />
          <Route path="history" element={<History />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;




