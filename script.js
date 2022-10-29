//  Querying the DOM

const menu = document.querySelector('.hidden');
const dropDown = document.querySelector('.mobile-menu-bckg');
const closeMenu = document.querySelector('.close');
const cartIndicator = document.querySelector('.num-of-prd');
const minusIcon = document.querySelector('.minus');
const plusIcon = document.querySelector('.plus');
const display = document.querySelector('.icon-p');
const cartIcon = document.querySelector('.cart');
const cartContent = document.querySelector('.cart-dropdown');
const selectedItems = document.querySelector('.cart-dropdown-content');
const price = document.querySelector('.prices')
const addToCart = document.querySelector('.cart-icon');
console.log(selectedItems);

// dropdown menu

menu.addEventListener('click', () =>{
    dropDown.classList.toggle('hidden2');
});

closeMenu.addEventListener('click', () => {
    dropDown.classList.toggle('hidden2');
});

// Dropdown Cart

cartIcon.addEventListener('click', () =>{
    cartContent.classList.toggle('hidden3');

});

// Chosing the quantity of products

plusIcon.addEventListener('click', () => {
    display.innerText++
});

minusIcon.addEventListener('click', () => {
     if(display.innerText !== '0'){
        display.innerText--;
     }else{
        return
     };
});

// Adding the number of items to cart 

addToCart.addEventListener('click', () =>{
    cartIndicator.style.display ='block';
    cartIndicator.innerText = display.innerText;
    const shoePrice = 125.45;
    const totalAmount = shoePrice * Number(cartIndicator.innerText);

    if(cartIndicator.innerText !== '0'){
        selectedItems.innerHTML = `
<img class="jsImage" src="./images/image-product-1-thumbnail.jpg" alt="">
<div class="jsDiv">
    <p class="jsDiv-p1">fall limited edition sneakers</p>
    <p class="jsDiv-p2">$${shoePrice} x ${cartIndicator.innerText}</p>
    <p class="jsDiv-p2 amount">$${totalAmount}</p>
</div>
<img class="delete-icon" src="./images/icon-delete.svg" alt="delete-icon">
<div class="check-out">checkout</div>
`;
    }else{
        return
    };
});
