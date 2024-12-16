import React, { useState, useEffect } from "react";

const InfluencerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [influencers, setInfluencers] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [sortField, setSortField] = useState("");

  useEffect(() => {
    // Fetch influencers from an API or local data
    const fetchInfluencers = async () => {
      const data = [
        {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "+1234567890",
          city: "New York",
          state: "NY",
          instagramId: "@johndoe",
          followers: 50000,
          image: "john-doe.jpg",
        },
        {
          name: "Jane Smith",
          email: "janesmith@example.com",
          contact: "+0987654321",
          city: "Los Angeles",
          state: "CA",
          instagramId: "@janesmith",
          followers: 120000,
          image: "jane-smith.jpg",
        },
        // Add more influencer data here
      ];
      setInfluencers(data);
    };

    fetchInfluencers();
  }, []);

  const handleSort = (field) => {
    const newSortDirection =
      sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
    setSortField(field);

    const sortedInfluencers = [...influencers].sort((a, b) => {
      if (newSortDirection === "asc") {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });

    setInfluencers(sortedInfluencers);
  };

  const filteredInfluencers = influencers.filter((influencer) =>
    influencer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getSortArrow = (field) => {
    if (sortField === field) {
      return sortDirection === "asc" ? "↓" : "↑";
    }
    return "";
  };

  return (
    <div className='pt-28 md:pt-40 min-h-screen bg-gradient-to-br from-purple-100 via-white to-green-100 p-6'>
      <div className='font-lato text-2xl md:text-6xl mb-10 md:mb-20 text-center font-bold'>
        Influencer Details
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center mb-6'>
          <input
            type='text'
            placeholder='Search Influencers...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-1/3 p-2 rounded-lg shadow-md text-lg placeholder-gray-600 focus:outline-none'
          />
        </div>

        <div className='overflow-x-auto bg-white shadow-md rounded-lg'>
          <table className='min-w-full table-auto text-gray-700'>
            <thead>
              <tr className='bg-gradient-to-r from-green-400 to-purple-400 text-white'>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("name")}>
                  Name {getSortArrow("name")}
                </th>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("email")}>
                  Email {getSortArrow("email")}
                </th>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("contact")}>
                  Contact Details {getSortArrow("contact")}
                </th>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("city")}>
                  City {getSortArrow("city")}
                </th>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("state")}>
                  State {getSortArrow("state")}
                </th>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("instagramId")}>
                  Instagram ID {getSortArrow("instagramId")}
                </th>
                <th
                  className='py-3 px-4 text-center cursor-pointer'
                  onClick={() => handleSort("followers")}>
                  Followers {getSortArrow("followers")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInfluencers.map((influencer, index) => (
                <tr
                  key={index}
                  className='hover:bg-gray-100'>
                  <td className='py-3 px-4 text-center'>{influencer.name}</td>
                  <td className='py-3 px-4 text-center'>{influencer.email}</td>
                  <td className='py-3 px-4 text-center'>
                    {influencer.contact}
                  </td>
                  <td className='py-3 px-4 text-center'>{influencer.city}</td>
                  <td className='py-3 px-4 text-center'>{influencer.state}</td>
                  <td className='py-3 px-4 text-center'>
                    {influencer.instagramId}
                  </td>
                  <td className='py-3 px-4 text-center'>
                    {influencer.followers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;
