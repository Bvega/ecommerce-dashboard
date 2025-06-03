// API utility functions will go here
export async function fetchCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
}