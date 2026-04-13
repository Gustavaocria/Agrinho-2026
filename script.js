function login() {
  let user = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "index.html";
  } else {
    document.getElementById("erro").innerText = "Login inválido!";
  }
}

function enviarMensagem(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Mensagem enviada com sucesso!";
}
