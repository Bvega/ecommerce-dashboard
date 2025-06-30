import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const RegionFilter = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/5 p-2 shadow rounded"
      aria-label="Filter countries by region"
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region.toLowerCase()}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default RegionFilter;
