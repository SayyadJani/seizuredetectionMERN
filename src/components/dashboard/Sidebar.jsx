import { useEffect, useRef, useState } from "react";

function Sidebar({ activeSection, setActiveSection }) {
  const [showMobileBar, setShowMobileBar] = useState(false);
  const hideTimer = useRef(null);

  const itemClass = (name) =>
    `px-4 py-2 rounded-full text-xs sm:text-base cursor-pointer transition-all duration-300 ${
      activeSection === name
        ? "bg-white text-blue-900 font-semibold"
        : "text-blue-100 hover:bg-blue-800"
    }`;

  // 🔹 Show bar on screen touch (mobile only)
  useEffect(() => {
    const handleTouch = () => {
      setShowMobileBar(true);

      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }

      hideTimer.current = setTimeout(() => {
        setShowMobileBar(false);
      }, 3000);
    };

    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <>
      {/* 🖥 Desktop Sidebar (unchanged) */}
      <div className="hidden sm:block w-64 bg-blue-900 p-4 min-h-screen">
        <nav className="space-y-3 mt-20">
          <div onClick={() => setActiveSection("overview")} className={itemClass("overview")}>
            Overview
          </div>
          <div onClick={() => setActiveSection("detect")} className={itemClass("detect")}>
            Detect Seizure
          </div>
          <div onClick={() => setActiveSection("history")} className={itemClass("history")}>
            History
          </div>
          <div onClick={() => setActiveSection("profile")} className={itemClass("profile")}>
            Profile
          </div>
        </nav>
      </div>

      {/* 📱 Mobile Floating Bottom Bar */}
      <div
        className={`sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          showMobileBar
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <div className="bg-blue-900/95 backdrop-blur-md px-4 py-3 rounded-full shadow-2xl flex gap-3">
          <div onClick={() => setActiveSection("overview")} className={itemClass("overview")}>
            Overview
          </div>
          <div onClick={() => setActiveSection("detect")} className={itemClass("detect")}>
            Detect
          </div>
          <div onClick={() => setActiveSection("history")} className={itemClass("history")}>
            History
          </div>
          <div onClick={() => setActiveSection("profile")} className={itemClass("profile")}>
            Profile
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
