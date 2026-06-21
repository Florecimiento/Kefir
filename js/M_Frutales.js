    function changeQuantity(button, delta) {
      const span = button.parentElement.querySelector('span');
      let quantity = parseInt(span.textContent);
      quantity = Math.max(1, quantity + delta);
      span.textContent = quantity;
    }

    function addToCart(name, price) {
      alert(`${name} agregado al carrito por $${price} MXN`);
    }

    function goToCart() {
      alert("Ir al carrito (en desarrollo)");
      // Aquí puedes redirigir a tu página del carrito, por ejemplo:
      // window.location.href = "carrito.html";
    }