import { Link } from "react-router-dom";
import { useState } from "react";
import RegisterPopup from "./Registerpopup";
import LoginPopup from "./loginpopup";
import { useAuth } from "../context/authContext";


function Navbar() {
 
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isAuthenticated,logOut ,setActiveModal,activeModal} = useAuth();

  function NavLinks({ mobile = false }) {
    const base = mobile ? "block py-2" : "hover:text-white";
    // console.log(base)
    return (
      <>
        <Link to="/" onClick={() => setIsMobileOpen(false)} className={base}>Home</Link>
        <Link to="/about" onClick={() => setIsMobileOpen(false)} className={base}>About</Link>
        <Link to="/dashboard" onClick={() => setIsMobileOpen(false)} className={base}>Dashboard</Link>
        <Link to="/contact" onClick={() => setIsMobileOpen(false)} className={base}>Contact</Link>
      </>
    );
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-blue-900 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <h1 className="text-xl font-bold text-white">SeizureAI</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-blue-100">
            <NavLinks />
          </div>

          {/* Desktop Auth Button */}
          <div className="hidden md:block">
            {isAuthenticated ? (
              <button onClick={logOut} className="px-6 py-2 bg-white text-black rounded-lg hover:bg-red-500 transition">
                Logout
              </button>
            ):
             (
              <button
                onClick={() => setActiveModal("register")}
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
              >
                Sign Up
              </button>
            )
            }
          </div>

          {/* Mobile Right Button */}
          <div className="md:hidden">
            {!isAuthenticated ? (
              <button onClick={() => setActiveModal("register")}className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                Sign Up
              </button>
            ) : (
              <button
                aria-label="Toggle menu"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-white text-2xl"
              >
                ☰
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu (only when logged in & ☰ clicked) */}
        {isMobileOpen && isAuthenticated && (
          <div className="md:hidden bg-blue-800 px-6 py-4 space-y-3 text-blue-100">
            <NavLinks mobile />
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
