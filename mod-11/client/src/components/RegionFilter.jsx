import React from 'react';

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

export default function RegionFilter({ value, onChange }) {
  return (
    <select
      aria-label="Filter countries by region"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-xs py-2 px-4 rounded shadow focus:ring transition"
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region.toLowerCase()}>
          {region}
        </option>
      ))}
    </select>
  );
}
