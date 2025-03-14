import React from "react";

const features = [
  {
    title: "Get Premium Data with Creator Insights",
    description:
      "Unlock data-driven insights to analyze and optimize creator campaigns for maximum efficiency and growth.",
    icon: "/assets/F-1.jpg",
  },
  {
    title: "Advanced Creator Briefing System",
    description:
      "Streamline campaign processes with precise briefs tailored to creators, ensuring seamless collaboration and results.",
    icon: "/assets/F-2.jpg",
  },
  {
    title: "Real-Time Performance Tracking & Analytics",
    description:
      "Monitor campaigns in real-time with detailed analytics that provide actionable insights to elevate your marketing efforts.",
    icon: "/assets/F-3.jpg",
  },
  {
    title: "Multiply ROI via One Ads",
    description:
      "Boost your return on investment with strategic ad placements that resonate with your audience.",
    icon: "/assets/F-4.jpg",
  },
  {
    title: "Discover & Access Relevant Creators Instantly",
    description:
      "Find the perfect creators for your brand quickly with our intuitive discovery and access platform.",
    icon: "/assets/F-5.jpg",
  },
];

export default function HomeFeatures() {
  return (
    <div className='py-20 bg-gradient-to-b from-purple-50 via-green-50 to-white '>
      <h1 className='font-lato text-4xl lg:text-6xl font-extrabold text-center mb-20 lg:mb-40'>
        How Can We Help
      </h1>
      <div className='w-[80%] mx-auto'>
        <div className='space-y-10 md:space-y-28 lg:space-y-60'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='w-full md:grid md:grid-cols-2 md:items-center gap-20'>
              <div className={`${index % 2 === 1 ? "order--1" : "order-2"} `}>
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className='
                    md:w-[90%] h-[90%] rounded-3xl shadow-md md:mb-0 mb-5'
                />
              </div>
              <div className='order-0 '>
                <h2 className=' font-lato text-2xl md:text-4xl xl:text-5xl font-bold text-purple-800 mb-4'>
                  {feature.title}
                </h2>
                <p className=' font-elecro md:font-semibold lg:text-xl'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
