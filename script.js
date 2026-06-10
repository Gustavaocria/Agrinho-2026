/* ==========================
   PARTÍCULAS FUTURISTAS
========================== */

const particlesContainer = document.getElementById("particles");

for (let i = 0; i < 120; i++) {

    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.top = Math.random() * 100 + "vh";

    particle.style.width = Math.random() * 4 + 2 + "px";

    particle.style.height = particle.style.width;

    particle.style.animationDuration =
        Math.random() * 15 + 10 + "s";

    particle.style.opacity =
        Math.random();

    particlesContainer.appendChild(particle);
}

/* ==========================
   FAQ ACCORDION
========================== */

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        const panel =
        btn.nextElementSibling;

        if(panel.style.display === "block"){

            panel.style.display = "none";

        }else{

            panel.style.display = "block";

        }

    });

});

/* ==========================
   BOTÃO VOLTAR AO TOPO
========================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* ==========================
   MODO ESCURO / CLARO
========================== */

const themeBtn =
document.getElementById("toggleTheme");

let darkMode = true;

themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    if(darkMode){

        document.body.style.background =
        "#050816";

        document.body.style.color =
        "white";

        themeBtn.textContent = "🌙";

    }else{

        document.body.style.background =
        "#f5f5f5";

        document.body.style.color =
        "#111";

        themeBtn.textContent = "☀️";

    }

});

/* ==========================
   AUMENTAR FONTE
========================== */

let fontSize = 100;

document
.getElementById("increaseFont")
.addEventListener("click", () => {

    fontSize += 10;

    document.body.style.fontSize =
    fontSize + "%";

});

/* ==========================
   DIMINUIR FONTE
========================== */

document
.getElementById("decreaseFont")
.addEventListener("click", () => {

    if(fontSize > 70){

        fontSize -= 10;

        document.body.style.fontSize =
        fontSize + "%";

    }

});

/* ==========================
   LEITURA POR VOZ
========================== */

let speech = null;

const readBtn =
document.getElementById("readPage");

const stopBtn =
document.getElementById("stopReading");

readBtn.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const textoPrincipal =
    document.querySelector("main").innerText;

    speech =
    new SpeechSynthesisUtterance(
        textoPrincipal
    );

    speech.lang = "pt-BR";

    speech.rate = 1;

    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

});

stopBtn.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

/* ==========================
   FORMULÁRIO
========================== */

const form =
document.querySelector("form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert(
        "Inscrição enviada com sucesso!"
    );

    form.reset();

});

/* ==========================
   COMENTÁRIOS
========================== */

const commentBtn =
document.querySelector(
".comentarios button"
);

const commentBox =
document.querySelector(
".comentarios textarea"
);

commentBtn.addEventListener("click", () => {

    const texto =
    commentBox.value.trim();

    if(texto === ""){

        alert(
            "Digite um comentário."
        );

        return;
    }

    alert(
        "Comentário enviado!"
    );

    commentBox.value = "";

});

/* ==========================
   EFEITO DIGITAÇÃO
========================== */

const title =
document.querySelector(".hero h1");

const originalText =
title.innerHTML;

title.innerHTML = "";

let index = 0;

function typeWriter(){

    if(index < originalText.length){

        title.innerHTML +=
        originalText.charAt(index);

        index++;

        setTimeout(
            typeWriter,
            40
        );

    }

}

typeWriter();

/* ==========================
   REVELAR AO ROLAR
========================== */

const revealElements =
document.querySelectorAll(
".card, .glass, .dashboard-card, .timeline-item, .gallery img"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
threshold:0.15
});

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(40px)";

    el.style.transition =
    "all .8s ease";

    observer.observe(el);

});

/* ==========================
   CONTADORES ANIMADOS
========================== */

const dashboardNumbers =
document.querySelectorAll(
".dashboard-card h1"
);

dashboardNumbers.forEach(counter => {

    const valor =
    parseInt(counter.innerText);

    if(isNaN(valor)) return;

    let atual = 0;

    const intervalo =
    setInterval(() => {

        atual++;

        counter.innerText =
        atual + "%";

        if(atual >= valor){

            clearInterval(intervalo);

        }

    },20);

});

/* ==========================
   EFEITO MENU
========================== */

window.addEventListener("scroll", () => {

    const header =
    document.querySelector(".header");

    if(window.scrollY > 100){

        header.style.background =
        "rgba(0,0,0,.65)";

    }else{

        header.style.background =
        "rgba(0,0,0,.15)";

    }

});

/* ==========================
   CONSOLE
========================== */

console.log(
"🌱 Agro Forte Futuro Sustentável carregado com sucesso!"
);
