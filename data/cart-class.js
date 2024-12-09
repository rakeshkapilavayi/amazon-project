class Cart {
    cartItems = undefined;
    LocalStorageKey = undefined;

    constructor(LocalStorageKey){
        this.LocalStorageKey = LocalStorageKey;
        this.LoadFromStorage();
    }

    LoadFromStorage(){
        this.cartItems = JSON.parse(localStorage.getItem(this.LocalStorageKey));
        if(!this.cartItems)
        {
            this.cartItems=[{
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
    savetoStorage(){
        localStorage.setItem(this.LocalStorageKey,JSON.stringify(this.cartItems));
    }
    Addtocart(productId){
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
      
        if(matchingItem){
            matchingItem.quantity+=1;
        }else{
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
    
        this.savetoStorage();
      }
      removefromcart(productId){
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId!==productId){
                newCart.push(cartItem);
            };
        });
    
        this.cartItems=newCart;
        this.savetoStorage();
      }
      updateDeliveryOption(productId, deliveryOptionId){
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
    
        matchingItem.deliveryOptionId = deliveryOptionId;
    
        this.savetoStorage();
      }
}


const cart = new Cart('cart-oop');
const Businesscart = new Cart('cart-buidiness');


console.log(cart);
console.log(Businesscart);