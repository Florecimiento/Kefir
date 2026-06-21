function enviarMensaje(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;

  const texto = `
Hola, soy ${nombre}.
📧 ${email}
📱 ${telefono}

Mensaje:
${mensaje}
`;

  // Tu número de WhatsApp (cámbialo)
  const numero = "52229XXXXXXX";

  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, "_blank");

  document.querySelector(".contact-form").reset();
}
