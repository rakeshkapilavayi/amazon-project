export let cart;
LoadFromStorage();

export function LoadFromStorage(){
    cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart)
    {
        cart=[{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1'
        },{
            productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1,
            deliveryOptionId: '2'
        }];
    }
}

function savetoStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

let isAutoPlay = false;
let timeout;

export function Addtocart(productId){
    let matchingItem;
  
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });
    
    const quantitySelector = document.querySelector(
        `.js-quantity-selector-${productId}`
      );
      const quantity_value = Number(quantitySelector.value);
    if(matchingItem){
        matchingItem.quantity+=quantity_value;
    }else{
        cart.push({
            productId: productId,
            quantity: quantity_value,
            deliveryOptionId: '1'
        });
    }

    const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
    if (addedMessage.timeoutId) {
        clearTimeout(addedMessage.timeoutId);
    }

    // Show the message
    addedMessage.classList.add('added-to-cart-visible');

    // Set a new timeout for hiding the message
    addedMessage.timeoutId = setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
        addedMessage.timeoutId = null; // Reset the timeout ID
    }, 2000);
    

    savetoStorage();
  }

  export function removefromcart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        };
    });

    cart=newCart;
    savetoStorage();
  }

  export function updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
  
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    savetoStorage();
  }
  export function loadcart(fun) {
    const xhr = new XMLHttpRequest();
  
    xhr.addEventListener('load', () => {
      console.log(xhr.response)  
      fun();
    });
  
    xhr.open('GET','https://supersimplebackend.dev/cart');
    xhr.send();
  }