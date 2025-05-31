// src/frontend.ts
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';
import { retryPromise } from './retryPromise';

const output = document.getElementById("output")!;

/**
 * Render a block of content with optional styling.
 * @param html - The HTML content to display.
 * @param className - CSS class to apply for styling (defaults to 'card').
 */
const render = (html: string, className: string = "card") => {
  const div = document.createElement("div");
  div.className = className;
  div.innerHTML = `<pre>${html}</pre>`;
  output.appendChild(div);
};

const main = async () => {
  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);
    render("Products:", "card-title");
    render(JSON.stringify(products, null, 2)); // uses default "card" style

    for (const product of products) {
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        render(`Reviews for ${product.name}:`, "card-title");
        reviews.forEach(review => {
          render(JSON.stringify(review, null, 2), "review");
        });
      } catch (err) {
        render(`Error fetching reviews for ${product.name}:\n${err}`, "error");
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      render("Sales Report:", "card-title");
      render(JSON.stringify(report, null, 2)); // uses default "card" style
    } catch (err) {
      render(`Error fetching sales report:\n${err}`, "error");
    }
  } catch (err) {
    render(`Fatal Error:\n${err}`, "error");
  }
};

main();
