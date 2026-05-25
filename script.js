const sidebar = document.getElementById("sidebar");

document.getElementById("toggleSidebar")
.addEventListener("click",()=>{

sidebar.classList.toggle("hidden");

});

/* FONTE */
let font = 16;

document.getElementById("fontUp")
.addEventListener("click",()=>{

font++;

document.documentElement.style.setProperty("--font", font + "px");

});

document.getElementById("fontDown")
.addEventListener("click",()=>{

font = Math.max(12, font-1);

document.documentElement.style.setProperty("--font", font + "px");

});

/* TEMA */
document.getElementById("theme")
.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

/* LEITURA */
document.getElementById("read")
.addEventListener("click",()=>{

const text = document.body.innerText;

const speech = new SpeechSynthesisUtterance(text);
speech.lang = "pt-BR";

window.speechSynthesis.speak(speech);

});

document.getElementById("stop")
.addEventListener("click",()=>{

window.speechSynthesis.cancel();

});

/* COMENTÁRIOS */
document.getElementById("enviar")
.addEventListener("click",()=>{

const input = document.getElementById("comentario");
const list = document.getElementById("listaComentarios");

if(input.value.trim() === "") return;

const div = document.createElement("div");
div.classList.add("comentario");
div.textContent = input.value;

list.prepend(div);

input.value = "";

});
