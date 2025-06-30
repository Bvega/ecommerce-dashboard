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
    <main className="container mx-auto p-4">
      <div className="controls flex flex-col md:flex-row justify-between mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <RegionFilter value={selectedRegion} onChange={setSelectedRegion} />
      </div>
      {loading && <p>Loading countries...</p>}
      {error && <p>Error: {error}</p>}
      {countries && <CountryList countries={countries} />}
    </main>
  );
}
