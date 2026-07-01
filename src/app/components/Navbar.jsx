"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClock,
  faChartBar,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Timeline", path: "/timeline", icon: faClock },
    { name: "Stats", path: "/stats", icon: faChartBar },
  ];

  return (

    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

     
  <Link
     href="/"
     className="text-2xl font-bold text-[#244D3F]"
   >
          KeenKeeper
   </Link>

       
 <div className="hidden md:flex items-center gap-4">
          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-[#244D3F] text-white font-semibold"
                    : "text-gray-600 hover:bg-gray-100 hover:text-[#244D3F]"
                }`}
              >
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
              </Link>
            );
          })}
        </div>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#244D3F]"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

  
      {open && (
        <div className="md:hidden bg-white border-t">

          {links.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 transition ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
 <FontAwesomeIcon icon={link.icon} />
     {link.name}
   </Link>
  );
 })}

 </div>

      )}
      
    </nav>
  );
}