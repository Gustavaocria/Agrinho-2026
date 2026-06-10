// ======================
// ACCORDION
// ======================

document.querySelectorAll(".accordion button").forEach(btn => {

    btn.addEventListener("click", () => {

        const conteudo = btn.nextElementSibling;

        if (conteudo.style.display === "block") {

            conteudo.style.display = "none";

        } else {

            conteudo.style.display = "block";

        }

    });

});

// ======================
// TAMANHO DA FONTE
// ======================

let tamanhoFonte = 16;

const maisFonte = document.getElementById("maisFonte");
const menosFonte = document.getElementById("menosFonte");

maisFonte.addEventListener("click", () => {

    tamanhoFonte++;

    document.body.style.fontSize =
    tamanhoFonte + "px";

});

menosFonte.addEventListener("click", () => {

    if (tamanhoFonte > 12) {

        tamanhoFonte--;

        document.body.style.fontSize =
        tamanhoFonte + "px";

    }

});

// ======================
// MODO ESCURO
// ======================

const tema =
document.getElementById("tema");

tema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

// ======================
// LEITURA POR VOZ
// ======================

const ler =
document.getElementById("ler");

const parar =
document.getElementById("parar");

ler.addEventListener("click", () => {

    speechSynthesis.cancel();

    const texto =
    document.getElementById("main-content")
    .innerText;

    const fala =
    new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.rate = 1;

    fala.pitch = 1;

    speechSynthesis.speak(fala);

});

parar.addEventListener("click", () => {

    speechSynthesis.cancel();

});

// ======================
// COMENTÁRIOS
// ======================

const comentario =
document.getElementById("comentario");

const enviarComentario =
document.getElementById("enviarComentario");

const listaComentarios =
document.getElementById("listaComentarios");

enviarComentario.addEventListener("click", () => {

    const texto =
    comentario.value.trim();

    if (texto === "") return;

    const novoComentario =
    document.createElement("div");

    novoComentario.style.background =
    "#f5f5f5";

    novoComentario.style.padding =
    "12px";

    novoComentario.style.marginTop =
    "10px";

    novoComentario.style.borderRadius =
    "12px";

    novoComentario.style.borderLeft =
    "4px solid #1f9b4c";

    novoComentario.textContent =
    texto;

    listaComentarios.prepend(
    novoComentario
    );

    comentario.value = "";

});

// ======================
// ANIMAÇÃO AO ROLAR
// ======================

const cards =
document.querySelectorAll(
".card, .stat"
);

const observar =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity =
            "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    "all 0.8s ease";

    observar.observe(card);

});
