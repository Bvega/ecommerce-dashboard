import { useState, useEffect } from 'react';

const BASE_URL = 'https://restcountries.com/v3.1';
// Only these six fields for the list endpoint (must be ≤10)
const LIST_FIELDS = [
  'name',
  'flags',
  'population',
  'region',
  'capital',
  'cca3'
].join(',');

export default function useFetch(path) {
  const [data, setData]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    if (!path) return;

    const controller = new AbortController();
    const cleanPath  = path.replace(/^\/+/, '');
    let url = `${BASE_URL}/${cleanPath}`;

    // Append fields only for "all"
    if (cleanPath === 'all') {
      url += `?fields=${LIST_FIELDS}`;
    }

    console.log('🛠️ fetching:', url);

    setLoading(true);
    setError(null);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [path]);

  return { data, loading, error };
}
