function addToCart(name, price, image, desc, buttonElement) {
  const quantity = parseInt(
    buttonElement.parentElement.querySelector(".quantity-controls span").textContent
  );

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity, image, desc });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} agregado al carrito 🛒`);
  window.location.href = "carrito.html";
}