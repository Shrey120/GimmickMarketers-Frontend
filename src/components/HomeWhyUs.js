import React from "react";

export default function HomeWhyUs() {
  return (
    <div className='bg-gradient-to-b from-white via-purple-100 to-purple-200 py-16 px-8'>
      <div className='container mx-auto'>
        {/* Header Section */}
        <h1 className='font-lato text-center text-4xl md:text-6xl font-extrabold text-black mb-8'>
          Why <span className='text-green-700'>Gimmick</span> is the
          <span className='text-purple-600 '> Best Choice</span> for You?
        </h1>
        <p className='font-elecro font-bold text-center text-lg md:text-xl text-gray-700 max-w-6xl mx-auto'>
          Amplify your brand's influence by connecting with the right audience,
          creating meaningful engagement, and sparking conversations that
          matter. Together, we’ll ignite a wave of recognition and leave a
          lasting impression in the world
        </p>
        {/* Why Us Cards Section */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {[
            {
              title: "Family-Driven Team",
              description:
                "We’re the Porwals—a family-run team with a deep commitment to our clients and each other.",
              icon: "🏠",
            },
            {
              title: "Proven Experience",
              description:
                "In just 3 years, we’ve executed over 150 successful campaigns for major clients.",
              icon: "📊",
            },
            {
              title: "Diverse Services",
              description:
                "From influencer marketing to CGI content creation, we cover it all.",
              icon: "🛠️",
            },
            {
              title: "Expansive Network",
              description:
                "Our network includes 100,000+ influencers, artists, and content creators.",
              icon: "🌐",
            },
            {
              title: "Strategic Expertise",
              description:
                "Our innovative strategies ensure your brand achieves maximum impact and resonance.",
              icon: "🚀",
            },
            {
              title: "Future-Ready Vision",
              description:
                "We’re transforming influence and empowering brands with our innovative strategies.",
              icon: "✨",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='cursor-pointer bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200'>
              <div className='text-4xl mb-4 text-purple-600'>{item.icon}</div>
              <h2 className='font-julius text-2xl font-semibold text-purple-800 mb-2'>
                {item.title}
              </h2>
              <p className='font-elecro font-semibold text-gray-600'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
