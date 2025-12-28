import { createContext, useContext, useEffect, useState } from "react";
import { fetchUserProfile } from "../api/userApi";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  

 const isAuthenticated = !!user;
 const [activeModal, setActiveModal] = useState(null);

 
 useEffect(() => {
    const token = localStorage.getItem("tokenSEI");

    async function loadUser() {
      try {
        if (!token) {
          setLoading(false);
          return;
        }
        const userData = await fetchUserProfile(token);
        setUser(userData);
      } catch (error) {
        localStorage.removeItem("tokenSEI");
        setUser(null);
       }
       
       finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);
  
  function logOut() {
    localStorage.removeItem("tokenSEI");
    setUser(null);
    navigate('/')
  }


  function login(token, userData) {
    localStorage.setItem("tokenSEI", token);
    setUser(userData);
    alert("Login successful");
    // console.log(user);
  }


  return (
    <AuthContext.Provider
      value={{ 
        isAuthenticated,
         logOut, 
         activeModal,
         setActiveModal,
         login,
         user,
         loading,
         setUser
        }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
