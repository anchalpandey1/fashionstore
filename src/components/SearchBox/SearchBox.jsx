import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBox = ({ placeholder, onChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="relative flex items-center">
    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#4B4747] text-2xl" />
    <input
      type="text"
      placeholder="Search for More"
      value={searchTerm}
      onChange={handleChange}
      className="pl-10 pr-4 py-2 w-full border border-gray-300 text-2xl rounded-full text-black "
      style={{ borderRadius: '30.5px' }}
    />
  </div>
  );
};

export default SearchBox;
