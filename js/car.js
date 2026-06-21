// Cambiar cantidad en los productos del submenú
function changeQuantity(button, amount) {
  let span = button.parentElement.querySelector("span");
  let qty = parseInt(span.textContent) + amount;

  if (qty < 1) qty = 1;

  span.textContent = qty;
}

// Agregar al carrito desde los botones
function addToCartFromButton(btn) {
  const name = btn.dataset.name;
  const price = parseFloat(btn.dataset.price);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  const image = btn.dataset.image;
  const description = btn.dataset.description;

  const quantity = parseInt(
    btn.parentElement.querySelector(".quantity-controls span").textContent
  );

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      name,
      price,
      quantity,
      image,
      description   // 💛 ESTA CLAVE ES IMPORTANTE
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${quantity} × ${name} agregado(s) al carrito 🛒`);

  window.location.href = "carrito.html";
}

// Ir al carrito (botón superior)
function goToCart() {
  window.location.href = "carrito.html";
}

function updateTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  document.getElementById("total").textContent = `$${total} MXN`;

  // 🔥 IMPORTANTE: Guardar el total para pagos.html
  localStorage.setItem("totalCompra", total);
}

