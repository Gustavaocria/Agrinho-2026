/* =====================================
   AGROFORTE FUTURO 2026
===================================== */

/* ACCORDION */

const accordionButtons =
document.querySelectorAll(".accordion-header");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        const isOpen =
        content.style.display === "block";

        document
        .querySelectorAll(".accordion-content")
        .forEach(item => {
            item.style.display = "none";
        });

        if (!isOpen) {
            content.style.display = "block";
        }

    });

});

/* =====================================
   AUMENTAR E DIMINUIR FONTE
===================================== */

let currentFontSize = 16;

const increaseFont =
document.getElementById("increaseFont");

const decreaseFont =
document.getElementById("decreaseFont");

increaseFont.addEventListener("click", () => {

    currentFontSize += 2;

    document.body.style.fontSize =
    currentFontSize + "px";

});

decreaseFont.addEventListener("click", () => {

    if(currentFontSize > 12){

        currentFontSize -= 2;

        document.body.style.fontSize =
        currentFontSize + "px";
    }

});

/* =====================================
   MODO ESCURO / CLARO
===================================== */

const themeButton =
document.getElementById("toggleTheme");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

});

/* =====================================
   LEITURA POR VOZ
===================================== */

const readButton =
document.getElementById("readPage");

const stopButton =
document.getElementById("stopReading");

let speech = null;

readButton.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const content =
    document.getElementById("mainContent");

    speech =
    new SpeechSynthesisUtterance(
        content.innerText
    );

    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

});

/* =====================================
   PARAR LEITURA
===================================== */

stopButton.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

/* =====================================
   FORMULÁRIO
===================================== */

const form =
document.querySelector(".registration-form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Inscrição realizada com sucesso!"
    );

    form.reset();

});
