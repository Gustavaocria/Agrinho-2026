"}
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "admin" && p === "1234") {
    window.location.href = "index.html";
  } else {
    document.getElementById("erro").innerText = "Login incorreto!";
  }
}

function calcularImpacto() {
  let agua = document.getElementById("agua").value;
  let energia = document.getElementById("energia").value;
  let lixo = document.getElementById("lixo").value;

  let impacto = (agua0.3)+(energia0.5)+(lixo*2);

  let barra = document.getElementById("nivel");
  let resultado = document.getElementById("resultado");

  if (impacto > 100) impacto = 100;

  barra.style.width = impacto + "%";

  if (impacto < 50) {
    resultado.innerText = "🌱 Impacto baixo!";
    barra.style.background = "green";
  } else if (impacto < 100) {
    resultado.innerText = "⚠️ Impacto médio!";
    barra.style.background = "orange";
  } else {
    resultado.innerText = "🚨 Impacto alto!";
    barra.style.background = "red";
  }
}

function enviarMensagem(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Mensagem enviada com sucesso!"
