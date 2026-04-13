"}
function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if (u === "admin" && p === "1234") {
    document.getElementById("login").style.display = "none";
    document.getElementById("site").classList.remove("hidden");
  } else {
    document.getElementById("erro").innerText = "Login incorreto!";
  }
}

function dark() {
  document.body.classList.toggle("dark");
}

function calc() {
  let a = document.getElementById("agua").value;
  let e = document.getElementById("energia").value;
  let l = document.getElementById("lixo").value;

  let r = (a0.3)+(e0.5)+(l*2);

  let barra = document.getElementById("nivel");
  let res = document.getElementById("res");

  if (r > 100) r = 100;

  barra.style.width = r + "%";

  if (r < 50) {
    res.innerText = "🌱 Impacto baixo!";
    barra.style.background = "green";
  } else if (r < 100) {
    res.innerText = "⚠️ Impacto médio!";
    barra.style.background = "orange";
  } else {
    res.innerText = "🚨 Impacto alto!";
    barra.style.background = "red";
  }
}

function msg(e) {
  e.preventDefault();
  document.getElementById("ok").innerText = "Mensagem enviada com sucesso!
