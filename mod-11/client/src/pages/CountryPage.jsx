import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CountryDetail from '../components/CountryDetail';
import BorderLink from '../components/BorderLink';

export default function CountryPage() {
  const { code } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(`alpha/${code}`);

  const country = data && data[0];

  return (
    <main className="container mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 shadow rounded"
      >
        &larr; Back
      </button>
      {loading && <p>Loading country details...</p>}
      {error && <p>Error: {error}</p>}
      {country && (
        <>
          <CountryDetail country={country} />
          {country.borders && country.borders.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {country.borders.map((borderCode) => (
                  <BorderLink key={borderCode} code={borderCode} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </main>
);
}
