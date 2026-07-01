"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Chart({ data }) {

  const chartData = [
    { name: "Call", value: data.filter(d => d.type === "Call").length },
    { name: "Text", value: data.filter(d => d.type === "Text").length },
    { name: "Video", value: data.filter(d => d.type === "Video").length },
  ];

  const COLORS = ["#244D3F", "#82ca9d", "#8884d8"];

 return (

  <div className="flex flex-col items-center">

    <PieChart width={250} height={250}>

      <Pie
        data={chartData}
        dataKey="value"
        outerRadius={80}
      >
        {chartData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}

      </Pie>

      <Tooltip />

    </PieChart>

 <div className="mt-4 flex gap-6">

   <div className="flex items-center gap-2">

        <div className="w-4 h-4 rounded-full bg-[#244D3F]"> </div>
        <span> Call </span>

   </div>

   <div className="flex items-center gap-2">

      <div className="w-4 h-4 rounded-full bg-[#82ca9d]"> </div>

        <span> Text </span>

      </div>

      <div className="flex items-center gap-2">

        <div className="w-4 h-4 rounded-full bg-[#8884d8]"> </div>
        <span> Video </span>
        
      </div>

    </div>

  </div>
);

}