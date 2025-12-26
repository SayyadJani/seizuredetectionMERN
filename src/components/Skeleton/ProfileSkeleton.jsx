function ProfileSkeleton() {
  return (
    <div data-aos="fade-up" className="max-w-3xl w-full animate-pulse">

      {/* Title */}
      <div className="h-8 w-40 bg-gray-300 rounded mb-6 sm:mb-8"></div>

      {/* Card */}
      <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex flex-col md:flex-row gap-8">

        {/* Avatar Section */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gray-300 border-4 border-gray-200"></div>

          <div className="h-5 w-32 bg-gray-300 rounded mt-4"></div>
          <div className="h-3 w-24 bg-gray-200 rounded mt-2"></div>
        </div>

        {/* Info Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg">
              <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-8 mb-8">
        <div className="h-10 w-full sm:w-32 bg-gray-300 rounded-lg"></div>
      </div>

    </div>
  );
}

export default ProfileSkeleton;
