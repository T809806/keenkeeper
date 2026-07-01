import Link from "next/link";

export default function FriendCard({ friend }) {

  return (

    <Link
      href={`/friend/${friend.id}`}
      className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition text-center"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />

      <h3 className="text-lg font-semibold">
        {friend.name}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {friend.days_since_contact} days since contact
      </p>

      <div className="flex justify-center gap-2 mt-3 flex-wrap">
        {friend.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 text-xs px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}

      </div>

 <div className="mt-4">

 <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
    </Link>
  );
}