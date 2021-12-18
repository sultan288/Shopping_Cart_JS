// variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartDOM = document.querySelector(".cart")


function showCart(){
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
}
function hideCart(){
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
}


cartBtn.addEventListener('click', showCart);
closeCartBtn.addEventListener('click', hideCart);



// console.dir(document.body);
console.log(document.all);
