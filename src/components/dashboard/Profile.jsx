function Profile() {
  return (
    <div data-aos="fade-up" className="max-w-3xl">

      {/* Header */}
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Profile
      </h1>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row gap-8">

        {/* Avatar Section */}
        <div className="flex flex-col items-center md:w-1/3">
          <img
            src="https://i.pravatar.cc/150"
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-600 shadow"
          />

          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            User Name
          </h2>

          <p className="text-sm text-gray-500">
            Logged in user
          </p>
        </div>

        {/* Info Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="text-gray-800 font-medium">User Name</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-800 font-medium">user@email.com</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Account Type</p>
            <p className="text-gray-800 font-medium">Standard User</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Status</p>
            <p className="text-green-600 font-medium">Active</p>
          </div>

        </div>
      </div>

      {/* Logout */}
      <div className="mt-8">
        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
          Logout
        </button>
      </div>

    </div>
  );
}

export default Profile;
