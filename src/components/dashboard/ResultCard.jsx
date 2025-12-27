import { useState } from "react";
import { saveHistory } from "../../api/saveHistory";
import { useAuth } from "../../context/authContext";

function ResultCard({ result }) {
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const { setUser } = useAuth();

  async function handleSaveResult() {
    try {
      setSaving(true);
      const res = await saveHistory(
        result.seizure ? "Seizure" : "No Seizure",
        `${(result.confidence * 100).toFixed(1)}%`
      );
      setSaved(true);
      setUser(prev => ({
        ...prev,
        history: res.data.history,
      }));
    } catch (err) {
      console.error(err);
      alert("Save failed");
    } finally {
      setSaving(false);
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
          disabled={saved || saving}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
            saved
              ? "bg-green-100 text-green-700 cursor-not-allowed"
              : saving
              ? "bg-blue-400 text-white cursor-not-allowed"
              : "bg-blue-700 text-white hover:bg-blue-600"
          }`}
        >
          {saving && (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          )}

          {saved ? "Saved ✔" : saving ? "Saving..." : "Save Result"}
        </button>
      </div>
    </div>
  );
}

export default ResultCard;
