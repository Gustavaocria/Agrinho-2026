let fontSize = 16;
let speech;

function setFont(size){
fontSize = Math.max(12, Math.min(24, size));
document.body.style.fontSize = fontSize + "px";
}

function fontUp(){
setFont(fontSize + 1);
}

function fontDown(){
setFont(fontSize - 1);
}

function toggleTheme(){
document.body.classList.toggle("dark");
}

/* 🔊 LEITURA POR VOZ */
function readAll(){
window.speechSynthesis.cancel();

speech = new SpeechSynthesisUtterance(
document.body.innerText
);

speech.lang = "pt-BR";
speech.rate = 1;

window.speechSynthesis.speak(speech);
}

function stopRead(){
window.speechSynthesis.cancel();
}

/* 🗺️ MAPA INTERATIVO */
function region(name){

const data = {
"Norte":"Região com forte expansão agrícola e tecnologia crescente.",
"Oeste":"Alta produção e cooperativas fortes no agronegócio.",
"Sul":"Agricultura diversificada e sustentável.",
"Centro":"Integração entre tecnologia e produção rural."
};

document.getElementById("mapInfo").innerHTML =
"<strong>" + name + "</strong><br>" + data[name];
}

/* 💬 COMENTÁRIOS */
function addComment(){

const input = document.getElementById("commentInput");
const container = document.getElementById("comments");

if(!input.value.trim()) return;

const div = document.createElement("div");
div.className = "card";

div.innerHTML =
input.value + "<br><small>" +
new Date().toLocaleString("pt-BR") +
"</small>";

container.prepend(div);

input.value = "";
}
