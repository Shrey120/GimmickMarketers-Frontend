import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/admin" },
    { name: "Case Studies", path: "caseStudies" },
    { name: "Brands", path: "brands" },
    { name: "Campaigns", path: "campaigns" },
  ];

  return (
    <div className='pt-20 md:pt-24 lg:pt-28 w-64 h-full bg-purple-800 text-white fixed flex flex-col'>
      <h2 className='text-2xl font-bold p-4 border-b border-gray-700'>
        Admin Panel
      </h2>
      <nav className='flex-grow'>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className='block py-3 px-6 hover:bg-gray-700 transition'>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
