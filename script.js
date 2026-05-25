const access = document.getElementById("access");

document.getElementById("toggleAccess").onclick = () => {
access.classList.toggle("hidden");
};

let font = 16;

document.getElementById("fontUp").onclick = () => {
font++;
document.documentElement.style.setProperty("--font", font + "px");
};

document.getElementById("fontDown").onclick = () => {
font = Math.max(12,font-1);
document.documentElement.style.setProperty("--font", font + "px");
};

document.getElementById("theme").onclick = () => {
document.body.classList.toggle("dark");
};

document.getElementById("read").onclick = () => {
const text = document.body.innerText;
const speech = new SpeechSynthesisUtterance(text);
speech.lang = "pt-BR";
window.speechSynthesis.speak(speech);
};

document.getElementById("stop").onclick = () => {
window.speechSynthesis.cancel();
};

document.getElementById("send").onclick = () => {
const input = document.getElementById("input");
const list = document.getElementById("list");

if(input.value.trim() === "") return;

const div = document.createElement("div");
div.className = "comment";
div.textContent = input.value;

list.prepend(div);

input.value = "";
};
