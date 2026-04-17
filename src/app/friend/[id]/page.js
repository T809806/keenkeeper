import friends from "../../data/friends.json";
export default async function FriendDetails({ params }) {

  const { id } = await params;
  const friend = friends.find(
    f => String(f.id) === String(id)
  );

  if (!friend) {
    return <h1>Friend not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid md:grid-cols-3 gap-10">
         <div>

           <img src={friend.picture} className="w-20 h-20 rounded-full mb-4"/>
           <h2 className="text-xl font-bold">v{friend.name} </h2>
           <p className="mt-2 text-sm bg-red-100 text-red-500 inline-block px-3 py-1 rounded-full"> {friend.status} </p>

        <div className="mt-3 flex gap-2">

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

          <div className="flex justify-between text-center">
          <div className="flex flex-col items-center gap-1 cursor-pointer"> 

             <span className="text-xl"> 📞 </span>
             <p className="text-sm"> Call </p>

          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer">

             <span className="text-xl"> 💬 </span>
             <p className="text-sm"> Text </p>

          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer">

                <span className="text-xl"> 🎥 </span>
                <p className="text-sm"> Video </p>

          </div>

          </div>

          </div>

          </div>

        </div>

 </div>

 );
}