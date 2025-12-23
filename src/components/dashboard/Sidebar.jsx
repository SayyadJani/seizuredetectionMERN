

function Sidebar({ activeSection, setActiveSection }) {
  const itemClass = (name) =>
    `block px-4 py-3 rounded cursor-pointer ${
      activeSection === name
        ? "bg-blue-700 text-white"
        : "text-blue-100 hover:bg-blue-800"
    }`;

  return (
    <div className="w-64 bg-blue-900 p-4 mt-15">
      <nav className="space-y-2">
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
  );
}

export default Sidebar;
