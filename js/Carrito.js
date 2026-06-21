////////////////////////////////////////////
///////////  ESTE ARCHIVO MANEJA MI VISTA DEL CARRITO DE COMPRAS
// Mostrar los productos guardados     
    function renderCart() {
      const container = document.getElementById("cart-items");
      const totalSpan = document.getElementById("total");
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      container.innerHTML = "";

      if (cart.length === 0) {
        container.innerHTML = "<p>🛍️ Tu carrito está vacío.</p>";
        totalSpan.textContent = "$0 MXN";
        return;
      }
      let total = 0;
      cart.forEach((p, index) => {
        total += p.price * p.quantity;
        const item = document.createElement("div");
        item.classList.add("cart-item");
        item.innerHTML = `
          <img src="${p.image}" width="80">
          <div class="cart-info">
            <h4>${p.name}</h4>
            <p>${p.description}</p>
            <span>$${p.price} MXN x ${p.quantity} = $${p.price * p.quantity} MXN</span>
          </div>
          <div class="quantity-buttons">
            <button onclick="cambiarCantidad(${index}, -1)">−</button>
            <button onclick="cambiarCantidad(${index}, 1)">+</button>
          </div>
            <button class="removeItem-btn" onclick="removeItem(${index})">🗑️</button>
        `;
        container.appendChild(item);
      });
      totalSpan.textContent = `$${total.toFixed(2)} MXN`;
    }

    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }

    function clearCart() {
      localStorage.removeItem("cart");
      renderCart();
    }

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Si el carrito está vacío
  if (cart.length === 0) {
    alert("⚠️ Tu carrito está vacío. Agrega productos antes de confirmar la compra.");
    return; // Detiene la función
  }
  // Si el carrito tiene productos
  alert("✅ Tu pedido ha sido confirmado. Gracias por tu compra!");
  localStorage.removeItem("cart");
  renderCart();
}

function goToPayment() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("⚠️ Tu carrito está vacío");
    return;
  }

  // ✅ NUEVO ALERTA: VER DATOS QUE SE ENVIARÁN
  let message = "🧾 DATOS ENVIADOS A PAGOS:\n\n";
  cart.forEach((p, i) => {
    message += `${i + 1}. ${p.name}\n   Precio: $${p.price}\n   Cantidad: ${p.quantity}\n\n`;
  });

  alert(message);
  // Guardamos temporalmente el carrito para la página de pago
  localStorage.setItem("checkout_cart", JSON.stringify(cart));

  window.location.href = "pagos.html";
}

    // Cargar el carrito al abrir la página
    renderCart();

    function cambiarCantidad(index, amount) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].quantity += amount;

  // Evita cantidades menores a 1
  if (cart[index].quantity < 1) {
    cart[index].quantity = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  renderCart(); // 💛 IMPORTANTE: vuelve a dibujar
}