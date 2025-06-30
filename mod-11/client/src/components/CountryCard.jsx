import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  const { flags, name, population, region, capital, cca3 } = country;

  return (
    <Link
      to={`/country/${cca3}`}
      className="block bg-var(--element-bg) text-var(--text-color) rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
      aria-label={`View details for ${name.common}`}
    >
      <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="font-semibold text-lg">{name.common}</h2>
        <p className="text-sm">
          <strong>Population:</strong> {population.toLocaleString()}
        </p>
        <p className="text-sm">
          <strong>Region:</strong> {region}</p>
        <p className="text-sm">
          <strong>Capital:</strong> {capital?.[0] || '—'}</p>
      </div>
    </Link>
  );
}
