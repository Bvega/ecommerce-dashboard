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
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 rounded shadow bg-var(--element-bg) text-var(--text-color) hover:bg-opacity-90 transition"
      >
        &larr; Back
      </button>
      {loading && <p className="text-center">Loading details...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {country && (
        <>
          <CountryDetail country={country} />
          {country.borders?.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-2 text-var(--text-color)">
                Border Countries:
              </h2>
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

