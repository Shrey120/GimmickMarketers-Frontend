import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-gradient-to-b from-gray-800 to-black text-white py-12 px-8 lg:px-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* About Section */}
        <div>
          <h3 className='text-lg font-bold mb-4'>About Us</h3>
          <p className='text-sm text-gray-400'>
            Gimmick Marketers is a leading influencer marketing agency
            delivering creative solutions and measurable results for brands
            globally.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li>
              <a
                href='/about'
                className='text-sm text-gray-400 hover:text-green-500'>
                About
              </a>
            </li>
            <li>
              <a
                href='/services'
                className='text-sm text-gray-400 hover:text-green-500'>
                Services
              </a>
            </li>
            <li>
              <a
                href='/case-studies'
                className='text-sm text-gray-400 hover:text-green-500'>
                Case Studies
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='text-sm text-gray-400 hover:text-green-500'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
          <ul className='space-y-2'>
            <li className='text-sm text-gray-400'>
              Email:{" "}
              <a
                href='mailto:info@gimmickmarketers.com'
                className='hover:text-green-500'>
                info@gimmickmarketers.com
              </a>
            </li>
            <li className='text-sm text-gray-400'>Phone: +1 234 567 890</li>
            <li className='text-sm text-gray-400'>
              Address: 123 Marketing Blvd, NY
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a
              href='https://facebook.com'
              className='w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500'
              aria-label='Facebook'>
              <FaFacebookF className='text-white' />
            </a>
            <a
              href='https://twitter.com'
              className='w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500'
              aria-label='Twitter'>
              <FaTwitter className='text-white' />
            </a>
            <a
              href='https://instagram.com'
              className='w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500'
              aria-label='Instagram'>
              <FaInstagram className='text-white' />
            </a>
            <a
              href='https://linkedin.com'
              className='w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500'
              aria-label='LinkedIn'>
              <FaLinkedinIn className='text-white' />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='mt-12 border-t border-gray-700'></div>

      {/* Footer Bottom */}
      <div className='mt-8 flex flex-col lg:flex-row justify-between items-center text-gray-400 text-sm'>
        <p>
          © {new Date().getFullYear()} Gimmick Marketers. All rights reserved.
        </p>
        <ul className='flex space-x-4 mt-4 lg:mt-0'>
          <li>
            <a
              href='/privacy'
              className='hover:text-green-500'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='/terms'
              className='hover:text-green-500'>
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
