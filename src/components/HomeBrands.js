import React from "react";

export default function HomeBrands() {
  return (
    <div className='flex flex-col items-center overflow-hidden bg-purple-100 from-purple-800 via-purple-900 to-purple-950'>
      {/* <h1 className='text-white pb-10 font-semibold font-elecro text-xl'>
        Trusted by the best:
      </h1> */}
      <div className='invert marquee flex space-x-24 xl:space-x-32 animate-marquee animate-marquee-md whitespace-nowrap'>
        <img
          className='size-24 w-full brightness-0 invert py-9 pl-9'
          src='/assets/my.png'
          alt='img'
        />
        <img
          className='size-24 w-full invert brightness-0 py-6'
          src='/assets/niv.png'
          alt='img'
        />
        <img
          className='size-24 w-full invert brightness-0 py-6'
          src='/assets/mes.png'
          alt='img'
        />
        <img
          className='size-24 w-full'
          src='/assets/flipkart.png'
          alt='img'
        />
        <img
          className='size-24 w-full invert brightness-0'
          src='/assets/sam.png'
          alt='img'
        />
        <img
          className='size-24 w-full py-6 '
          src='/assets/col.png'
          alt='img'
        />
        <img
          className='size-24 w-full invert brightness-0'
          src='/assets/baj.png'
          alt='img'
        />
        <img
          className='size-24 invert w-full py-2'
          src='/assets/renee.png'
          alt='img'
        />
        <img
          className='size-24 w-full invert brightness-0 py-6'
          src='/assets/dy.png'
          alt='img'
        />
        <img
          className='size-24 w-full invert brightness-0'
          src='/assets/carat.png'
          alt='img'
        />
        <img
          className='size-24 invert w-full py-4 brightness-0'
          src='/assets/da.png'
          alt='img'
        />
        <img
          className='size-24 invert w-full py-7 brightness-0'
          src='/assets/du.png'
          alt='img'
        />

        <img
          className='size-24 invert w-full py-9 brightness-0'
          src='/assets/saf.png'
          alt='img'
        />
        <img
          className='size-24 invert w-full py-4 brightness-0'
          src='/assets/cet.png'
          alt='img'
        />
        <img
          className='size-24 invert w-full py-8 brightness-0'
          src='/assets/kuhl.png'
          alt='img'
        />
        <img
          className='size-24 py-7 w-full'
          src='/assets/eng.png'
          alt='img'
        />
        <img
          className='size-24 py-9 invert w-full'
          src='/assets/jira.png'
          alt='img'
        />
      </div>
    </div>
  );
}
