/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');

table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


function clearCart() {
  console.log('here');
  let tbodyElem=document.getElementsByTagName("tbody")[0];
  console.log(tbodyElem);
  while (tbodyElem.firstChild) {
    tbodyElem.removeChild(tbodyElem.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    let tbodyElem=document.getElementsByTagName("tbody")[0];
    for(let i=0; i<cart.items.length; i++){
      let tableRow=document.createElement("tr"); 
      let firstdata=document.createElement("td");
      let seconddata=document.createElement("td");
      let thirddata=document.createElement("td");
      let deleteButton=document.createElement("button");
      deleteButton.setAttribute('id', i);

      tbodyElem.appendChild(tableRow).setAttribute('id', i);
      tableRow.appendChild(firstdata).appendChild(deleteButton).textContent="X";
      tableRow.appendChild(seconddata).textContent=cart.items[i].quantity;
      tableRow.appendChild(thirddata).textContent=cart.items[i].product;
    } 
    let tableRow=document.createElement("tr"); 
    let firstdata=document.createElement("td");
    let seconddata=document.createElement("td");
    let thirddata=document.createElement("td");
    
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  if(event.target.id){
    cart.removeItem(event.target.id);
    cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
