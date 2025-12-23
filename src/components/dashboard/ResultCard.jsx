function ResultCard({ result }) {
  return (
    <div
      data-aos="zoom-in"
      className="mt-6 bg-white p-6 rounded-lg shadow"
    >
      <h3 className="text-xl font-semibold">Result</h3>
      <p className="mt-2">
        Seizure Detected:{" "}
        <span className="font-bold">
          {result.seizure ? "Yes" : "No"}
        </span>
      </p>
      <p className="mt-1">
        Confidence: {(result.confidence * 100).toFixed(1)}%
      </p>
    </div>
  );
}

export default ResultCard;
