import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className='pb-32 md:pb-40 grid grid-cols-1 lg:grid-cols-2 px-20 pt-28 md:pt-40 lg:pt-60'>
      <div>
        <div className='font-space text-4xl lg:text-7xl font-extrabold'>
          <span className='hero-text hero-text-md'>
            WE ARE YOUR{" "}
            <span className='hero-text-tag-md hero-text-tag'>#influencer</span>{" "}
            MARKETING SOLUTION
          </span>
        </div>
        <div className='font-elecro mt-5 xl:text-xl text-sm text-white'>
          Welcome to Gimmick Marketers, where creativity meets influence! We are
          a dynamic Influencer Marketing Agency dedicated to empowering brands
          and influencers to connect authentically in the digital space.
        </div>
        <div className='flex justify-between mt-7 gap-4 w-full '>
          <Link
            className='w-full'
            to='brandsRegister'>
            <button className='button'>I'm a brand</button>
          </Link>
          <Link
            className='w-full'
            to='influencerRegister'>
            <button className='button'>I'm a creator</button>
          </Link>
        </div>
      </div>

      <div className='relative h-full w-full min-h-[500px] lg:min-h-0 mt-10 lg:mt-0'>
        {/* Video Background */}
        <video
          className='absolute inset-0 h-full w-full shadow-inner '
          src='/assets/hero_section.mp4'
          autoPlay
          loop
          muted></video>

        <div className='absolute inset-0 md:bg-gradient-to-b from-gray-900 via-transparent to-transparent ' />
      </div>
    </div>
  );
}
