function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");

  alert("Has cerrado sesión correctamente 🌿");

  window.location.href = "login.html";
}
