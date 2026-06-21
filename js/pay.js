function goToPayment() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("⚠️ Tu carrito está vacío");
    return;
  }

  // Guardamos temporalmente el carrito para la página de pago
  localStorage.setItem("checkout_cart", JSON.stringify(cart));

  window.location.href = "pagos.html";
}
