import React, { useState } from "react";

const caseStudies = [
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing.",
    image: "/assets/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI.",
    image: "/assets/case2.jpg",
  },
  // Add more items here...
];

const CaseStudies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination Logic
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);
  const visibleItems = caseStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='px-10 pt-28 md:pt-40 pb-10 bg-gradient-to-b from-purple-50 via-white to-purple-100'>
      <div className='flex justify-between items-center'>
        <h1 className='font-lato text-2xl md:text-5xl font-extrabold text-center mb-10'>
          Case Studies
        </h1>
        <div className='w-1/3'>
          <button className='invert button mb-10'>Add new</button>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className='rounded-lg shadow-lg bg-white p-6 flex flex-col space-y-4'>
            <img
              src={item.image}
              alt={item.brand}
              className='w-full h-60 object-cover rounded-lg'
            />
            <h3 className='text-lg font-semibold text-gray-600'>
              {item.brand}
            </h3>
            <p className='text-purple-800 text-md'>{item.description}</p>
            <button className='text-purple-700 font-semibold hover:underline'>
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-10 space-x-2'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-700 text-white hover:bg-purple-500"
          }`}>
          Prev
        </button>
        <span className='text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-700 text-white hover:bg-purple-500"
          }`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;
