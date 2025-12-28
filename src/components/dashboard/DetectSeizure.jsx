import { useState } from "react";
import ResultCard from "./ResultCard";
import DetectSeizureSkeleton from "../Skeleton/DetectSeizureSkeleton";
import { useAuth } from "../../context/authContext";

function DetectSeizure() {
  const {loading}=useAuth()
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState("");

  const [load,setload]=useState(false)
  if(loading){
    return <DetectSeizureSkeleton/>
    
  }

  

  function handleFileChange(e) {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  }

  function handleDetect() {
    setResult(null);
    setload(true)
    setTimeout(() => {
      setResult({
        seizure: false,
        confidence: 0.92,
      });
      
      setload(false)
    }, 1500);
  }

  return (
    <div data-aos="fade-up" className="max-w-3xl w-full">

      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
        Detect Seizure
      </h1>

      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">

        <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">
          Upload EEG Data
        </h2>

        <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-6 cursor-pointer hover:bg-blue-50 transition text-center">
          <span className="text-blue-700 font-medium">
            Click to upload EEG file
          </span>
          <span className="text-xs sm:text-sm text-gray-500 mt-1">
            Supported formats: .csv, .edf
          </span>

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {fileName && (
          <p className="mt-3 text-xs sm:text-sm text-gray-600">
            Selected file: <strong>{fileName}</strong>
          </p>
        )}

        <div className="mt-6">
          <button
            onClick={handleDetect}
            disabled={loading}
            className={`w-full sm:w-auto px-6 py-2 rounded-lg text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            {load ? "Analyzing..." : "Detect Seizure"}
          </button>
        </div>
      </div>

      {result && (
        <div className="mt-8">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}

export default DetectSeizure;
