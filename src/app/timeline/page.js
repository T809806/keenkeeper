export default function Timeline() {

  const activities = [
    { id: 1, type: "Meetup", name: "Tom Baker", date: "March 29, 2026", icon: "🤝" },
    { id: 2, type: "Text", name: "Sarah Chen", date: "March 28, 2026", icon: "💬" },
    { id: 3, type: "Meetup", name: "Olivia Martinez", date: "March 26, 2026", icon: "🤝" },
    { id: 4, type: "Video", name: "Aisha Patel", date: "March 23, 2026", icon: "🎥" },
    { id: 5, type: "Meetup", name: "Sarah Chen", date: "March 21, 2026", icon: "🤝" },
    { id: 6, type: "Call", name: "Marcus Johnson", date: "March 19, 2026", icon: "📞" },
    { id: 7, type: "Meetup", name: "Aisha Patel", date: "March 17, 2026", icon: "🤝" },
    { id: 8, type: "Text", name: "Olivia Martinez", date: "March 15, 2026", icon: "💬" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">

        <h1 className="text-3xl font-bold mb-6"> Timeline </h1>

     
      <div className="border border-dashed p-4 rounded mb-6">
        <select className="outline-none">

          <option> Filter timeline </option>
          <option> Call </option>
          <option> Text </option>
          <option> Meetup </option>
          <option> Video </option>

      </select>
      </div>

     
      <div className="space-y-4">
           {activities.map((item) => (

       <div
            key={item.id}
            className="flex items-center gap-4 border border-dashed p-4 rounded"
          >

        <div className="text-2xl"> {item.icon} </div>
       <div>

        <p className="font-medium">  {item.type} <span className="text-gray-500"> with {item.name} </span>  </p>
        <p className="text-sm text-gray-400"> {item.date}  </p>

      </div>
      </div>

        ))}

      </div>

    </div>
  );
}