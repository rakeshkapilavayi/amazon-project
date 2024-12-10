import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadproducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

loadproducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
