import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import SearchBar from '../components/SearchBar';
import RegionFilter from '../components/RegionFilter';
import CountryList from '../components/CountryList';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const path = searchTerm
    ? `name/${searchTerm}`
    : selectedRegion
    ? `region/${selectedRegion}`
    : 'all';

  const { data: countries, loading, error } = useFetch(path);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
      <div className="controls flex flex-col lg:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <RegionFilter value={selectedRegion} onChange={setSelectedRegion} />
      </div>
      {loading && <p className="text-center">Loading countries...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {countries && <CountryList countries={countries} />}
    </main>
  );
}
