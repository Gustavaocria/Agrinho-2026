const commentInput = document.getElementById("comentario");
const commentList = document.getElementById("listaComentarios");

function addComment(){

const value = commentInput.value.trim();

if(!value){
alert("Digite um comentário.");
return;
}

const item = document.createElement("div");
item.className = "card";

item.innerHTML = `
<p>${escapeHtml(value)}</p>
<small>${new Date().toLocaleString("pt-BR")}</small>
`;

commentList.prepend(item);

saveComment(value);

commentInput.value = "";
}

function escapeHtml(text){
return text
.replaceAll("&","&amp;")
.replaceAll("<","&lt;")
.replaceAll(">","&gt;");
}

/* ===== LOCAL STORAGE (parece sistema real) ===== */

function saveComment(text){
let data = JSON.parse(localStorage.getItem("comments") || "[]");
data.unshift({
text,
date:new Date().toISOString()
});
localStorage.setItem("comments", JSON.stringify(data));
}

function loadComments(){
let data = JSON.parse(localStorage.getItem("comments") || "[]");

data.forEach(c=>{
const item = document.createElement("div");
item.className = "card";

item.innerHTML = `
<p>${escapeHtml(c.text)}</p>
<small>${new Date(c.date).toLocaleString("pt-BR")}</small>
`;

commentList.appendChild(item);
});
}

loadComments();

/* ===== ACESSIBILIDADE ===== */

let font = 16;

function setFont(v){
font = Math.max(12, Math.min(24, v));
document.documentElement.style.fontSize = font + "px";
}

function fontUp(){ setFont(font + 1); }
function fontDown(){ setFont(font - 1); }

/* ===== TEMA ===== */

function toggleTheme(){
document.body.classList.toggle("dark");
}

/* ===== LEITURA ===== */

let speech;

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

/* ===== MICRO INTERAÇÃO ===== */

document.addEventListener("keydown", (e)=>{
if(e.key === "Escape"){
stopRead();
}
});
