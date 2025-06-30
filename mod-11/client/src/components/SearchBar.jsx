import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/3 p-2 shadow rounded"
      aria-label="Search countries by name"
    />
  );
};

export default SearchBar;
