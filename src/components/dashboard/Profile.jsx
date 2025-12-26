import { useAuth } from "../../context/authContext";

function Profile() {
  const { setIsAuthenticated } = useAuth();

  return (
    <div data-aos="fade-up" className="max-w-3xl w-full">

      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
        Profile
      </h1>

      <div className="bg-white rounded-xl shadow p-6 sm:p-8 flex flex-col md:flex-row gap-8">

        <div className="flex flex-col items-center md:w-1/3">
          <img
            src="https://i.pravatar.cc/150"
            alt="User Avatar"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-blue-600 shadow"
          />

          <h2 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
            User Name
          </h2>

          <p className="text-xs sm:text-sm text-gray-500">
            Logged in user
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[
            ["Full Name", "User Name"],
            ["Email", "user@email.com"],
            ["Account Type", "Standard User"],
            ["Status", "Active"],
          ].map(([label, value], i) => (
            <div key={i} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs sm:text-sm text-gray-500">{label}</p>
              <p className={`font-medium ${label === "Status" ? "text-green-600" : "text-gray-800"}`}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 mb-8">
        <button
          onClick={() => setIsAuthenticated(false)}
          className="w-full sm:w-auto px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition"
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default Profile;
