import React, { useState } from "react";
const data = [
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
  {
    brandName: "Nike",
    businessEmail: "contact@nike.com",
    businessWebsite: "https://nike.com",
    contactName: "John Doe",
    contactNumber: "123-456-7890",
    budget: "$5000",
    campaignDetails: "Launch of new sportswear collection.",
  },
  {
    brandName: "Apple",
    businessEmail: "info@apple.com",
    businessWebsite: "https://apple.com",
    contactName: "Jane Smith",
    contactNumber: "987-654-3210",
    budget: "$20000",
    campaignDetails: "Marketing for the new iPhone launch.",
  },
];

export default function AdminBrands() {
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  // Pagination Logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const visibleItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filteredInfluencers = visibleItems.filter((data) =>
    data.brandName.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className=' px-10 pt-28 md:pt-40 pb-10 bg-gradient-to-b from-purple-50 via-white to-purple-100'>
      <h1 className='font-lato text-2xl md:text-5xl font-extrabold text-center mb-10'>
        Brands Registered
      </h1>
      {/* Table */}
      <div className='flex justify-between items-center mb-6'>
        <input
          type='text'
          placeholder='Search Influencers...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-1/2 p-2 rounded-lg shadow-md text-lg placeholder-gray-600 focus:outline-none'
        />
      </div>

      <div className='overflow-x-auto shadow-md rounded-xl'>
        <table className='min-w-full bg-white table-auto shadow-md rounded-lg'>
          <thead>
            <tr className='bg-purple-700 text-white'>
              <th className='py-3 px-4 text-center'>Brand Name</th>
              <th className='py-3 px-4 text-center'>Business Email</th>
              <th className='py-3 px-4 text-center'>Business Website</th>
              <th className='py-3 px-4 text-center'>Contact Name</th>
              <th className='py-3 px-4 text-center'>Contact Number</th>
              <th className='py-3 px-4 text-center'>Budget</th>
              <th className='py-3 px-4 text-center'>Campaign Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredInfluencers.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-purple-100`}>
                <td className='py-3 px-4 text-center'>{item.brandName}</td>
                <td className='py-3 px-4 text-center'>{item.businessEmail}</td>
                <td className='py-3 px-4 text-center'>
                  <a
                    href={item.businessWebsite}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-purple-700 hover:underline  text-center'>
                    {item.businessWebsite}
                  </a>
                </td>
                <td className='py-3 px-4 text-center'>{item.contactName}</td>
                <td className='py-3 px-4 text-center'>{item.contactNumber}</td>
                <td className='py-3 px-4 text-center'>{item.budget}</td>
                <td className='py-3 px-4 text-center'>
                  {item.campaignDetails}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className='flex justify-center mt-10 space-x-2'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-700 text-white hover:bg-purple-500"
          }`}>
          Prev
        </button>
        <span className='text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-700 text-white hover:bg-purple-500"
          }`}>
          Next
        </button>
      </div>
    </div>
  );
}
