// src/frontend.ts
// Import necessary modules for data fetching and retry logic
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';
import { retryPromise } from './retryPromise';

// Select the output container in the DOM where all content will be rendered
const output = document.getElementById("output")!;

/**
 * Renders a product card displaying the product name and price.
 * Also creates a placeholder container for that product's reviews.
 */
const renderProductCard = (product: { id: number; name: string; price: number }) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2 class="card-title">${product.name}</h2>
    <p><strong>Price:</strong> $${product.price}</p>
    <div class="reviews" id="reviews-${product.id}"></div>
  `;
  output.appendChild(card);
};

/**
 * Renders a review for a specific product by appending it to the product's review container.
 */
const renderReview = (review: any, productId: number) => {
  const reviewsContainer = document.getElementById(`reviews-${productId}`);
  if (reviewsContainer) {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <p><strong>${review.author || 'Anonymous'}:</strong> ${review.comment || 'No comment provided'}</p>
    `;
    reviewsContainer.appendChild(div);
  }
};

/**
 * Renders a formatted card showing sales statistics.
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
 * Renders an error message styled as an alert box.
 */
const renderError = (message: string) => {
  const div = document.createElement("div");
  div.className = "error";
  div.textContent = message;
  output.appendChild(div);
};

/**
 * Main function to orchestrate fetching and rendering products, reviews, and sales report.
 * Uses retryPromise to add robustness against transient errors.
 */
const main = async () => {
  try {
    // Fetch and render product catalog
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);

    products.forEach(product => {
      renderProductCard(product); // Render product UI
    });

    for (const product of products) {
      try {
        // Fetch and render reviews for each product
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        reviews.forEach(review => renderReview(review, product.id));
      } catch (err) {
        renderError(`Error fetching reviews for ${product.name}:\n${err}`);
      }
    }

    try {
      // Fetch and render the overall sales report
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      renderSalesReport(report);
    } catch (err) {
      renderError(`Error fetching sales report:\n${err}`);
    }
  } catch (err) {
    // Catch fatal errors that may occur before any rendering begins
    renderError(`Fatal Error:\n${err}`);
  }
};

// Execute the main workflow
main();
