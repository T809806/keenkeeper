"use client";

import { useEffect, useState } from "react";
import friends from "../../data/friends.json";

export default function FriendDetails({ params }) {
  const [logs, setLogs] = useState([]);
  const [friend, setFriend] = useState(null);

 useEffect(() => {
    const loadData = async () => {
      const { id } = await params;
      const found = friends.find(
        (f) => String(f.id) === String(id)
      );

 setFriend(found);
      const stored = JSON.parse(localStorage.getItem("timeline")) || [];
      setLogs(stored);
    };

    loadData();
  }, [params]);

 
  const handleAction = (type) => {
    if (!friend) return;

    const newLog = {
      id: Date.now(),
      type,
      name: friend.name,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newLog, ...logs];
    setLogs(updated);
    localStorage.setItem("timeline", JSON.stringify(updated));

    alert(`${type} added!`);
  };

  if (!friend) {
    return <h1 className="p-6"> Loading... </h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>

        <img src={friend.picture} className="w-20 h-20 rounded-full mb-4"/>
        <h2 className="text-xl font-bold"> {friend.name} </h2>
        <p className="mt-2 text-sm bg-red-100 text-red-500 inline-block px-3 py-1 rounded-full"> {friend.status} </p>

     <div className="mt-3 flex flex-wrap gap-2">

        {friend.tags.map((tag, i) => (
           <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded"> {tag} </span>

            ))}

      </div>

          <p className="mt-4 text-sm italic text-gray-600"> "Former colleague, great mentor" </p>
          <p className="text-xs text-gray-400 mt-1"> Preferred: email </p>

          <hr className="my-6" />

       <div className="space-y-3 text-sm">

            <p className="cursor-pointer"> ⏰ Snooze 2 Weeks </p>
            <p className="cursor-pointer"> 📦 Archive </p>
            <p className="text-red-500 cursor-pointer"> 🗑 Delete </p>

       </div>
       </div>
       <div className="md:col-span-2">
       <div className="grid grid-cols-3 text-center mb-10">

       <div>
            <h2 className="text-2xl font-bold"> {friend.days} </h2>
            <p className="text-sm text-gray-500"> Days Since Contact </p>
       </div>

        <div>
            <h2 className="text-2xl font-bold"> 30 </h2>
            <p className="text-sm text-gray-500"> Goal (Days) </p>
        </div>

         <div>
            <h2 className="text-xl font-bold"> Feb 27, 2026 </h2>
             <p className="text-sm text-gray-500"> Next Due </p>

        </div>
        </div>

       <div className="flex justify-between items-center mb-8">
       <div>

          <h3 className="font-semibold"> Relationship Goal </h3>
          <p className="text-gray-600 text-sm"> Connect every <b> 30 days </b> </p>

       </div>

       <button className="text-sm border px-3 py-1 rounded"> Edit </button>

       </div>

       <div>

         <h3 className="font-semibold mb-4"> Quick Check-In </h3>

       <div className="flex flex-col md:flex-row gap-4">

       <button
         onClick={() => handleAction("Call")}
         className="flex-1 bg-gray-100 py-2 rounded hover:bg-[#244D3F] hover:text-white transition"> 📞 Call
       </button>

       <button
           onClick={() => handleAction("Text")}
           className="flex-1 bg-gray-100 py-2 rounded hover:bg-gray-200"> 💬 Text
       </button>

       <button
           onClick={() => handleAction("Video")}
           className="flex-1 bg-gray-100 py-2 rounded hover:bg-gray-200">  🎥 Video
       </button>

      </div>
      </div>
      </div>

    </div>

    </div>
    
  );
}