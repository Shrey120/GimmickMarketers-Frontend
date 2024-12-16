import React from "react";

const coreServices = [
  "Influencer Marketing",
  "Meme Marketing",
  "Content Marketing",
  "UGC Content Creation",
  "CGI Content Creation",
  "Celebrity Collaboration",
  "Celebs Endorsement",
];

const additionalServices = [
  "Twitter Trend Services",
  "Social Media Management",
  "E-Commerce Marketing",
  "Digital Marketing",
  "Google/Android/iOS (Reviews, Ratings, and Downloads)",
  "Email Marketing",
  "Facebook Marketing through Ads",
];

export default function Services() {
  return (
    <div className='bg-gradient-to-b from-purple-50 via-white to-gray-100 pt-28 md:pt-40 pb-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center text-4xl lg:text-6xl font-bold text-purple-800 mb-16'>
          Our Services
        </h1>

        {/* Core Services Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-8'>
            Core Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {coreServices.map((service, index) => (
              <div
                key={index}
                className='p-6 bg-white shadow-md rounded-lg border-l-4 border-purple-600'>
                <h3 className='text-xl font-bold text-purple-800'>{service}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services Section */}
        <div>
          <h2 className='text-3xl font-semibold text-gray-800 mb-8'>
            Additional Services
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className='p-6 bg-white shadow-md rounded-lg border-l-4 border-green-600'>
                <h3 className='text-xl font-bold text-green-800'>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
