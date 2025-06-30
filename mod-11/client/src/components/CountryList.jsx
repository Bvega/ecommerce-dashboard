import React from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ countries }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4">
    {countries.map((country) => (
      <CountryCard key={country.cca3} country={country} />
    ))}
  </div>
);

export default CountryList;
