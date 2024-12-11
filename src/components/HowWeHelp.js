import React from "react";

export default function HowWeHelp() {
  const services = [
    {
      title: "Influencer Marketing",
      description:
        "Leverage the power of authentic voices to amplify your brand.",

      icon: "/assets/Influencers/I1.jpg",
    },
    {
      title: "Content Creation",
      description:
        "Deliver engaging and memorable content tailored for your audience.",

      icon: "/assets/Influencers/I1.jpg",
    },
    {
      title: "Meme Marketing",
      description:
        "Infuse humor into your campaigns and spark viral connections.",

      icon: "/assets/Influencers/I1.jpg",
    },
    {
      title: "Digital Campaigns",
      description: "Run high-impact campaigns to maximize visibility and ROI.",

      icon: "/assets/Influencers/I1.jpg",
    },
    {
      title: "Celebrity Collaborations",
      description:
        "Boost your credibility with endorsements from household names.",

      icon: "/assets/Influencers/I1.jpg",
    },
  ];

  return (
    <div className=' lg:h-screen lg:grid lg:grid-cols-2 bg-gradient-to-b from-purple-200 via-purple-200 to-purple-300'>
      <h1 className='pt-20 lg:pt-0 max-w-[95%] order-2 font-lato text-center text-4xl lg:text-6xl font-extrabold text-white my-auto'>
        How can <span className='text-green-700'>Gimmick</span> provide
        assistance and{" "}
        <span className='text-purple-600'>Make a Difference?</span>
      </h1>
      <div className='hidden order-1 mt-20 h-auto lg:flex items-center justify-center'>
        {/* Central Element */}
        <div className=' z-10 bg-purple-700 text-white w-40 h-40  rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300'>
          <h2 className='text-xl font-bold'>Your Brand</h2>
          <p className='text-sm text-purple-200'>At the heart of it all</p>
        </div>

        {/* Service Nodes */}
        {services.map((service, index) => {
          const angle = (index * 360) / services.length; // Calculate angle for radial placement
          const x = 180 * Math.cos((angle * Math.PI) / 180);
          const y = 180 * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className='max-w-0 absolute flex flex-col items-center text-center transform transition-transform duration-300 group'
              style={{
                transform: `translate(${x}px, ${y}px) `,
              }}>
              <div className='bg-white w-28 h-28 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                <img
                  src={service.icon}
                  alt={service.title}
                  className='size-28 rounded-full'
                />
              </div>
              <h3 className='font-julius text-xs text-black font-bold mt-3'>
                {service.title}
              </h3>
              <p className='text-sm text-black hidden group-hover:block w-32'>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className='lg:hidden  h-[500px] flex items-center justify-center'>
        {/* Central Element */}
        <div className=' z-10 bg-purple-700 text-white h-32 w-32 rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300'>
          <h2 className='font-bold'>Your Brand</h2>
          <p className='text-xs  text-purple-200'>At the heart of it all</p>
        </div>

        {/* Service Nodes */}
        {services.map((service, index) => {
          const angle = (index * 720) / services.length; // Calculate angle for radial placement
          const x = 140 * Math.cos((angle * Math.PI) / 180);
          const y = 140 * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className='max-w-0 absolute flex flex-col items-center text-center transform transition-transform duration-300 group'
              style={{
                transform: ` translate(${x}px, ${y}px) `,
              }}>
              <div className='bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                <img
                  src={service.icon}
                  alt={service.title}
                  className='size-20 rounded-full'
                />
              </div>
              <h3 className='text-xs text-black font-bold mt-3'>
                {service.title}
              </h3>
              <p className='text-xs  text-black hidden group-hover:block w-32'>
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
