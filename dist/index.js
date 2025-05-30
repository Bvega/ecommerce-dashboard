"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const apiSimulator_1 = require("./apiSimulator");
const retryPromise_1 = require("./retryPromise");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, retryPromise_1.retryPromise)(() => (0, apiSimulator_1.fetchProductCatalog)(), 3, 1000);
        console.log("Products:", products);
        for (const product of products) {
            try {
                const reviews = yield (0, retryPromise_1.retryPromise)(() => (0, apiSimulator_1.fetchProductReviews)(product.id), 3, 1000);
                console.log(`Reviews for ${product.name}:`, reviews);
            }
            catch (err) {
                console.error(`Error fetching reviews for product ${product.name}:`, err);
            }
        }
        try {
            const report = yield (0, retryPromise_1.retryPromise)(() => (0, apiSimulator_1.fetchSalesReport)(), 3, 1000);
            console.log("Sales Report:", report);
        }
        catch (err) {
            console.error("Error fetching sales report:", err);
        }
    }
    catch (err) {
        console.error("General error in main flow:", err);
    }
    finally {
        console.log("All API calls have been attempted.");
    }
});
main();
