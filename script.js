const sidebar =
document.getElementById("sidebar");

const toggleSidebar =
document.getElementById("toggle");

const fontUp =
document.getElementById("fontUp");

const fontDown =
document.getElementById("fontDown");

const themeBtn =
document.getElementById("theme");

const readBtn =
document.getElementById("read");

const stopBtn =
document.getElementById("stop");

const sendBtn =
document.getElementById("send");

const input =
document.getElementById("input");

const list =
document.getElementById("list");

let fontSize = 16;

let speech =
null;

/* SIDEBAR */
toggleSidebar.addEventListener("click",()=>{

sidebar.classList.toggle("hidden");

});

/* FONTE */
fontUp.addEventListener("click",()=>{

fontSize++;

document.documentElement.style.setProperty(
"--font-size",
fontSize + "px"
);

});

fontDown.addEventListener("click",()=>{

fontSize = Math.max(12,fontSize-1);

document.documentElement.style.setProperty(
"--font-size",
fontSize + "px"
);

});

/* TEMA */
themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

/* LEITURA POR VOZ */
readBtn.addEventListener("click",()=>{

window.speechSynthesis.cancel();

const text =
document.body.innerText;

speech =
new SpeechSynthesisUtterance(text);

speech.lang = "pt-BR";
speech.rate = 1;

window.speechSynthesis.speak(speech);

});

stopBtn.addEventListener("click",()=>{

window.speechSynthesis.cancel();

});

/* COMENTÁRIOS */
sendBtn.addEventListener("click",()=>{

const value =
input.value.trim();

if(value==="")return;

const div =
document.createElement("div");

div.classList.add("comment");

div.textContent = value;

list.prepend(div);

input.value="";

});

/* ENTER no comentário */
input.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

e.preventDefault();

sendBtn.click();

}

});

/* salvar tema simples */
window.addEventListener("load",()=>{

const saved =
localStorage.getItem("theme");

if(saved==="dark"){

document.body.classList.add("dark");

}

});

/* persistência simples */
themeBtn.addEventListener("click",()=>{

const isDark =
document.body.classList.contains("dark");

localStorage.setItem(
"theme",
isDark ? "dark" : "light"
);

});
