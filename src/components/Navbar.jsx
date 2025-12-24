import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterPopup from "./Registerpopup";
import LoginPopup from "./loginpopup";
import { useAuth } from "../context/authContext";

function Navbar() {
  const [activeModal, setActiveModal] = useState(null); // "login" | "register"
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const {isAuthenticated}=useAuth();

  function NavLinks({ mobile = false }) {
    const base = mobile ? "block py-2" : "hover:text-white";
    return (
      <>
        <Link to="/" className={base}>Home</Link>
        <Link to="/about" className={base}>About</Link>
        <Link to="/dashboard" className={base}>Dashboard</Link>
        <Link to="/contact" className={base}>Contact</Link>
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-blue-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-xl font-bold text-white">SeizureAI</h1>

          <div className="hidden md:flex space-x-8 text-blue-100">
            <NavLinks />
          </div>

          {!isAuthenticated ?
          <div className="hidden md:block">
            <button onClick={() => setActiveModal("register")} className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500">Sign Up</button>
          </div> :<div className="">
          <button className="px-6 py-2 bg-white-600 text-black rounded-lg hover:bg-red-500 transition">
            Logout
          </button>
      </div>

          }

          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden text-white text-2xl">☰
            </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden bg-blue-800 px-6 py-4 space-y-3 text-blue-100">
            <NavLinks mobile />
            
            <button
              onClick={() => {
                setActiveModal("register");
                setIsMobileOpen(false);
              }}
              className="w-full mt-2 px-5 py-2 rounded-lg bg-blue-600 text-white">Sign Up
              </button>
          </div>
        )}
      </nav>

      {activeModal === "login" && (
        <LoginPopup
          onClose={() => setActiveModal(null)}
          openRegister={() => setActiveModal("register")}
        />
      )}

      {activeModal === "register" && (
        <RegisterPopup
          onClose={() => setActiveModal(null)}
          openLogin={() => setActiveModal("login")}
        />
      )}
    </>
  );
}

export default Navbar;
