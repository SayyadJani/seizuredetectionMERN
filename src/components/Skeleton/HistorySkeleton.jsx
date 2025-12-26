function HistorySkeleton() {
  return (
    <div className="max-w-4xl w-full animate-pulse">

      {/* Title Skeleton */}
      <div className="h-8 w-56 bg-gray-300 rounded mb-6 sm:mb-8"></div>

      <div className="bg-white rounded-xl shadow-md overflow-x-auto">

        <div className="min-w-[600px]">

          {/* Table Header Skeleton */}
          <div className="grid grid-cols-3 bg-blue-50 px-6 py-4 text-sm font-semibold">
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-24 bg-gray-300 rounded"></div>
          </div>

          {/* Table Rows Skeleton */}
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-6 py-4 border-t items-center"
            >
              <div className="h-4 w-24 bg-gray-200 rounded"></div>

              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>

              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default HistorySkeleton;
