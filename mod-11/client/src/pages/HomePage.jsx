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
    <main className="container py-6">
      <div className="controls">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <RegionFilter
          value={selectedRegion}
          onChange={setSelectedRegion}
        />
      </div>

      {loading && <p>Loading countries…</p>}
      {error   && <p>Error: {error}</p>}
      {countries && <CountryList countries={countries} />}
    </main>
  );
}
