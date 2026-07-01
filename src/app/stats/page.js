"use client";

import { useEffect, useState } from "react";
import Chart from "../components/Chart";

export default function Stats() {

  const [data, setData] = useState([]);

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("timeline")) || [];
    setData(stored);
  }, []);

  return (

    <main className="max-w-6xl mx-auto px-5 py-10">

      <h1 className="text-3xl font-bold text-center mb-8"> Friendship Analytics </h1>

      <Chart data={data} />
      
    </main>
  );
}