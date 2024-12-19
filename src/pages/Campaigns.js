import React, { useState, useEffect } from "react";

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from an API or local data
    const fetchCampaigns = async () => {
      // Example: Replace with actual API call
      const data = [
        {
          title: "Summer Run",
          description: "Join us for a fun and challenging summer run!",
          image: "summer-run-image.jpg",
        },
        {
          title: "Fall Challenge",
          description: "Get ready for our fall marathon event!",
          image: "fall-challenge.jpg",
        },
        // Add more campaigns here
      ];
      setCampaigns(data);
    };

    fetchCampaigns();
  }, []);

  return (
    <div className='pt-28 md:pt-40 bg-gradient-to-br from-purple-100 via-white to-green-100 pb-16 px-16'>
      <div className='max-w-7xl mx-auto'>
        {campaigns.length === 0 ? (
          <div className='flex pt-40 text-center w-full h-screen'>
            <div className='font-lato text-3xl md:text-6xl font-bold text-gray-700 mt-10'>
              New Campaigns Coming Soon...
            </div>
          </div>
        ) : (
          <div>
            <div className='font-lato text-4xl md:text-6xl mb-10 md:mb-20 text-center font-extrabold'>
              Campaigns
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
              {campaigns.map((campaign, index) => (
                <div
                  key={index}
                  className='bg-white shadow-md rounded-lg overflow-hidden'>
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className='w-full h-56 object-cover'
                  />
                  <div className='p-6 '>
                    <h2 className='text-2xl font-bold text-gray-800'>
                      {campaign.title}
                    </h2>
                    <p className='text-gray-600 mt-2 '>
                      {campaign.description}
                    </p>
                    <button className='mt-4 button w-1/2 hover:bg-gradient-to-r hover:border-black hover:text-black  hover:bg-transparent transition'>
                      Enroll
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignsPage;
