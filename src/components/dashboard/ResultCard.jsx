function ResultCard({ result }) {
  return (
    <div data-aos="zoom-in" className="mt-4 bg-white p-4 sm:p-6 rounded-lg shadow">
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
    </div>
  );
}

export default ResultCard;
