// dropdown menu 

const menu = document.querySelector('.hidden');
const dropDown = document.querySelector('.mobile-menu-bckg');
const closeMenu = document.querySelector('.close');

menu.addEventListener('click', () =>{
    dropDown.classList.toggle('hidden2');
});

closeMenu.addEventListener('click', () => {
    dropDown.classList.toggle('hidden2');
});

// Dropdown Cart

const cartIcon = document.querySelector('.cart');
const cartContent = document.querySelector('.cart-dropdown');

cartIcon.addEventListener('click', () =>{
    cartContent.classList.toggle('hidden3');
});

// Chosing the quantity of products

const minusIcon = document.querySelector('.minus');
const plusIcon = document.querySelector('.plus');
const display = document.querySelector('.icon-p');

// let increase = '1';
plusIcon.addEventListener('click', () => {
    display.innerText++
});

minusIcon.addEventListener('click', () => {
    display.innerText--
});