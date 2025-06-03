// Import the fetch function from api.js
import { fetchAllCountries } from './api.js';

console.log("Main script loaded ✅");

// DOM Elements
const container = document.getElementById('country-list');
const searchInput = document.getElementById('search');
const regionSelect = document.getElementById('region-filter');

// Store all countries globally for reuse in filters
let allCountries = [];

/**
 * Create and return a DOM element for a single country card
 */
function createCountryCard(country) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
    <div class="card-body" style="padding: 1rem;">
      <h3>${country.name.common}</h3>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
      <a href="country.html?code=${country.cca3}" class="view-btn">View Details</a>
    </div>
  `;

  return card;
}

/**
 * Render a list of country cards into the container
 */
function renderCountries(countryList) {
  container.innerHTML = ''; // Clear previous content
  countryList.forEach(country => {
    const card = createCountryCard(country);
    container.appendChild(card);
  });
}

/**
 * Apply search and region filters to the country list
 */
function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const region = regionSelect.value;

  const filtered = allCountries.filter(country => {
    const matchesName = country.name.common.toLowerCase().includes(query);
    const matchesRegion = region === '' || country.region === region;
    return matchesName && matchesRegion;
  });

  renderCountries(filtered);
}

// Listen for search and filter changes
searchInput.addEventListener('input', applyFilters);
regionSelect.addEventListener('change', applyFilters);

/**
 * Main initialization function
 */
async function init() {
  console.log("Fetching countries...");
  allCountries = await fetchAllCountries();
  renderCountries(allCountries);
  console.log(`Rendered ${allCountries.length} countries ✅`);
}

init();
