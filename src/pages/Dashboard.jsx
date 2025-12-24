import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Overview from "../components/dashboard/Overview";
import DetectSeizure from "../components/dashboard/DetectSeizure";
import History from "../components/dashboard/History";
import Profile from "../components/dashboard/Profile";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-gray-100">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 p-4 sm:p-6 mt-20 sm:mt-20 mb-10 sm:mb-0">
        {activeSection === "overview" && <Overview />}
        {activeSection === "detect" && <DetectSeizure />}
        {activeSection === "history" && <History />}
        {activeSection === "profile" && <Profile />}
      </div>

    </div>
  );
}

export default Dashboard;
