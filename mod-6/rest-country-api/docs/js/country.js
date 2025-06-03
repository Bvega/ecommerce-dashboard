// Extract the 3-letter country code from the URL query parameter
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
const detailContainer = document.getElementById('country-detail');

/**
 * Fetch a country's full data using its code
 */
async function fetchCountryByCode(code) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
    if (!res.ok) throw new Error('Country not found');
    const data = await res.json();
    return data[0]; // API returns an array with one country object
  } catch (err) {
    console.error('Fetch error:', err);
    detailContainer.innerHTML = `<p>Error loading country data.</p>`;
  }
}

/**
 * Render a full country detail layout
 */
function renderCountryDetails(country) {
  const nativeName = Object.values(country.name.nativeName || {})[0]?.common || 'N/A';
  const currencies = Object.values(country.currencies || {}).map(c => c.name).join(', ') || 'N/A';
  const languages = Object.values(country.languages || {}).join(', ') || 'N/A';
  const borders = country.borders || [];

  detailContainer.innerHTML = `
    <button onclick="history.back()">← Back</button>
    <div class="detail-grid" style="display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 2rem;">
      <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" style="max-width: 320px;">
      <div class="detail-text" style="flex: 1;">
        <h2>${country.name.common}</h2>
        <p><strong>Native Name:</strong> ${nativeName}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Sub Region:</strong> ${country.subregion || 'N/A'}</p>
        <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
        <p><strong>Top Level Domain:</strong> ${country.tld?.[0] || 'N/A'}</p>
        <p><strong>Currencies:</strong> ${currencies}</p>
        <p><strong>Languages:</strong> ${languages}</p>
        <div style="margin-top: 1rem;">
          <strong>Border Countries:</strong>
          <div id="borders" style="margin-top: 0.5rem;">
            ${
              borders.length > 0
                ? borders.map(code =>
                    `<a href="country.html?code=${code}" class="border-btn" style="display: inline-block; margin: 0.25rem; padding: 0.5rem 1rem; background: #ddd; border-radius: 5px; text-decoration: none;">${code}</a>`
                  ).join('')
                : 'None'
            }
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Initialize the detail page
 */
async function init() {
  if (!code) {
    detailContainer.innerHTML = `<p>No country code provided in URL.</p>`;
    return;
  }

  const country = await fetchCountryByCode(code);
  if (country) {
    renderCountryDetails(country);
  }
}

init();
