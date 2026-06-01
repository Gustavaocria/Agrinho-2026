/* ===================================
   AGROFORTE FUTURO SUSTENTÁVEL 2026
=================================== */

/* ACCORDION */

const accordionHeaders =
document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const content =
        header.nextElementSibling;

        const aberto =
        content.style.display === "block";

        document
        .querySelectorAll(".accordion-content")
        .forEach(item => {

            item.style.display = "none";

        });

        if(!aberto){

            content.style.display = "block";

        }

    });

});

/* ===================================
   AUMENTAR E DIMINUIR FONTE
=================================== */

let tamanhoFonte = 16;

const increaseFont =
document.getElementById("increaseFont");

const decreaseFont =
document.getElementById("decreaseFont");

increaseFont.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.body.style.fontSize =
    tamanhoFonte + "px";

});

decreaseFont.addEventListener("click", () => {

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";

    }

});

/* ===================================
   MODO ESCURO / CLARO
=================================== */

const toggleTheme =
document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

/* ===================================
   LEITURA POR VOZ
=================================== */

const readButton =
document.getElementById("readPage");

const stopButton =
document.getElementById("stopReading");

let speech = null;

readButton.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const texto =
    document.getElementById("mainContent")
    .innerText;

    speech =
    new SpeechSynthesisUtterance(texto);

    speech.lang = "pt-BR";

    speech.rate = 1;

    speech.pitch = 1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

});

/* ===================================
   PARAR LEITURA
=================================== */

stopButton.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

/* ===================================
   FORMULÁRIO
=================================== */

const form =
document.querySelector(".registration-form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "✅ Inscrição realizada com sucesso no Seminário AgroForte 2026!"
    );

    form.reset();

});

/* ===================================
   EFEITO SUAVE AO ROLAR
=================================== */

const cards =
document.querySelectorAll(
".card, .stat-card, .timeline-item"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(40px)";

    card.style.transition =
    ".7s ease";

    observer.observe(card);

});
