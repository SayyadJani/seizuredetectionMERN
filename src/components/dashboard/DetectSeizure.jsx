import { useState } from "react";
import ResultCard from "./ResultCard";

function DetectSeizure() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [fileName, setFileName] = useState("");

  function handleFileChange(e) {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  }

  function handleDetect() {
    setLoading(true);
    setResult(null);

    // Dummy delay (replace with API later)
    setTimeout(() => {
      setResult({
        seizure: false,
        confidence: 0.92,
      });
      setLoading(false);
    }, 1500);
  }

  return (
    <div data-aos="fade-up" className="max-w-3xl">

      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Detect Seizure
      </h1>

      {/* Upload Card */}
      <div className="bg-white p-8 rounded-xl shadow-md">

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Upload EEG Data
        </h2>

        {/* File Upload */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-6 cursor-pointer hover:bg-blue-50 transition">
          <span className="text-blue-700 font-medium">
            Click to upload EEG file
          </span>
          <span className="text-sm text-gray-500 mt-1">
            Supported formats: .csv, .edf
          </span>

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {fileName && (
          <p className="mt-3 text-sm text-gray-600">
            Selected file: <strong>{fileName}</strong>
          </p>
        )}

        {/* Action Button */}
        <div className="mt-6">
          <button
            onClick={handleDetect}
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-700 hover:bg-blue-600"
            }`}
          >
            {loading ? "Analyzing EEG Data..." : "Detect Seizure"}
          </button>
        </div>

      </div>

      {/* Result */}
      {result && (
        <div className="mt-8">
          <ResultCard result={result} />
        </div>
      )}
    </div>
  );
}

export default DetectSeizure;
