//  Querying the DOM

const menu = document.querySelector('.hidden');
const dropDown = document.querySelector('.mobile-menu-bckg');
const closeMenu = document.querySelector('.close');
const cartIndicator = document.querySelector('.num-of-prd');
const minusIcon = document.querySelector('.minus');
const plusIcon = document.querySelector('.plus');
const display = document.querySelector('.icon-p');
const cartIcon = document.querySelector('.cart');
const cartContent = document.querySelector('.cart-empty');
const cartContentFull = document.querySelector('.cart-full');
const selectedItems = document.querySelector('.cart-dropdown-content');
const price = document.querySelector('.prices')
const addToCart = document.querySelector('.cart-icon');
const photoFrame = document.querySelector('.display-photos');
const smallPhotos = document.querySelectorAll('.photo');
const moveRight = document.querySelector('.greater-than');
const moveLeft = document.querySelector('.lesser-than');
const bigphotos = document.querySelectorAll('.big-photo');
const amount = document.querySelector('.amount');
const amountCalculation = document.querySelector('.sum');
const deleteIcon = document.querySelector('.delete-icon');
const checkOut = document.querySelector('.check-out');

// function declarations

function add(){
    cartIndicator.style.display ='block';
    cartIndicator.innerText = display.innerText;
    const shoePrice = 125.00;
    const totalAmount = shoePrice * Number(cartIndicator.innerText);

    amountCalculation.innerHTML =`$${shoePrice} x ${cartIndicator.innerText}`;
    amount.innerHTML = `$${totalAmount}`;

    if(cartIndicator.innerText == 0){
        cartContentFull.style.top = '-50vh';
        cartContent.style.top = '12vh';
    }else{
        cartContent.style.top = '-50vh';
        cartContentFull.style.top = '12vh';
    }
};

function open(){
    if(cartIndicator.innerText === '0'){
        cartContent.classList.toggle('hidden3');
    }else{
        cartContentFull.classList.toggle('cart-full');
    }
};

// dropdown menu

menu.addEventListener('click', () =>{
    dropDown.classList.toggle('hidden2');
});

closeMenu.addEventListener('click', () => {
    dropDown.classList.toggle('hidden2');
});

// Dropdown Cart

cartIcon.addEventListener('click', () =>{
    open();
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
    
add();

scrollTo(top);
});

// Displaying different photos of the sneakers

smallPhotos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            photoFrame.style.transform =`translatex(${-28 * index}vw)`;
        });
    });

// Switching photos in mobile view

let x = 0;

moveRight.addEventListener('click', () => {
    x++;
    if(x < 4){
        photoFrame.style.transform = `translatex(${-100 * x}vw)`;
    }
});

moveLeft.addEventListener('click', () => {
    x--;
    if(x = 4){
        x = 0;
        photoFrame.style.transform = `translatex(${100 * x}vw)`;
    }else{
       
        photoFrame.style.transform = `translatex(${100 * (x-1)}vw)`;
    };
        
});

// deleting items in the cart


deleteIcon.addEventListener('click', () => {

    display.innerText = '0';
    add();
    open();
});

// checking out items in the cart
// const popUp = document.querySelector('.pop-up');
checkOut.addEventListener('click', () => {
    
    display.innerText = '0';
    add();
    open();
    
    setTimeout(() =>{
        alert("Your order has been submitted");
    }, 1000);
    
});
