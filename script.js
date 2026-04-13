"}
function mostrarInfo() {
  let info = document.getElementById("info");

  if (info.style.display === "block") {
    info.style.display = "none";
  } else {
    info.style.display = "block";
  }
}

function enviarMensagem(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Mensagem enviada com sucesso!";
