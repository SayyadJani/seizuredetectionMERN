function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Title Skeleton */}
      <div className="h-8 w-64 bg-gray-300 rounded mb-6"></div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-5 w-24 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-5 w-32 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="h-5 w-28 bg-gray-300 rounded mb-4"></div>
          <div className="h-8 w-16 bg-gray-200 rounded"></div>
        </div>

      </div>
    </div>
  );
}

export default DashboardSkeleton;
