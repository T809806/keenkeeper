import Link from "next/link";

export default function NotFound() {

  return (

    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-7xl font-bold"> 404 </h1>
      <p className="text-gray-500 mt-3"> Page Not Found </p>

      <Link
        href="/"
        className="mt-6 bg-[#244D3F] text-white px-5 py-2 rounded-lg"
      >
        Back Home
        
      </Link>

    </div>
  );
}