/**
 * Extract the 3-letter code from the URL
 */
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const detailContainer = document.getElementById('country-detail');

/**
 * Fetch the country data using the code
 */
async function fetchCountryByCode(code) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!res.ok) throw new Error('Country not found');
    const data = await res.json();
    return data[0]; // API returns an array
  } catch (err) {
    console.error('Fetch error:', err);
    detailContainer.innerHTML = `<p>Error loading country data.</p>`;
  }
}

/**
 * Initialize detail page
 */
async function init() {
  if (!code) {
    detailContainer.innerHTML = `<p>No country code provided.</p>`;
    return;
  }

  const country = await fetchCountryByCode(code);
  if (!country) return;

  console.log('Country:', country); // ✅ TEMP TEST: shows raw object
  detailContainer.innerHTML = `<h2>${country.name.common}</h2><img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="200">`;
}

init();
