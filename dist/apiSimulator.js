"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = exports.DataError = exports.NetworkError = void 0;
// src/apiSimulator.ts
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}
exports.NetworkError = NetworkError;
class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DataError';
    }
}
exports.DataError = DataError;
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { reviewId: 1, rating: 5, comment: "Excellent!" },
                    { reviewId: 2, rating: 4, comment: "Very good" },
                ]);
            }
            else {
                reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ totalSales: 50000, unitsSold: 200, averagePrice: 250 });
            }
            else {
                reject(new NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
