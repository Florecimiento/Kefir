function guardarConfiguracion() {
  const config = {
    tema: document.getElementById('tema').value,
    color: document.getElementById('colorPrimario').value,
    estiloTarjetas: document.getElementById('estiloTarjetas').value,
    tamanoLetra: document.getElementById('tamanoLetra').value
  };

  localStorage.setItem("configUsuario", JSON.stringify(config));
  aplicarConfiguracion();
}

function aplicarConfiguracion() {
  const config = JSON.parse(localStorage.getItem("configUsuario"));
  if (!config) return;

  // Tema
  document.body.classList.remove("tema-claro", "tema-oscuro");
  document.body.classList.add("tema-" + config.tema);

  // Color primario
  document.documentElement.style.setProperty("--color-primario", config.color);

  // Tamaño de letra global
  document.documentElement.style.fontSize = config.tamanoLetra + "px";

  // Estilo de tarjetas
  document.querySelectorAll(".tarjeta").forEach(card => {
    card.classList.remove("moderno", "neumorfico", "clasico");
    card.classList.add(config.estiloTarjetas);
  });
}

// Ejecutar al cargar
aplicarConfiguracion();
