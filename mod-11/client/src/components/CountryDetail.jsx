import React from 'react';

export default function CountryDetail({ country }) {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8">
      <div className="w-full lg:w-1/2 h-auto">
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="w-full h-auto object-cover rounded shadow"
        />
      </div>
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold text-var(--text-color)">
          {name.common}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-var(--text-color)">
          <div className="space-y-1">
            <p><strong>Native Name:</strong> {Object.values(name.nativeName || {})[0]?.common}</p>
            <p><strong>Population:</strong> {population.toLocaleString()}</p>
            <p><strong>Region:</strong> {region}</p>
            <p><strong>Sub Region:</strong> {subregion}</p>
            <p><strong>Capital:</strong> {capital?.[0] || '—'}</p>
          </div>
          <div className="space-y-1">
            <p><strong>Top Level Domain:</strong> {tld?.join(', ')}</p>
            <p><strong>Currencies:</strong> {Object.values(currencies || {}).map((cur) => cur.name).join(', ')}</p>
            <p><strong>Languages:</strong> {Object.values(languages || {}).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
