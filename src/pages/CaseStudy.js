import React, { useState } from "react";

const caseStudies = [
  {
    brand: "Brand A",
    description: "Revolutionized marketing strategies.",
    image: "/assets/case_studies/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI metrics.",
    image: "/assets/case_studies/case2.jpg",
  },
  {
    brand: "Brand C",
    description: "Enhanced customer engagement rates.",
    image: "/assets/case_studies/case3.jpg",
  },
  {
    brand: "Brand D",
    description: "Streamlined digital transformation.",
    image: "/assets/case_studies/case4.jpg",
  },
  {
    brand: "Brand E",
    description: "Increased product visibility globally.",
    image: "/assets/case_studies/case5.jpg",
  },
  {
    brand: "Brand F",
    description: "Boosted sales through analytics.",
    image: "/assets/case_studies/case6.jpg",
  },
  {
    brand: "Brand G",
    description: "Optimized influencer campaigns.",
    image: "/assets/case_studies/case7.jpg",
  },
  {
    brand: "Brand H",
    description: "Innovative ad placements achieved.",
    image: "/assets/case_studies/case8.jpg",
  },
  {
    brand: "Brand I",
    description: "Enhanced social media presence.",
    image: "/assets/case_studies/case9.jpg",
  },
  {
    brand: "Brand J",
    description: "Elevated brand awareness globally.",
    image: "/assets/case_studies/case10.jpg",
  },
  {
    brand: "Brand K",
    description: "Implemented cutting-edge strategies.",
    image: "/assets/case_studies/case11.jpg",
  },
  {
    brand: "Brand L",
    description: "Improved customer acquisition rates.",
    image: "/assets/case_studies/case12.jpg",
  },
  {
    brand: "Brand M",
    description: "Strengthened digital footprints.",
    image: "/assets/case_studies/case13.jpg",
  },
  {
    brand: "Brand N",
    description: "Redefined industry benchmarks.",
    image: "/assets/case_studies/case14.jpg",
  },
  {
    brand: "Brand O",
    description: "Revolutionized influencer marketing.",
    image: "/assets/case_studies/case15.jpg",
  },
  {
    brand: "Brand P",
    description: "Maximized sales conversions.",
    image: "/assets/case_studies/case16.jpg",
  },
  {
    brand: "Brand Q",
    description: "Enhanced cross-platform consistency.",
    image: "/assets/case_studies/case17.jpg",
  },
  {
    brand: "Brand R",
    description: "Delivered sustainable growth.",
    image: "/assets/case_studies/case18.jpg",
  },
  {
    brand: "Brand S",
    description: "Achieved global brand recognition.",
    image: "/assets/case_studies/case19.jpg",
  },
  {
    brand: "Brand T",
    description: "Built robust customer pipelines.",
    image: "/assets/case_studies/case20.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing strategies.",
    image: "/assets/case_studies/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI metrics.",
    image: "/assets/case_studies/case2.jpg",
  },
  {
    brand: "Brand C",
    description: "Enhanced customer engagement rates.",
    image: "/assets/case_studies/case3.jpg",
  },
  {
    brand: "Brand D",
    description: "Streamlined digital transformation.",
    image: "/assets/case_studies/case4.jpg",
  },
  {
    brand: "Brand E",
    description: "Increased product visibility globally.",
    image: "/assets/case_studies/case5.jpg",
  },
  {
    brand: "Brand F",
    description: "Boosted sales through analytics.",
    image: "/assets/case_studies/case6.jpg",
  },
  {
    brand: "Brand G",
    description: "Optimized influencer campaigns.",
    image: "/assets/case_studies/case7.jpg",
  },
  {
    brand: "Brand H",
    description: "Innovative ad placements achieved.",
    image: "/assets/case_studies/case8.jpg",
  },
  {
    brand: "Brand I",
    description: "Enhanced social media presence.",
    image: "/assets/case_studies/case9.jpg",
  },
  {
    brand: "Brand J",
    description: "Elevated brand awareness globally.",
    image: "/assets/case_studies/case10.jpg",
  },
  {
    brand: "Brand K",
    description: "Implemented cutting-edge strategies.",
    image: "/assets/case_studies/case11.jpg",
  },
  {
    brand: "Brand A",
    description: "Revolutionized marketing strategies.",
    image: "/assets/case_studies/case1.jpg",
  },
  {
    brand: "Brand B",
    description: "Achieved exceptional ROI metrics.",
    image: "/assets/case_studies/case2.jpg",
  },
  {
    brand: "Brand C",
    description: "Enhanced customer engagement rates.",
    image: "/assets/case_studies/case3.jpg",
  },
  {
    brand: "Brand D",
    description: "Streamlined digital transformation.",
    image: "/assets/case_studies/case4.jpg",
  },
  {
    brand: "Brand E",
    description: "Increased product visibility globally.",
    image: "/assets/case_studies/case5.jpg",
  },
  {
    brand: "Brand F",
    description: "Boosted sales through analytics.",
    image: "/assets/case_studies/case6.jpg",
  },
  {
    brand: "Brand G",
    description: "Optimized influencer campaigns.",
    image: "/assets/case_studies/case7.jpg",
  },
  {
    brand: "Brand H",
    description: "Innovative ad placements achieved.",
    image: "/assets/case_studies/case8.jpg",
  },
  {
    brand: "Brand I",
    description: "Enhanced social media presence.",
    image: "/assets/case_studies/case9.jpg",
  },
  {
    brand: "Brand J",
    description: "Elevated brand awareness globally.",
    image: "/assets/case_studies/case10.jpg",
  },
  {
    brand: "Brand K",
    description: "Implemented cutting-edge strategies.",
    image: "/assets/case_studies/case11.jpg",
  },
];

const CaseStudies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const visibleCaseStudies = caseStudies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPageNumbers = () => {
    const maxVisiblePages = 2;
    const pages = [];
    const startPage = Math.max(
      1,
      currentPage - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className='pt-28 md:pt-40 pb-28 bg-gradient-to-b from-purple-50 via-white to-purple-100'>
      <h1 className='font-lato text-4xl lg:text-6xl font-extrabold text-center mb-10'>
        Case Studies
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto'>
        {visibleCaseStudies.map((study, index) => (
          <div
            key={index}
            className='rounded-lg shadow-lg bg-white p-6 flex flex-col space-y-4'>
            <img
              src={study.image}
              alt={study.brand}
              className='w-full h-60 object-cover rounded-lg'
            />
            <h3 className='font-julius text-md font-semibold text-gray-600'>
              {study.brand}
            </h3>
            <p className='font-lato text-purple-800 text-xl font-bold'>
              {study.description}
            </p>
            <button className='font-lato text-left text-purple-700 font-semibold hover:underline'>
              Read More
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10 space-x-2'>
        {/* Previous Button */}
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

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page
                ? "bg-purple-700 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-purple-200"
            }`}>
            {page}
          </button>
        ))}

        {/* Next Button */}
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
