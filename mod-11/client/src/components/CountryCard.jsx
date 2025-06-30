import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital, cca3 } = country;

  return (
    <Link to={`/country/${cca3}`}>
      <div className="shadow rounded overflow-hidden hover:shadow-lg transition">
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold mb-2">{name.common}</h2>
          <p>
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital?.[0] || '—'}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
