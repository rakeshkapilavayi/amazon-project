import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadproducts } from "../data/products.js";
import { loadcart } from "../data/cart.js"; 
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

Promise.all([
    new Promise((resolve) => {
        loadproducts(() => {
            resolve('value1');
        });
    }),
    new Promise((resolve) => {
        loadcart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
/*
new Promise((resolve) => {
    loadproducts(() => {
        resolve('value1');
    });
}).then((value) => {
    console.log(value); 
    return new Promise((resolve) => {
        loadcart(() => {
            resolve();
        });
    })
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
})
    */

/*
loadproducts(() => {
    loadcart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    })  
});
*/
