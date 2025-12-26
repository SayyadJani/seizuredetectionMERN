import { useState } from "react";
import { saveHistory } from "../../api/saveHistory";

function ResultCard({ result }) {
  const [saved, setSaved] = useState(false);


async function handleSaveResult(result) {
  try {
    await saveHistory(
      result.seizure ? "Seizure" : "No Seizure",
      `72%`
      
    );
    setSaved(true);
    console.log()

    alert("Result saved");
  } catch (err) {
    alert("Save failed");
  }
}

  return (
    <div
      data-aos="zoom-in"
      className="mt-4 bg-white p-4 sm:p-6 rounded-lg shadow"
    >
      <h3 className="text-lg sm:text-xl font-semibold">Result</h3>

      <p className="mt-2 text-sm sm:text-base">
        Seizure Detected:{" "}
        <span className="font-bold">
          {result.seizure ? "Yes" : "No"}
        </span>
      </p>

      <p className="mt-1 text-sm sm:text-base">
        Confidence: {(result.confidence * 100).toFixed(1)}%
      </p>

      {/* Save Button */}
      <div className="mt-4">
        <button
          onClick={handleSaveResult}
          disabled={saved}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
            saved
              ? "bg-green-100 text-green-700 cursor-not-allowed"
              : "bg-blue-700 text-white hover:bg-blue-600"
          }`}
        >
          {saved ? "Saved ✔" : "Save Result"}
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
