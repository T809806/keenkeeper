"use client";

import { useEffect, useState } from "react";


export default function Timeline() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const filtered =
    filter === "All"
      ? data
      : data.filter((d) => d.type === filter);

  return (
    <main className="max-w-6xl mx-auto px-5 py-10">

      <h1 className="text-3xl font-bold mb-6">
        Timeline
      </h1>
       
      

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded-lg mb-8"
      >
        <option> Filter Timeline </option>
        <option> Call </option>
        <option> Text </option>
        <option> Video </option>

      </select>

      <div className="space-y-4">

        {filtered.length === 0 && (
          <p className="text-gray-500">
            No interactions found.
          </p>
        )}

        {filtered.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-xl shadow p-5 flex items-center gap-5"
          >

   <div className="text-3xl">

       {item.type === "Call" && "📞"}

       {item.type === "Text" && "💬"}

       {item.type === "Video" && "🎥"}

   </div>

   <div>

     <p className="font-semibold">
         {item.title}
     </p>

   <p className="text-sm text-gray-500">
       {item.date}
     </p>

      </div>

     </div>

        ))}

      </div>

    </main>
  );
}