import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital, cca3 } = country;

  return (
    <Link
      to={`/country/${cca3}`}
      className="country-card"
      aria-label={`View details for ${name.common}`}
    >
      <img
        src={flags.svg}
        alt={`Flag of ${name.common}`}
      />
      <div className="card-body">
        <h2>{name.common}</h2>
        <p><strong>Population:</strong> {population.toLocaleString()}</p>
        <p><strong>Region:</strong> {region}</p>
        <p><strong>Capital:</strong> {capital?.[0] || '—'}</p>
      </div>
    </Link>
  );
}
