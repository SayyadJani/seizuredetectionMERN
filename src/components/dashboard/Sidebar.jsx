import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Activity,
  History,
  User
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const itemClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-base cursor-pointer transition-all duration-300 ${
      isActive(path)
        ? "bg-white text-blue-900 font-semibold"
        : "text-blue-100 hover:bg-blue-800"
    }`;

  return (
    <>
      {/* 🖥 Desktop Sidebar */}
      <div className="hidden sm:block w-64 bg-gradient-to-b from-blue-900 to-indigo-900 p-4 min-h-screen fixed">
        <nav className="space-y-3 mt-20">
          <div onClick={() => navigate("/dashboard")} className={itemClass("/dashboard")}>
            <LayoutDashboard size={18} />
            Overview
          </div>

          <div onClick={() => navigate("/dashboard/detect")} className={itemClass("/dashboard/detect")}>
            <Activity size={18} />
            Detect Seizure
          </div>

          <div onClick={() => navigate("/dashboard/history")} className={itemClass("/dashboard/history")}>
            <History size={18} />
            History
          </div>

          <div onClick={() => navigate("/dashboard/profile")} className={itemClass("/dashboard/profile")}>
            <User size={18} />
            Profile
          </div>
        </nav>
      </div>

      {/* 📱 Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-md shadow-2xl">
        <div className="flex justify-around px-2 py-2">
          
          <div onClick={() => navigate("/dashboard")} className={itemClass("/dashboard")}>
            <LayoutDashboard size={20} />
          </div>

          <div onClick={() => navigate("/dashboard/detect")} className={itemClass("/dashboard/detect")}>
            <Activity size={20} />
          </div>

          <div onClick={() => navigate("/dashboard/history")} className={itemClass("/dashboard/history")}>
            <History size={20} />
          </div>

          <div onClick={() => navigate("/dashboard/profile")} className={itemClass("/dashboard/profile")}>
            <User size={20} />
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
