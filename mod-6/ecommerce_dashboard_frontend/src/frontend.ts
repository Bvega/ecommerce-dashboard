// src/frontend.ts
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from './apiSimulator';
import { retryPromise } from './retryPromise';

const output = document.getElementById("output")!;

const render = (html: string) => {
  const pre = document.createElement('pre');
  pre.textContent = html;
  output.appendChild(pre);
};

const main = async () => {
  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);
    render(`Products:\n${JSON.stringify(products, null, 2)}`);

    for (const product of products) {
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        render(`Reviews for ${product.name}:\n${JSON.stringify(reviews, null, 2)}`);
      } catch (err) {
        render(`Error fetching reviews for ${product.name}: ${err}`);
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      render(`Sales Report:\n${JSON.stringify(report, null, 2)}`);
    } catch (err) {
      render(`Error fetching sales report: ${err}`);
    }
  } catch (err) {
    render(`Fatal Error:\n${err}`);
  }
};

main();

