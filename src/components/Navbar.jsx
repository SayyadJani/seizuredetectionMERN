import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterPopup from "./Registerpopup";
import LoginPopup from "./loginpopup";

function Navbar() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);



  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-blue-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🧠</span>
            <h1 className="text-xl font-bold text-white">
              SeizureAI
            </h1>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-blue-100">
            <Link to={"/"} className="hover:text-white transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/dashboard" className="hover:text-white transition">
              Dashboard
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          {/* Sign Up Button (POPUP trigger) */}
          <div>
            <button
              onClick={() => setShowRegister(true)}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition"
            >
              Sign Up
            </button>
          </div>

        </div>
      </nav>

    {showLogin && (
      <LoginPopup
        onClose={() => setShowLogin(false)}
        openRegister={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
    )}

      {showRegister && (
        <RegisterPopup
          onClose={() => setShowRegister(false)}
          openLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

    </>
  );
}

export default Navbar;
