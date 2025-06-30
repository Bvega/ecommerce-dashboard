import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Lazy-load from localStorage if available
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  // Whenever it changes, persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {}
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
