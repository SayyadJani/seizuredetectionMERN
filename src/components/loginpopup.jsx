import { useState } from "react";

function LoginPopup({ onClose, openRegister }) {
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("")

  const loginHandle= ()=>{
    if(!email.includes('@')){
      alert('enter proper email')
    }
    console.log({"email":email,"password":password})
  }
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
          Login
        </h2>

        <input onChange={(e)=>setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 border rounded"
        />

        <input onChange={(e)=>setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <button onClick={loginHandle} className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600">
          Login
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
