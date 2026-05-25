// GRÁFICO
const ctx = document.getElementById('chart');

new Chart(ctx, {
type: 'bar',
data: {
labels: ['Soja', 'Milho', 'Café', 'Trigo'],
datasets: [{
label: 'Produção',
data: [80, 65, 50, 40],
backgroundColor: '#2d6a4f'
}]
}
});

// MAPA
function regionInfo(name){
alert("Região selecionada: " + name);
}

// MODAL
function openService(name){
document.getElementById("modal").style.display = "flex";
document.getElementById("modalTitle").innerText = name;
}

function closeModal(){
document.getElementById("modal").style.display = "none";
}

// BUSCA
document.getElementById("filter").addEventListener("input", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".news").forEach(item => {

item.style.display = item.innerText.toLowerCase().includes(value)
? "block"
: "none";

});

});

// LEITURA DE VOZ
function readPage(){
const text = document.body.innerText;
const speech = new SpeechSynthesisUtterance(text);
speech.lang = "pt-BR";
window.speechSynthesis.speak(speech);
}
