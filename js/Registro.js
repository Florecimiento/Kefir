///////////////////////////////////////////
// FRONT – Registro de Usuario con ROL
///////////////////////////////////////////

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // 🔹 Obtener rol seleccionado
  const rolSeleccionado = document.querySelector('input[name="rol"]:checked').value;

  // 🔹 Mapear rol a ObjectId
  let roleId = "";

  if (rolSeleccionado === "superadmin") {
    roleId = "692917eaafe24a0ca883efb7";
  } else {
    roleId = "692917eaafe24a0ca883efb9"; // cliente
  }

  const data = {
    nombre: document.getElementById("username").value.trim(),
    correo: document.getElementById("email").value.trim().toLowerCase(),
    telefono: document.getElementById("phone").value.trim(),
    contrasena: document.getElementById("password").value,
    roleId: roleId   // 👈 AQUÍ SE ENVÍA EL ROL
  };

  try {
    const response = await fetch("http://localhost:3000/api/registro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      alert("❌ " + (result.error || "Error al registrar usuario"));
      return;
    }

    alert("✔ Usuario registrado correctamente");

    document.getElementById("registerForm").reset();

    setTimeout(() => {
      window.location.href = "login.html";
    }, 400);

  } catch (error) {
    alert("🔥 Error de conexión con el servidor");
    console.error("Error de conexión:", error);
  }
});