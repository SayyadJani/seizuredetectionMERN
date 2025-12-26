function DetectSeizureSkeleton() {
  return (
    <div data-aos="fade-up" className="max-w-3xl w-full animate-pulse">

      {/* Page Title */}
      <div className="h-8 w-44 bg-gray-300 rounded mb-6 sm:mb-8"></div>

      {/* Upload Card */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">

        {/* Card Title */}
        <div className="h-5 w-40 bg-gray-300 rounded mb-4"></div>

        {/* Upload Box */}
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
          <div className="h-4 w-48 bg-gray-300 rounded mb-2"></div>
          <div className="h-3 w-36 bg-gray-200 rounded"></div>
        </div>

        {/* File Name */}
        <div className="h-3 w-40 bg-gray-200 rounded mt-3"></div>

        {/* Button */}
        <div className="mt-6">
          <div className="h-10 w-full sm:w-40 bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* Result Card Placeholder */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
        <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
        <div className="h-3 w-48 bg-gray-200 rounded"></div>
      </div>

    </div>
  );
}

export default DetectSeizureSkeleton;
