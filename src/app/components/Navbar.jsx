"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faClock, faChartBar } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Timeline", path: "/timeline", icon: faClock },
    { name: "Stats", path: "/stats", icon: faChartBar },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">

  <h1 className="text-xl font-bold text-[#244D3F]"> KeenKeeper </h1>
     <div className="flex gap-6">
        {links.map((link) => {
          const isActive = pathname === link.path;

   return (
     <Link
     key={link.path}
     href={link.path}
     className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                isActive
                  ? "bg-[#244D3F] text-white font-semibold"
                  : "text-gray-600 hover:text-[#244D3F]"
              }`}
            >
  <FontAwesomeIcon icon={link.icon} />
      {link.name}
        </Link>
            );
        })}
      </div>
 </nav>
  );
}