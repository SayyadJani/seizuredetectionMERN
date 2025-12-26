import HistorySkeleton from "../Skeleton/HistorySkeleton";
import { useAuth } from "../../context/authContext";

function History() {
  const { loading, user } = useAuth();

  if (loading) {
    return <HistorySkeleton />;
  }

  const history = user?.history ?? [];

  return (
    <div data-aos="fade-up" className="max-w-4xl w-full">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
        Detection History
      </h1>

      {/* FIXED HERE */}
      <div className="bg-white rounded-xl shadow-md w-full overflow-hidden">
        <div className="w-full">

          <div className="hidden sm:grid grid-cols-3 bg-blue-50 px-6 py-4 text-sm font-semibold text-blue-900">
            <span>Date</span>
            <span>Result</span>
            <span>Confidence</span>
          </div>

          {history.length === 0 && (
            <div className="px-6 py-8 text-center text-gray-500 text-sm">
              No detection history available
            </div>
          )}

          {history.map((item, i) => {
            const isSeizure =
              item.status.toLowerCase().includes("seizure") &&
              !item.status.toLowerCase().includes("no");

            return (
              <div
                key={i}
                className="
                  grid grid-cols-1 sm:grid-cols-3
                  gap-3 sm:gap-0
                  px-4 sm:px-6
                  py-4
                  border-t
                  text-sm
                  items-center
                  hover:bg-gray-50
                  transition
                "
              >
                {/* Date */}
                <div className="flex justify-between sm:block">
                  <span className="sm:hidden text-gray-500">Date</span>
                  <span className="text-gray-700">{item.date}</span>
                </div>

                {/* Result */}
                <div className="flex justify-between sm:block">
                  <span className="sm:hidden text-gray-500">Result</span>
                  <span
                    className={`w-fit px-3 py-1 rounded-full text-xs font-medium ${
                      isSeizure
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Confidence */}
                <div className="flex justify-between sm:block">
                  <span className="sm:hidden text-gray-500">Confidence</span>
                  <span className="font-medium text-gray-800">
                    {item.confidence}
                  </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default History;
