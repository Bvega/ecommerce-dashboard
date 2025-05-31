// src/frontend.ts
// Import necessary modules
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';
import { retryPromise } from './retryPromise';

// Get reference to the DOM output container
const output = document.getElementById("output")!;

/**
 * Render a product card with semantic HTML
 */
const renderProductCard = (product: { id: number; name: string; price: number }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2 class="card-title">${product.name}</h2>
    <p><strong>Price:</strong> $${product.price}</p>
  `;
  output.appendChild(card);
};

/**
 * Render a single review comment block
 */
const renderReview = (review: any) => {
  const div = document.createElement("div");
  div.className = "review";
  div.innerHTML = `
    <p><strong>${review.author || 'Anonymous'}:</strong> ${review.comment || 'No comment provided'}</p>
  `;
  output.appendChild(div);
};

/**
 * Render a clean, formatted sales report
 */
const renderSalesReport = (report: { totalSales: number; unitsSold: number; averagePrice: number }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2 class="card-title">Sales Report</h2>
    <p><strong>Total Sales:</strong> $${report.totalSales}</p>
    <p><strong>Units Sold:</strong> ${report.unitsSold}</p>
    <p><strong>Average Price:</strong> $${report.averagePrice}</p>
  `;
  output.appendChild(card);
};

/**
 * Render a clean error message box
 */
const renderError = (message: string) => {
  const div = document.createElement("div");
  div.className = "error";
  div.textContent = message;
  output.appendChild(div);
};

/**
 * Main function to orchestrate fetching and rendering of data
 */
const main = async () => {
  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);

    products.forEach(product => {
      renderProductCard(product);
    });

    for (const product of products) {
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        if (reviews.length > 0) {
          const title = document.createElement("h3");
          title.className = "card-title";
          title.textContent = `Reviews for ${product.name}`;
          output.appendChild(title);
        }
        reviews.forEach(renderReview);
      } catch (err) {
        renderError(`Error fetching reviews for ${product.name}:\n${err}`);
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      renderSalesReport(report);
    } catch (err) {
      renderError(`Error fetching sales report:\n${err}`);
    }
  } catch (err) {
    renderError(`Fatal Error:\n${err}`);
  }
};

// Run the application
main();
