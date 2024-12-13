import React, { useState } from "react";
import { toast } from "react-toastify";

export default function BrandContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    dob: "",
    instagramUrl: "",
    youtubeUrl: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, city, dob, instagramUrl, password } = formData;

    // Validation checks
    if (!name || !email || !city || !dob || !instagramUrl || !password) {
      toast.error("All fields are required except YouTube URL!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Invalid email format!");
      return;
    }

    // Successful Submission
    toast.success("Form submitted successfully!");
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      email: "",
      city: "",
      dob: "",
      instagramUrl: "",
      youtubeUrl: "",
      password: "",
    });
  };

  return (
    <section className='min-h-screen py-12 px-6 lg:px-16 mt-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white'>
      <div className='max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-md p-10 rounded-xl shadow-4xl'>
        <h2 className='text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>
          Your Voice, Their Brand – Let’s Create Together!
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Name
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Working Email */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Working Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* City */}
          <div className='mb-6 flex gap-4'>
            <div className='w-2/3'>
              <label className='block text-sm font-medium text-gray-300'>
                City
              </label>
              <input
                type='text'
                name='city'
                value={formData.city}
                onChange={handleChange}
                placeholder='Enter your city'
                className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
              />
            </div>

            {/* DOB */}
            <div className='w-1/3'>
              <label className='block text-sm font-medium text-gray-300'>
                Date of Birth
              </label>
              <input
                type='date'
                name='dob'
                value={formData.dob}
                onChange={handleChange}
                className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
              />
            </div>
          </div>

          {/* Instagram URL */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Instagram URL
            </label>
            <input
              type='url'
              name='instagramUrl'
              value={formData.instagramUrl}
              onChange={handleChange}
              placeholder='Enter your Instagram profile URL'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* YouTube Page (Optional) */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              YouTube Page (Optional)
            </label>
            <input
              type='url'
              name='youtubeUrl'
              value={formData.youtubeUrl}
              onChange={handleChange}
              placeholder='Enter your YouTube channel URL (if any)'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Password */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Password
            </label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter a strong password'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-lg font-semibold hover:scale-105 transform transition focus:ring focus:ring-teal-500'>
              The Future of Influencer Marketing Starts Here!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
