function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function addToCart(id, name, price) {
  const cart = getCart();
  const item = cart.find((item) => item.id === id);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = count;
}
