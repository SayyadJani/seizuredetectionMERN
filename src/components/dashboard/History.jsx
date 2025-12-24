function History() {
  const history = [
    { date: "2025-01-10", result: "No Seizure", confidence: "92%" },
    { date: "2025-01-08", result: "Seizure", confidence: "87%" },
    { date: "2025-01-05", result: "No Seizure", confidence: "95%" },
  ];

  return (
    <div data-aos="fade-up" className="max-w-4xl w-full">

      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
        Detection History
      </h1>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">

        <div className="min-w-[600px]">
          <div className="grid grid-cols-3 bg-blue-50 px-6 py-4 text-sm font-semibold text-blue-900">
            <span>Date</span>
            <span>Result</span>
            <span>Confidence</span>
          </div>

          {history.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-4 border-t text-sm items-center hover:bg-gray-50 transition"
            >
              <span>{item.date}</span>

              <span
                className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${
                  item.result === "Seizure"
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {item.result}
              </span>

              <span className="font-medium">
                {item.confidence}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default History;
