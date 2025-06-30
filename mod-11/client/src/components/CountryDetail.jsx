import React from 'react';

const CountryDetail = ({ country }) => {
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
    <div className="flex flex-col lg:flex-row gap-8">
      <img
        src={flags.svg}
        alt={`Flag of ${name.common}`}
        className="w-full lg:w-1/2 h-auto object-cover shadow rounded"
      />
      <div className="lg:flex-1">
        <h1 className="text-2xl font-bold mb-4">{name.common}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Native Name:</strong>{' '}
              {Object.values(name.nativeName || {})[0]?.common}
            </p>
            <p>
              <strong>Population:</strong> {population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital?.[0] || '—'}
            </p>
          </div>
          <div>
            <p>
              <strong>Top Level Domain:</strong> {tld?.join(', ')}
            </p>
            <p>
              <strong>Currencies:</strong>{' '}
              {Object.values(currencies || {})
                .map((cur) => cur.name)
                .join(', ')}
            </p>
            <p>
              <strong>Languages:</strong>{' '}
              {Object.values(languages || {}).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
