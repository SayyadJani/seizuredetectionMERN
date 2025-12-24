function Overview() {
  return (
    <div data-aos="fade-up">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Welcome</h3>
          <p className="text-gray-600 mt-2">User</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Last Result</h3>
          <p className="mt-2 text-green-600 font-bold">
            No Seizure Detected
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Tests</h3>
          <p className="mt-2 text-2xl font-bold">12</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
