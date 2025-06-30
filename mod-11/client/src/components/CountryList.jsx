import React from 'react';
import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
  return (
    <div className="country-grid">
      {countries.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
    </div>
  );
}
