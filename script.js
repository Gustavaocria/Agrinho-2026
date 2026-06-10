document.querySelectorAll(".accordion button").forEach(btn => {
    btn.addEventListener("click", () => {
        const c = btn.nextElementSibling;
        c.style.display = c.style.display === "block" ? "none" : "block";
    });
});

let fonte = 16;

maisFonte.addEventListener("click", () => {
    document.body.style.fontSize = (++fonte) + "px";
});

menosFonte.addEventListener("click", () => {
    document.body.style.fontSize = (--fonte) + "px";
});

tema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

ler.addEventListener("click", () => {
    speechSynthesis.cancel();

    const texto = document.getElementById("main-content").innerText;

    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);
});

parar.addEventListener("click", () => {
    speechSynthesis.cancel();
});

const lista = document.getElementById("listaComentarios");

enviarComentario.addEventListener("click", () => {
    const txt = document.getElementById("comentario").value.trim();

    if (!txt) return;

    const p = document.createElement("p");
    p.textContent = txt;

    p.style.padding = "10px";
    p.style.marginTop = "10px";
    p.style.background = "#f0f0f0";
    p.style.borderRadius = "10px";

    lista.prepend(p);

    document.getElementById("comentario").value = "";
});
