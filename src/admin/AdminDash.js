import React from "react";
import Sidebar from "../components/Sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  const location = useLocation();

  const isAdminHome = location.pathname === "/admin";

  const sections = [
    { name: "Case Studies", path: "caseStudies" },
    { name: "Brands", path: "brands" },
    { name: "Campaigns", path: "campaigns" },
  ];

  return (
    <div className='flex bg-purple-50'>
      <Sidebar />
      {/* Conditionally render the dashboard content */}
      {isAdminHome ? (
        <div className='ml-64 px-8 pb-20 md:pt-40 pt-28 w-full h-screen'>
          <>
            <h1 className='text-4xl font-bold mb-8'>Admin Dashboard</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
              {sections.map((section, index) => (
                <Link
                  key={index}
                  to={section.path}>
                  <div className='p-6 h-36 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer'>
                    <h2 className='text-xl font-semibold mb-2 text-blue-600'>
                      {section.name}
                    </h2>
                    <p className='text-gray-600'>Manage {section.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        </div>
      ) : (
        <div className='ml-64 '>
          <Outlet />
        </div>
      )}
    </div>
  );
}
