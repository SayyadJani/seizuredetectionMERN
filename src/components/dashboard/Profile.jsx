import { useAuth } from "../../context/authContext";
import ProfileSkeleton from "../Skeleton/ProfileSkeleton";

function Profile() {
  const { logOut, loading, user } = useAuth();

    if (loading) {
      return <ProfileSkeleton />;
    }
    if (!user) {
      return null;
    }

  return (
    <div data-aos="fade-up" className="max-w-3xl w-full mb-10">
      <h1  className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 sm:mb-8">
        Profile
      </h1>

      {/* Card */}
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl border border-white/40 p-5 sm:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Avatar */}
          <div className="flex flex-col items-center md:w-1/3 text-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 blur-md opacity-60"></div>
              <img
                src={user.image}
                alt="User Avatar"
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <h2 className="mt-4 text-lg sm:text-xl font-semibold text-gray-800">
              {user.name}
            </h2>

            <p className="text-xs sm:text-sm text-gray-500">
              Logged in user
            </p>
          </div>

          {/* Info */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["Full Name", user?.name || "—"],
              ["Email", user?.email || "—"],
              ["Account Type", "Standard User"],
              ["Status", "Active"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className="group rounded-xl bg-white/70 border border-gray-200 p-4 transition-all hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {label}
                </p>
                <p
                  className={`mt-1 text-sm sm:text-base font-medium ${
                    label === "Status"
                      ? "text-green-600"
                      : "text-gray-800"
                  }`}
                >
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-8 mb-6">
        <button
          onClick={logOut}
          className="w-full sm:w-auto px-8 py-3 rounded-xl text-white font-semibold
          bg-gradient-to-r from-red-600 to-red-500
          hover:from-red-500 hover:to-red-400 transition-all shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
