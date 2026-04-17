import friends from "./data/friends.json";

export default function Home() {
  return (
    <div className="text-center py-16 px-4">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-2xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture 
        the relationships that matter most.
      </p>

      {/* Button */}
      <button className="bg-[#244D3F] text-white px-6 py-3 rounded-lg hover:bg-[#244D3F] transition flex items-center gap-2 mx-auto">
        + Add a Friend
      </button>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-bold">10</h2>
          <p className="text-gray-500">Total Friends</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-bold">3</h2>
          <p className="text-gray-500">On Track</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-bold">6</h2>
          <p className="text-gray-500">Need Attention</p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-gray-500">Interactions This Month</p>
        </div>

      </div>

      {/* ✅ Your Friends Section (এখন ভিতরে) */}
      <div className="mt-16 px-6 text-left">

        <h2 className="text-xl font-bold mb-6">Your Friends</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {friends.map((friend) => (

            <div key={friend.id} className="p-4 bg-white rounded-xl shadow text-center">

              <img
                src={friend.picture}
                alt={friend.name}
                className="w-16 h-16 mx-auto rounded-full mb-3"
              />

              <h3 className="font-semibold">{friend.name}</h3>

              <p className="text-gray-500 text-sm">
                {friend.days} days ago
              </p>

              <div className="flex justify-center gap-2 mt-2">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

           <p
  className={`mt-3 text-sm text-white px-3 py-1 rounded-full inline-block ${
    friend.status === "Overdue"
      ? "bg-red-500"
      : friend.status === "Almost Due"
      ? "bg-yellow-500"
      : "bg-[#244D3F]"
  }`}
>
  {friend.status}
</p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}