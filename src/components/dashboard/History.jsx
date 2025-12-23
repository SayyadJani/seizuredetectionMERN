function History() {
  const history = [
    { date: "2025-01-10", result: "No Seizure", confidence: "92%" },
    { date: "2025-01-08", result: "Seizure", confidence: "87%" },
    { date: "2025-01-05", result: "No Seizure", confidence: "95%" },
  ];

  return (
    <div data-aos="fade-up" className="max-w-4xl">

      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Detection History
      </h1>

      {/* History Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-3 bg-blue-50 px-6 py-4 text-sm font-semibold text-blue-900">
          <span>Date</span>
          <span>Result</span>
          <span>Confidence</span>
        </div>

        {/* Rows */}
        {history.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-3 px-6 py-4 border-t text-sm items-center hover:bg-gray-50 transition"
          >
            {/* Date */}
            <span className="text-gray-700">
              {item.date}
            </span>

            {/* Result Badge */}
            <span
              className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium ${
                item.result === "Seizure"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {item.result}
            </span>

            {/* Confidence */}
            <span className="font-medium text-gray-800">
              {item.confidence}
            </span>
          </div>
        ))}

        {/* Empty State (for future use) */}
        {history.length === 0 && (
          <div className="px-6 py-8 text-center text-gray-500">
            No detection history available.
          </div>
        )}

      </div>
    </div>
  );
}

export default History;
