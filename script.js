/* =========================
SIDEBAR
========================= */

const sidebar =
document.getElementById("sidebar");

const sidebarToggle =
document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {

  sidebar.classList.toggle("hidden");

});

/* =========================
ACCORDION
========================= */

const accordionHeaders =
document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

  header.addEventListener("click", () => {

    const content =
    header.nextElementSibling;

    const icon =
    header.querySelector("span");

    if(content.style.maxHeight){

      content.style.maxHeight = null;
      icon.textContent = "+";

    } else {

      content.style.maxHeight =
      content.scrollHeight + "px";

      icon.textContent = "−";
    }

  });

});

/* =========================
FORMULÁRIO
========================= */

const form =
document.getElementById("seminarioForm");

const formMessage =
document.getElementById("formMessage");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  formMessage.innerHTML = `
    <p style="
      margin-top:20px;
      color:#00ff9d;
      font-weight:700;
    ">
      Inscrição realizada com sucesso!
    </p>
  `;

  form.reset();

});

/* =========================
COMENTÁRIOS
========================= */

const commentBtn =
document.getElementById("commentBtn");

const commentInput =
document.getElementById("commentInput");

const commentsList =
document.getElementById("commentsList");

commentBtn.addEventListener("click", () => {

  const text =
  commentInput.value.trim();

  if(text === ""){

    alert("Digite um comentário.");
    return;
  }

  const comment =
  document.createElement("div");

  comment.classList.add("comment");

  comment.innerHTML = `
    <p>${text}</p>
  `;

  commentsList.prepend(comment);

  commentInput.value = "";

});

/* =========================
FONTE
========================= */

const increaseBtn =
document.getElementById("increase-font");

const decreaseBtn =
document.getElementById("decrease-font");

let currentFontSize = 16;

increaseBtn.addEventListener("click", () => {

  currentFontSize += 1;

  document.documentElement
  .style
  .setProperty(
    "--font-size",
    currentFontSize + "px"
  );

});

decreaseBtn.addEventListener("click", () => {

  currentFontSize -= 1;

  if(currentFontSize < 12){
    currentFontSize = 12;
  }

  document.documentElement
  .style
  .setProperty(
    "--font-size",
    currentFontSize + "px"
  );

});

/* =========================
MODO CLARO / ESCURO
========================= */

const toggleTheme =
document.getElementById("toggle-theme");

toggleTheme.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

});

/* =========================
LEITURA POR VOZ
========================= */

const startReading =
document.getElementById("start-reading");

const stopReading =
document.getElementById("stop-reading");

let speech = null;

startReading.addEventListener("click", () => {

  window.speechSynthesis.cancel();

  const content =
  document.getElementById("main-content")
  .innerText;

  speech =
  new SpeechSynthesisUtterance(content);

  speech.lang = "pt-BR";

  speech.rate = 1;

  speech.pitch = 1;

  window.speechSynthesis.speak(speech);

});

stopReading.addEventListener("click", () => {

  window.speechSynthesis.cancel();

});
