import React, { useState, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-black bg-opacity-25 backdrop-blur-xl border-white border-opacity-20 border-2"
          : "bg-gradient-to-br from-white to-stone-300 text-black"
      } w-full mt-6 fixed right-1 left-1 z-50 transition-all duration-50 flex items-center px-4 py-1 shadow-lg rounded-full justify-between}`}>
      {/* Left Section */}
      <div className='w-1/2 '>
        <Link
          className='w-fit flex items-center'
          to=''>
          <img
            src='/assets/logo.png'
            alt='img'
            className=' h-12 w-12 md:h-20 md:w-20 object-contain hover:scale-110 transition-transform duration-50'
          />

          <div
            className={`${
              isScrolled
                ? "text-transparent bg-clip-text bg-white"
                : "text-black"
            } -ml-2 md:ml-[-12px] font-medium md:font-semibold text-xl xl:text-3xl`}>
            immick
          </div>
        </Link>
      </div>

      {/* Right Section */}
      <div className='hidden md:flex items-center'>
        <Link
          className='w-full'
          to='caseStudies'>
          <div
            className={`${
              isScrolled ? "text-white" : "text-black"
            } text-sm xl:text-xl font-semibold change cursor-pointer transition-colors duration-50`}>
            Our Work
          </div>
        </Link>
        <Link
          className='w-full'
          to='influencers'>
          <div
            className={`${
              isScrolled ? "text-white" : "text-black"
            } text-sm xl:text-xl font-semibold change cursor-pointer transition-colors duration-50`}>
            Influencers
          </div>
        </Link>
        <Link
          className='w-full'
          to='about'>
          <div
            className={`${
              isScrolled ? "text-white" : "text-black"
            } text-sm xl:text-xl font-semibold change cursor-pointer transition-colors duration-50`}>
            About Us
          </div>
        </Link>
        <Link
          className='w-full'
          to='services'>
          <div
            className={`${
              isScrolled ? "text-white" : "text-black"
            } text-sm xl:text-xl font-semibold change cursor-pointer transition-colors duration-50`}>
            Services
          </div>
        </Link>
        <Link
          className='w-full'
          to='campaigns'>
          <div
            className={`${
              isScrolled ? "text-white" : "text-black"
            } text-sm xl:text-xl font-semibold change cursor-pointer hover:scale-105 transition-colors duration-30 `}>
            Campaigns
          </div>
        </Link>

        {/* Join Us Dropdown */}
        <div
          onMouseEnter={() => setIsDropDownOpen(true)}
          onMouseLeave={() => setIsDropDownOpen(false)}
          className='relative'>
          <button
            className={`${
              !isScrolled
                ? "hover:border-black hover:text-black"
                : "hover:border-white hover:text-white"
            } ' flex justify-between items-center button text-xs xl:text-lg font-bold cursor-pointer mb-2 mt-2`}>
            Join Us <IoIosArrowDropdown className='text-sm xl:text-xl ' />
          </button>
          {isDropDownOpen && (
            <div className=' text-purple-50 absolute top-full right-0  bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950  border-gray-700 border-2 border-opacity-95 rounded-lg  py-4 px-6 w-48 z-50 transform transition-transform duration-50 scale-95 origin-top-right'>
              <div className='font-elecro text-lg font-semibold cursor-pointer change hover:border-r-4 hover:border-[#f200ff] transition-colors duration-50 mb-2'>
                <Link
                  className='w-full'
                  to='influencerRegister'>
                  I'm a creator
                </Link>
              </div>
              <div className='font-elecro text-lg font-semibold cursor-pointer change hover:border-r-4 hover:border-[#f200ff] transition-colors duration-50 '>
                <Link
                  className='w-full'
                  to='brandsRegister'>
                  I'm a Brand
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div
        className='bg-red-100 md:hidden cursor-pointer '
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className='space-y-1'>
          <div
            className={`${
              !isScrolled ? "bg-black" : "bg-white"
            } absolute right-5 top-5 h-1 w-6 rounded transform transition-transform duration-50`}></div>
          <div
            className={`${
              !isScrolled ? "bg-black" : "bg-white"
            } absolute right-5 top-6 h-1 w-6 rounded transform transition-transform duration-50`}></div>
          <div
            className={`${
              !isScrolled ? "bg-black" : "bg-white"
            } absolute right-5 top-8 h-1 w-6 rounded transform transition-transform duration-50`}></div>
        </div>
        {isMenuOpen && (
          <div
            className='text-white absolute top-full mt-2 right-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl rounded-lg py-4 px-6 w-48 z-50 md:hidden
          transform transition-transform duration-50 scale-95 origin-top-right'>
            <div className='font-elecro text-lg font-semibold cursor-pointer change hover:border-r-4 hover:border-[#f200ff] transition-colors duration-50 mb-2'>
              <Link
                to='caseStudies'
                className='w-full'>
                Our Work
              </Link>
            </div>
            <div className='font-elecro text-lg font-semibold cursor-pointer change hover:border-r-4 hover:border-[#f200ff] transition-colors duration-50 mb-2'>
              <Link
                to='about'
                className='w-full'>
                About Us
              </Link>
            </div>
            <div className='font-elecro text-lg font-semibold cursor-pointer change hover:border-r-4 hover:border-[#f200ff] transition-colors duration-50 mb-2'>
              <Link
                to='services'
                className='w-full'>
                Services
              </Link>
            </div>
            <div className='font-elecro text-lg font-semibold cursor-pointer change hover:border-r-4 hover:border-[#f200ff] transition-colors duration-50 '>
              <Link
                to='campaigns'
                className='w-full '>
                Campaigns
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu Dropdown */}
    </header>
  );
}
