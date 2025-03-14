import React, { useState } from "react";
import { toast } from "react-toastify";
import { useContextApi } from "../context/appContext";
export default function BrandContact() {
  const { regiterBrand } = useContextApi();
  const [formData, setFormData] = useState({
    brandName: "",
    businessEmail: "",
    businessWebsite: "",
    contactName: "",
    contactNumber: "",
    budget: "",
    campaignDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      brandName,
      businessEmail,
      businessWebsite,
      contactName,
      contactNumber,
      budget,
      campaignDetails,
    } = formData;

    // Validation checks
    if (
      !brandName ||
      !businessEmail ||
      !businessWebsite ||
      !contactName ||
      !contactNumber ||
      !budget ||
      !campaignDetails
    ) {
      toast.error("All fields are required!");
      return;
    } else if (!validateEmail(businessEmail)) {
      toast.error("Invalid email format!");
      return;
    } else {
      regiterBrand(formData);
    }
  };

  return (
    <section className='min-h-screen pb-12 px-6 lg:px-16 pt-28 md:pt-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white'>
      <div className='max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-md px-10 rounded-xl shadow-4xl'>
        <h2 className='text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500'>
          Empowering Your Brand to Lead and Inspire!
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Brand Name */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Brand Name
            </label>
            <input
              type='text'
              name='brandName'
              value={formData.brandName}
              onChange={handleChange}
              placeholder='Enter your brand name'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Business Email */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Business Email
            </label>
            <input
              type='email'
              name='businessEmail'
              value={formData.businessEmail}
              onChange={handleChange}
              placeholder='Enter your business email'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Business Website */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Business Website
            </label>
            <input
              type='url'
              name='businessWebsite'
              value={formData.businessWebsite}
              onChange={handleChange}
              placeholder='Enter your business website URL'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Contact Name */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Contact Name
            </label>
            <input
              type='text'
              name='contactName'
              value={formData.contactName}
              onChange={handleChange}
              placeholder='Enter your name'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Contact Number */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Contact Number
            </label>
            <input
              type='text'
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder='Enter your contact number'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
            />
          </div>

          {/* Budget */}
          <div className='mb-6 flex gap-4'>
            <div className='w-2/3'>
              <label className='block text-sm font-medium text-gray-300'>
                Budget (Amount)
              </label>
              <input
                type='number'
                name='budget'
                value={formData.budget}
                onChange={handleChange}
                placeholder='Enter budget'
                className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
              />
            </div>
            <div className='w-1/3'>
              <label className='block text-sm font-medium text-gray-300'>
                Currency
              </label>
              <div
                name='currency'
                className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white focus:ring focus:ring-teal-500'>
                ₹ INR
              </div>
            </div>
          </div>

          {/* Campaign Details */}
          <div className='mb-6'>
            <label className='block text-sm font-medium text-gray-300'>
              Campaign Details
            </label>
            <textarea
              name='campaignDetails'
              value={formData.campaignDetails}
              onChange={handleChange}
              placeholder='Describe the campaign you want to run'
              className='w-full mt-2 p-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:ring focus:ring-teal-500'
              rows='4'></textarea>
          </div>

          {/* Submit Button */}
          <div className='text-center'>
            <button
              type='submit'
              className='w-full py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-500 text-lg font-semibold hover:scale-105 transform transition focus:ring focus:ring-teal-500'>
              Let's Unlock Your Brand's Full Potential!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
