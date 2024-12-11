import React from "react";

export default function HomeInfluencer() {
  const influencers = [
    {
      id: 1,
      name: "Influencer 1",
      genre: "Fashion",

      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 2,
      name: "Influencer 2",
      genre: "Travel",

      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 3,
      name: "Influencer 3",
      genre: "Tech",

      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 4,
      name: "Influencer 4",
      genre: "Fitness",

      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 5,
      name: "Influencer 5",
      genre: "Food",
      image: "/assets/Influencers/I1.jpg",
    },
    {
      id: 6,
      name: "Influencer 6",
      genre: "Music",
      image: "/assets/Influencers/I1.jpg",
    },
  ];

  return (
    <section className='py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-50 via-purple-100 to-green-100'>
      <div className='lg:flex lg:justify-between items-center mb-8'>
        <h2 className='text-black lg:w-[80%] font-lato text-4xl lg:text-6xl font-extrabold'>
          <span className='text-red-600'>Top Influencers and Creators</span>{" "}
          Shaping Modern Branding and Storytelling
        </h2>
        <button className='mt-5 w-full lg:w-fit font-lato text-sm lg:text-base font-bold border-2 border-black px-6 py-2 rounded-full hover:scale-105 hover:border-0 hover:text-white hover:bg-black text-black'>
          View All
        </button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-7 p-10'>
        {influencers.map((influencer) => (
          <div
            key={influencer.id}
            className='relative bg-white rounded-lg shadow-lg overflow-hidden'>
            <img
              src={influencer.image}
              alt={influencer.name}
              className='w-full h-[70vh] object-cover'
            />
            <div className='absolute bottom-10 w-full  text-white text-center py-2'>
              <h3 className='text-lg font-semibold'>{influencer.name}</h3>
              <p className='text-sm'>{influencer.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
