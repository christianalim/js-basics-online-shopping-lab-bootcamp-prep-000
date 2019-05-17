var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 function getRandInt(max, min){
   return Math.floor(Math.random() * (max - min)) + min;
 }
 var newObject = {
   "itemName": item,
   "itemPrice": getRandInt(100, 1)
 };
 cart.push(newObject);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here cart[i].itemName and cart[i].itemPrice
  if(cart.length === 0){
    return ("Your shopping cart is empty.");
  } else if(cart.length > 1) {
  var cartItems = []
  for(let i = 0; i < cart.length; i++){
    var item = Object.values(cart[i])[0];
    var price = cart[i][Object.keys(cart[i])[1]];
    cartItems.push(item + " at $" + price);
    }
  } else if(cart.length === 1){

  }
  var caseover1 = `In your cart, you have ${cartItems.join(", ")}, and ${Object.values(cart[cart.length - 1])[0]} at $${cart[cart.length - 1][Object.keys(cart[cart.length -1])[1]]}.`;
  return caseover1

}


function total() {
  // write your code here
  let x = 0
  var prices = [];
  var total = 0;
  while( x < cart.length){
    prices.push(cart[x][Object.keys(cart[x])[1]])
    x++;
  }
  for(var a in prices){
    total += prices[a];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
