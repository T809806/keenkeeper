import friends from "./data/friends.json";
import FriendCard from "./components/FriendCard";
import { FaUserPlus } from "react-icons/fa";

export default function Home() {
  const totalFriends = friends.length;

  const onTrack = friends.filter(
    (friend) => friend.status === "on-track"
  ).length;

  const needAttention = friends.filter(
    (friend) =>
      friend.status === "overdue" ||
      friend.status === "almost due"
  ).length;

  return (
    
    <main className="max-w-7xl mx-auto px-5 py-10">

 <section className="text-center mb-12">

        <h1 className="text-4xl md:text-5xl font-bold text-[#244D3F] mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="bg-[#244D3F] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#1c3b30] transition">
          <FaUserPlus />
          Add a Friend
        </button>

      </section>

 <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h2 className="text-3xl font-bold text-[#244D3F]">
            {totalFriends}
          </h2>
          <p className="text-gray-500 mt-2">
            Total Friends
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h2 className="text-3xl font-bold text-green-600">
            {onTrack}
          </h2>
          <p className="text-gray-500 mt-2">
            On Track
          </p>
        </div>

  <div className="bg-white rounded-xl shadow-md p-6 text-center">

     <h2 className="text-3xl font-bold text-red-500">
         {needAttention}
    </h2>
   <p className="text-gray-500 mt-2"> Need Attention </p>

 </div>

 <div className="bg-white rounded-xl shadow-md p-6 text-center">

     <h2 className="text-3xl font-bold text-blue-600"> 0 </h2>
     <p className="text-gray-500 mt-2"> Interactions This Month </p>

 </div>

 </section>

 <section>

        <h2 className="text-2xl font-bold mb-6"> Your Friends </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {friends.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />

          ))}

        </div>

      </section>

    </main>
  );
}