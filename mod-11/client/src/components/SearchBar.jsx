import React from 'react';

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      aria-label="Search countries by name"
      placeholder="Search for a country..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full max-w-sm py-2 px-4 rounded shadow focus:ring transition"
    />
  );
}
