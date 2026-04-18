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

    <div className="flex justify-center">

      <PieChart width={250} height={250}>
        <Pie data={chartData} dataKey="value" outerRadius={80}>
          {chartData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}

        </Pie>

        <Tooltip />

      </PieChart>

    </div>
  );
}