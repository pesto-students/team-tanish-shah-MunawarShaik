// Maps and sets
let productViews = new WeakMap();
let cartItems = new Set();

function incrementProductViews(productId) {
  const productKey = { id: productId };

  if (productViews.has(productKey)) {
    const viewCount = productViews.get(productKey);
    productViews.set(productKey, viewCount + 1);
  } else {
    productViews.set(productKey, 1);
  }
}

function addToCart(productId) {
  const productKey = { id: productId };
  const keyString = JSON.stringify(productKey);

  if (cartItems.has(keyString)) {
    return "Product already in cart";
  } else {
    cartItems.add(keyString);
    return "Product added to cart";
  }
}

// Example usage
incrementProductViews(123); // Product ID 123 is viewed for the first time
incrementProductViews(123); // Product ID 123 is viewed for the second time

console.log(addToCart(123)); // "Product added to cart"
console.log(addToCart(123)); // "Product already in cart"
console.log(productViews);
