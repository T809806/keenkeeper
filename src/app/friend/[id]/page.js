"use client";

import { useEffect, useState } from "react";
import friends from "../../data/friends.json";
import toast from "react-hot-toast";

export default function FriendDetails({ params }) {
  const [friend, setFriend] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const { id } = await params;

      const found = friends.find(
        (f) => String(f.id) === String(id)
      );

      setFriend(found);

      const stored =
        JSON.parse(localStorage.getItem("timeline")) || [];

      setLogs(stored);
    };

    loadData();
  }, [params]);

 const handleAction = (type) => {
  if (!friend) return;

  const newLog = {
    id: Date.now(),
    type,
    title: `${type} with ${friend.name}`,
    date: new Date().toLocaleDateString(),
  };

  const updated = [newLog, ...logs];

  setLogs(updated);

  localStorage.setItem(
    "timeline",
    JSON.stringify(updated)
  );

  toast.success(`${type} added successfully!`);
};

  if (!friend) {
    return (
      <div className="text-center py-20">
        Loading...
      </div>

    );
  }

  return (

    <main className="max-w-7xl mx-auto px-5 py-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    

 <div className="bg-white rounded-xl shadow p-6">

          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-5"
          />

          <h2 className="text-2xl font-bold text-center">
            {friend.name}
          </h2>

          <div className="text-center mt-3">

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold
              ${
                friend.status === "overdue"
                  ? "bg-red-100 text-red-600"
                  : friend.status === "almost due"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {friend.status}
            </span>

          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-5">

            {friend.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}

          </div>

          <p className="mt-6 text-sm text-gray-600 italic">
            {friend.bio}
          </p>

          <p className="mt-3 text-sm">
            <strong>Email:</strong> {friend.email}
          </p>

          <hr className="my-6" />

          <div className="space-y-3">

            <button className="w-full border rounded-lg py-2 hover:bg-gray-100">
              ⏰ Snooze 2 Weeks
            </button>

            <button className="w-full border rounded-lg py-2 hover:bg-gray-100">
              📦 Archive
            </button>

            <button className="w-full border rounded-lg py-2 text-red-600 hover:bg-red-50">
              🗑 Delete
            </button>

          </div>

        </div>

       

        <div className="md:col-span-2">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

            <div className="bg-white rounded-xl shadow p-5 text-center">

              <h2 className="text-3xl font-bold">
                {friend.days_since_contact}
              </h2>

              <p className="text-gray-500 mt-2">
                Days Since Contact
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-5 text-center">

              <h2 className="text-3xl font-bold">
                {friend.goal}
              </h2>

              <p className="text-gray-500 mt-2">
                Goal (Days)
              </p>

            </div>

            <div className="bg-white rounded-xl shadow p-5 text-center">

              <h2 className="text-lg font-bold">
                {friend.next_due_date}
              </h2>

              <p className="text-gray-500 mt-2">
                Next Due Date
              </p>

            </div>
      </div>

          

  <div className="bg-white rounded-xl shadow p-6 mb-8">

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-xl font-semibold">
                  Relationship Goal
                </h3>

                <p className="text-gray-500 mt-2">
                  Connect every <b>{friend.goal} days</b>
                </p>

              </div>

              <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
                Edit
              </button>

            </div>

          </div>

         

          <div className="bg-white rounded-xl shadow p-6">

            <h3 className="text-xl font-semibold mb-5">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <button
                onClick={() => handleAction("Call")}
                className="bg-[#244D3F] text-white rounded-lg py-3 hover:opacity-90 transition"
              >
                📞 Call
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="bg-blue-500 text-white rounded-lg py-3 hover:opacity-90 transition"
              >
                💬 Text
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="bg-purple-600 text-white rounded-lg py-3 hover:opacity-90 transition"
              >
                🎥 Video
              </button>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}