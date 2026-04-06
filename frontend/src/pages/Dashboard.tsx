
const users = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold">Payments App</h1>

        <div className="flex items-center gap-3">
          <span className="text-gray-700">Hello, User</span>
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold">
            U
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="p-6 max-w-5xl mx-auto">

        {/* Balance */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Your Balance <span className="ml-4 font-bold">$5000</span>
          </h2>
        </div>

        {/* Users Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Users</h2>

          {/* Search */}
          <input
            type="text"
            placeholder="Search users..."
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* User List */}
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-medium">
                    U{user.id}
                  </div>
                  <span className="font-semibold">{user.name}</span>
                </div>

                {/* Right */}
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  Send Money
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;