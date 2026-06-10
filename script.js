/* =========================
   ACCORDION
========================= */

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

/* =========================
   MODO ESCURO
========================= */

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleTheme.textContent = "☀️";
  } else {
    toggleTheme.textContent = "🌙";
  }
});

/* =========================
   TAMANHO DA FONTE
========================= */

let fontSize = 100;

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

increaseFont.addEventListener("click", () => {
  fontSize += 10;
  document.body.style.fontSize = fontSize + "%";
});

decreaseFont.addEventListener("click", () => {
  if (fontSize > 70) {
    fontSize -= 10;
    document.body.style.fontSize = fontSize + "%";
  }
});

/* =========================
   LEITURA POR VOZ
========================= */

let speech = null;

const readBtn = document.getElementById("readPage");
const stopBtn = document.getElementById("stopReading");

readBtn.addEventListener("click", () => {

  const content =
    document.querySelector("main")?.innerText ||
    document.body.innerText;

  speech = new SpeechSynthesisUtterance(content);

  speech.lang = "pt-BR";
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
});

stopBtn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});

/* =========================
   BOTÃO TOPO
========================= */

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   MOSTRAR/ESCONDER BOTÃO
========================= */

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.style.display = "none";

/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll(
  ".stat-card, .benefit-card, .content-card, .image-card, .form-box"
).forEach((el) => {

  el.classList.add("hidden");
  observer.observe(el);

});

/* =========================
   FORMULÁRIO
========================= */

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
      "Inscrição enviada com sucesso!"
    );

    form.reset();

  });

}

/* =========================
   COMENTÁRIOS
========================= */

const commentButton =
  document.querySelector(".comment-box button");

const commentArea =
  document.querySelector(".comment-box textarea");

if (commentButton) {

  commentButton.addEventListener("click", () => {

    const texto =
      commentArea.value.trim();

    if (texto === "") {

      alert(
        "Digite um comentário."
      );

      return;
    }

    alert(
      "Comentário enviado!"
    );

    commentArea.value = "";

  });

}

/* =========================
   EFEITO DIGITAÇÃO HERO
========================= */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

const textoOriginal =
heroTitle.textContent;

heroTitle.textContent = "";

let i = 0;

function digitar(){

if(i < textoOriginal.length){

heroTitle.textContent +=
textoOriginal.charAt(i);

i++;

setTimeout(
digitar,
60
);

}

}

digitar();

}
