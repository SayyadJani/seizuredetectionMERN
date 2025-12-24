function Sidebar({ activeSection, setActiveSection }) {
  const itemClass = (name) =>
    `block px-4 py-3 rounded cursor-pointer text-sm sm:text-base ${
      activeSection === name
        ? "bg-blue-700 text-white"
        : "text-blue-100 hover:bg-blue-800"
    }`;

  return (
    <div className="w-full sm:w-64 bg-blue-900 p-4 sm:mt-15 fixed sm:static bottom-0 sm:bottom-auto z-40">
      <nav className="flex sm:flex-col gap-2 justify-around sm:justify-start">
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
      </nav>
    </div>
  );
}

export default Sidebar;
