"use client";
import Chart from "../components/Chart";
import { useEffect, useState } from "react";

export default function Timeline() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  const filtered =
    filter === "All" ? data : data.filter(d => d.type === filter);

  return (
    <div className="max-w-5xl mx-auto p-4">

        <h1 className="text-3xl font-bold mb-6"> Timeline </h1>
      
    <div className="flex justify-center mb-6"> <Chart data={data} /> </div>

     <select onChange={(e) => setFilter(e.target.value)} className="mb-6 border p-2 rounded w-full md:w-auto">

        <option> All </option>
        <option> Call </option>
        <option> Text </option>
        <option> Video </option>

      </select>

     
      <div className="space-y-4">
        {filtered.map((item) => (
      <div key={item.id} className="border p-4 rounded flex flex-col md:flex-row gap-4 items-start md:items-center">

      <div> 📌 </div>

      <div>

        <p> {item.type} with {item.name} </p>
        <p className="text-sm text-gray-400"> {item.date} </p>
        
      </div>
      </div>

        ))}

     </div>
     </div>
     
  );
}