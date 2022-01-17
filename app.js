// variables

const cartBtn = document.querySelector(".cart-btn");
const cartContainer = document.querySelector(".cart-overlay");
const cartDOM = document.querySelector(".cart")
const closeCartBtn = document.querySelector(".close-cart");
const cartContent = document.querySelector(".cart-content");
const cartItems = document.querySelector(".cart-item");
const cartTotal = document.querySelector(".cart-total");
const clearCartBtn = document.querySelector(".clear-cart");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];

// buttons
let buttonsDOM = [];

//getting the products
class Products{
    
}


function showCart(){
    cartContainer.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
}
function hideCart(){
    cartContainer.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
}


cartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);



// console.dir(document.body);
console.log(document.all);
