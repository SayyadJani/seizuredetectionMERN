
import LoginPopup from "../components/loginpopup";
import RegisterPopup from "../components/Registerpopup";
import { useState } from "react";

function Landing() {

     const [showRegister, setShowRegister] = useState(false);
      const [showLogin, setShowLogin] = useState(false);


  return (
    <div className="pt-24 bg-gray-50 min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            AI-Powered Epileptic <br /> Seizure Detection
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            A smart healthcare system that uses Machine Learning
            to analyze EEG data and detect epileptic seizures
            early and accurately.
          </p>

          <div className="mt-8 flex space-x-4">
            <button
              onClick={()=>setShowRegister(true)} className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition">
                Get Started</button>

            <button
             onClick ={()=>setShowLogin(true)}
              className="px-6 py-3 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </button>
          </div>
        </div>

        {/* Right */}
        <div data-aos="fade-left" className="flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/brain-artificial-intelligence-abstract-concept_335657-3027.jpg"
            alt="AI Healthcare"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-blue-900">
            How It Works
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div data-aos="zoom-in" className="p-6 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-800">
                Upload EEG Data
              </h3>
              <p className="mt-2 text-gray-600">
                Users upload EEG or seizure-related data securely.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150" className="p-6 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-800">
                AI Analysis
              </h3>
              <p className="mt-2 text-gray-600">
                ML model analyzes seizure patterns.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300" className="p-6 rounded-lg shadow-sm bg-gray-50">
              <h3 className="text-xl font-semibold text-blue-800">
                Get Results
              </h3>
              <p className="mt-2 text-gray-600">
                Instant prediction with confidence score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-bold text-blue-900">
            Why Choose SeizureAI?
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {["⚡ Fast Detection", "🧠 AI-Based Analysis", "🔒 Secure Data Storage", "📊 Prediction History"]
              .map((text, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                  className="p-5 bg-white rounded-lg shadow-sm"
                >
                  {text}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        data-aos="fade-up"
        className="bg-blue-900 py-16 text-center text-white"
      >
        <h2 className="text-3xl font-bold">
          Start Detecting Seizures Smarter
        </h2>
        <p className="mt-4 text-blue-100">
          Register now and experience AI-powered healthcare support.
        </p>

        <button
        
          className="inline-block mt-6 px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        >
          Sign Up Now
        </button>
      </section>
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

    </div>
  );
}

export default Landing;
