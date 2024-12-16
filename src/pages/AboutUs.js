import React from "react";

export default function AboutUs() {
  return (
    <div className='pt-28 md:pt-40 bg-gradient-to-b from-purple-50 via-white to-green-50 text-gray-800 overflow-hidden'>
      {/* Hero Section */}
      <section className='relative pb-20 px-6 text-center'>
        <div className='absolute -top-10 -left-10 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl'></div>
        <div className='absolute -bottom-20 -right-16 w-80 h-80 bg-green-200 rounded-full opacity-30 blur-3xl'></div>
        <div className='relative max-w-8xl mx-auto z-10'>
          <h1 className='font-lato text-5xl lg:text-7xl font-extrabold text-purple-800 '>
            Welcome to Gimmick Marketers
          </h1>
          <p className='font-lato font-bold mt-6 text-lg lg:text-xl text-gray-600'>
            Where creativity meets influence! Empowering brands and influencers
            to connect authentically in the digital space.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className='py-16 px-6 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='font-lato text-4xl lg:text-5xl font-bold text-purple-800 mb-6 relative'>
            Our Mission
            <span className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-800 to-green-600'></span>
          </h2>
          <p className='font-lato font-bold text-lg lg:text-xl text-gray-600'>
            At Gimmick Marketers, we believe in the power of authentic
            storytelling. Our mission is to bridge the gap between brands and
            influencers, fostering meaningful partnerships that resonate with
            audiences. We thrive on creating memorable campaigns that leave a
            lasting impact.
          </p>
        </div>
        <div className='absolute top-0 left-0 w-48 h-48 bg-green-200 rounded-full opacity-20 blur-3xl'></div>
      </section>

      {/* Who We Are Section */}
      <section className='py-16 px-6 bg-gradient-to-r from-purple-50 to-green-50 relative'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='relative'>
            <div className='absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-xl'></div>
            <h2 className='font-lato text-4xl lg:text-5xl font-bold text-purple-800 mb-6'>
              Who We Are
            </h2>
            <p className='font-lato font-bold text-lg lg:text-xl text-gray-600'>
              Founded in June 2022, Gimmick Marketers has quickly become a
              trailblazer in the influencer marketing landscape. Our team
              consists of passionate individuals with diverse backgrounds in
              marketing, social media, and creative strategy. We bring a wealth
              of experience to the table, ensuring every campaign is a success.
            </p>
          </div>
          <div className='relative'>
            <img
              src='/assets/about-us/team.jpg'
              alt='Our Team'
              className='rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300'
            />
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className='py-16 px-6 relative'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='font-lato text-4xl lg:text-5xl font-bold text-purple-800 mb-12 relative'>
            What Sets Us Apart
            <span className='font-lato font-bold absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-800 to-green-600'></span>
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {[
              {
                title: "Creativity",
                description:
                  "We don’t just follow trends; we set them with innovative campaigns.",
              },
              {
                title: "Authenticity",
                description:
                  "We value genuine connections that resonate with your target audience.",
              },
              {
                title: "Results-Driven",
                description:
                  "Your success is our priority with measurable results every time.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className='p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
                <h3 className='font-lato text-2xl font-bold text-purple-800 mb-4'>
                  {item.title}
                </h3>
                <p className='font-lato font-bold text-lg text-gray-600'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Story Section */}
      <section className='py-20 px-6 bg-gradient-to-br from-green-50 to-purple-50 relative'>
        <div className='max-w-5xl mx-auto text-center'>
          <h2 className='font-lato text-4xl lg:text-5xl font-bold text-purple-800 mb-6'>
            A Family Story
          </h2>
          <p className='font-lato font-bold text-lg lg:text-xl text-gray-600'>
            We started Gimmick Marketers just 3 years ago, kicking off with
            small campaigns. Fast forward to today, and we've run over 150
            successful campaigns for big clients. As a family-run team, we're
            always there for each other—and our clients.
          </p>
        </div>
        <div className='absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl'></div>
      </section>
    </div>
  );
}
