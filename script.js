let fontSize = 16;
let speechInstance = null;
let isReading = false;

function setFont(size){
fontSize = Math.max(12, Math.min(22, size));
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

function readAll(){

if(isReading){
window.speechSynthesis.cancel();
}

const text = document.body.innerText;

speechInstance = new SpeechSynthesisUtterance(text);
speechInstance.lang = "pt-BR";
speechInstance.rate = 1;
speechInstance.pitch = 1;

speechInstance.onend = () => {
isReading = false;
};

window.speechSynthesis.speak(speechInstance);

isReading = true;
}

function stopRead(){
window.speechSynthesis.cancel();
isReading = false;
}

function region(name){

const box = document.getElementById("regionInfo");

const data = {
"Norte":"Região forte em grãos e tecnologia agrícola.",
"Oeste":"Alta produção de soja e cooperativas.",
"Sul":"Diversificação agrícola e agricultura familiar.",
"Centro":"Equilíbrio entre produção e inovação."
};

box.innerHTML = `
<strong>${name}</strong><br>
${data[name] || "Dados não disponíveis."}
`;
}

function addComment(){

const input = document.getElementById("comment");
const container = document.getElementById("comments");

const text = input.value.trim();

if(text === "") return;

const now = new Date();

const time = now.toLocaleString("pt-BR", {
dateStyle:"short",
timeStyle:"short"
});

const div = document.createElement("div");
div.classList.add("card");

div.innerHTML = `
<p>${text}</p>
<small style="opacity:.6">${time}</small>
`;

container.prepend(div);

input.value = "";
}

let searchTimeout;

const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("input", (e)=>{

clearTimeout(searchTimeout);

searchTimeout = setTimeout(()=>{

const value = e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display =
text.includes(value) ? "block" : "none";

});

}, 250);

});

}

function initCharts(){

const ctx1 = document.getElementById("chart1");
const ctx2 = document.getElementById("chart2");

if(!ctx1 || !ctx2) return;

new Chart(ctx1, {
type:"bar",
data:{
labels:["Soja","Milho","Trigo"],
datasets:[{
label:"Produção (mil toneladas)",
data:[90,70,50],
backgroundColor:"#1e7a4c"
}]
},
options:{
responsive:true
}
});

new Chart(ctx2, {
type:"line",
data:{
labels:["2021","2022","2023","2024"],
datasets:[{
label:"Crescimento (%)",
data:[40,55,70,85],
borderColor:"#1e7a4c",
tension:0.3
}]
},
options:{
responsive:true
}
});

}

initCharts();

document.addEventListener("keydown", (e)=>{

if(e.key === "Escape"){
window.speechSynthesis.cancel();
isReading = false;
}

});
