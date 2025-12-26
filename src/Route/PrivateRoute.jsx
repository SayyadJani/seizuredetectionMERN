import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";
function PrivateRoute() {
  const { isAuthenticated, loading } = useAuth();

  // while checking auth (page reload)
  if (loading) {
    return null; // or a global loader
  }

  // not logged in
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // logged in → allow route
  return <Outlet />;
}

export default PrivateRoute;
