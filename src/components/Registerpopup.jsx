import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
function RegisterPopup({ onClose, openLogin }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // ✅ ADDED



  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  const registerHandle = async () => {
    // ✅ ADDED: Validation logic
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError(""); // clear previous errors

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axiosInstance.post("/api/auth/register",formData);

      alert("Registered successfully, please login");
      onClose();
      openLogin();
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
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
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Register
        </h2>

        <div className="flex flex-col items-center mb-5">
          <div className="w-24 h-24 rounded-full border-2 border-blue-600 flex items-center justify-center overflow-hidden bg-gray-100">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-sm">Photo</span>
            )}
          </div>

          <label className="mt-2 text-sm text-blue-700 cursor-pointer hover:underline">
            Upload Profile Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-2 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* ✅ ADDED: Error message */}
        {error && (
          <p className="text-sm text-red-600 mb-3 text-center">
            {error}
          </p>
        )}

        <button
          onClick={registerHandle}
          disabled={loading}
          className={`w-full py-2 rounded transition flex items-center justify-center gap-2 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-600 text-white"
          }`}
        >
          {loading && (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          )}

          <span>{loading ? "Registering..." : "Register"}</span>
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <span
            onClick={openLogin}
            className="text-blue-700 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default RegisterPopup;
