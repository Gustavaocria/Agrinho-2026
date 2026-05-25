let font = 16;
let speech;

function fontUp(){
font = Math.min(24, font + 1);
document.body.style.fontSize = font + "px";
}

function fontDown(){
font = Math.max(12, font - 1);
document.body.style.fontSize = font + "px";
}

function toggleTheme(){
document.body.classList.toggle("dark");
}

function readAll(){
window.speechSynthesis.cancel();

speech = new SpeechSynthesisUtterance(document.body.innerText);
speech.lang = "pt-BR";
speech.rate = 1;

window.speechSynthesis.speak(speech);
}

function stopRead(){
window.speechSynthesis.cancel();
}

function region(name){

const data = {
"Norte":"Região agrícola em expansão tecnológica.",
"Oeste":"Cooperativas fortes e exportação.",
"Sul":"Agricultura familiar sustentável.",
"Centro":"Integração entre tecnologia e produção."
};

document.getElementById("mapInfo").innerHTML =
"<b>"+name+"</b><br>"+data[name];
}

function addComment(){

const input = document.getElementById("commentInput");
const box = document.getElementById("comments");

if(!input.value.trim()) return;

const div = document.createElement("div");
div.className = "card";

div.innerHTML = input.value;

box.prepend(div);

input.value = "";
}
