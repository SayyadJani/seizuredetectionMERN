import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPopup({ onClose, openLogin }) {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [password,setpassword]=useState("")

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }

  }
  const registerHandle = async () => {
    console.log({
      "user":name,
      "email":email,
      "password":password,
      "image":imagePreview
    })
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name,
          email,
          password,
          image: ""
        }
      );

      console.log(res.data);
      alert("Registered successfully");
      onClose();
      navigate("/dashboard")
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };



  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Register
        </h2>

        {/* Profile Image Upload */}
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

        {/* Inputs */}
        <input onChange={(e)=>setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input onChange={(e)=>setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button onClick={registerHandle} className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition">
          Register
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
