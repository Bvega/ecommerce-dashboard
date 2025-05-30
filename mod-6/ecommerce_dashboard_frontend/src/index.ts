// src/index.ts
import { fetchProductCatalog, fetchProductReviews, fetchSalesReport, NetworkError, DataError } from './apiSimulator';
import { retryPromise } from './retryPromise';

const main = async () => {
  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);
    console.log("Products:", products);

    for (const product of products) {
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        console.log(`Reviews for ${product.name}:`, reviews);
      } catch (err) {
        console.error(`Error fetching reviews for product ${product.name}:`, err);
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      console.log("Sales Report:", report);
    } catch (err) {
      console.error("Error fetching sales report:", err);
    }
  } catch (err) {
    console.error("General error in main flow:", err);
  } finally {
    console.log("All API calls have been attempted.");
  }
};

main();
