import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadproducts , loadproductsfetch} from "../data/products.js";
import { loadcart } from "../data/cart.js"; 
import { cart } from '../data/cart.js';

//import '../data/cart-class.js';
//import '../data/backend-practice.js';


// let cartQuantity = 0;
// cart.forEach((cartItem) => {
//     cartQuantity += cartItem.quantity;
// }); 
// document.querySelector('.js-update-cart-quantity-top')
//     .innerHTML = `${cartQuantity} items`

function updateCartQuantity(class_name){     
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    }); 
    document.querySelector(class_name).innerHTML = cartQuantity;
}
updateCartQuantity('.js-update-cart-quantity-top');


async function loadPage(){

    await loadproductsfetch();

    await new Promise((resolve) => {
        loadcart(() => {
            resolve();
        });
    });
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
Promise.all([
    loadproductsfetch(),
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
*/

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
