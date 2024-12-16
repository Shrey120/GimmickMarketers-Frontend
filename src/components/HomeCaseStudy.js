import React from "react";
import { Link } from "react-router-dom";

export default function HomeCaseStudy() {
  const caseStudies = [
    {
      id: 1,

      image: "/assets/Influencers/I1.jpg",
      title: "X company Live Marketing Campaign",
    },
    {
      id: 2,

      image: "/assets/Influencers/I1.jpg",
      title: "Y company Live Marketing Campaign",
    },
    {
      id: 3,

      image: "/assets/Influencers/I1.jpg",
      title: "Z company Live Marketing Campaign",
    },
  ];

  return (
    <section className='py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-50 to-white'>
      {/* Header */}
      <div className='lg:flex lg:justify-between items-center mb-8'>
        <h2 className='lg:w-[80%] font-lato text-4xl lg:text-6xl font-extrabold'>
          <span className='text-red-600'>Transformative Campaigns</span> by
          India’s Top Influencer Marketing Agency
        </h2>
        <Link to='caseStudies'>
          <button className='mt-5 w-full lg:w-fit font-lato text-sm lg:text-base font-bold border-2 border-black px-6 py-2 rounded-full hover:scale-105 hover:border-0 hover:text-white hover:bg-black text-black '>
            View All
          </button>
        </Link>
      </div>

      {/* Case Studies Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {caseStudies.map((caseStudy) => (
          <div
            key={caseStudy.id}
            className='flex flex-col items-center bg-purple-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300'>
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className='w-[95%] object-cover rounded-xl h-80 bg-white mt-3'
            />
            <div className='p-4 flex flex-col '>
              <h3 className='font-julius text-lg font-extrabold mb-2'>
                {caseStudy.title}
              </h3>
              <button className='font-julius text-sm text-purple-800 font-bold border border-purple-800 px-3 py-1 rounded-lg hover:bg-purple-800 hover:text-white transition-all duration-200'>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
