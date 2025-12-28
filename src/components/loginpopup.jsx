import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function LoginPopup({ onClose, openRegister }) {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginHandle = async () => {
    if (!email.includes("@")) {
      alert("Enter a proper email");
      return;
    }

    try {
      setLoading(true);

      const res = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });

      login(res.data.token, res.data.user);
      navigate("/dashboard");
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          disabled={loading}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Login
        </h2>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
          disabled={loading}
        />

        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
          disabled={loading}
        />

        <button
          onClick={loginHandle}
          disabled={loading}
          className={`w-full py-2 rounded text-white transition
            ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-600"}`}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Logging in...
            </div>
          ) : (
            "Login"
          )}
        </button>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{" "}
          <span
            onClick={openRegister}
            className="text-blue-700 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPopup;
