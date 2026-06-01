window.addEventListener("load", () => {
document.querySelector(".loader").style.display = "none";
});

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
const scrollTop = window.scrollY;
const docHeight = document.body.scrollHeight - window.innerHeight;
const progress = (scrollTop / docHeight) * 100;
progressBar.style.width = progress + "%";

document.getElementById("backToTop").style.display =
scrollTop > 300 ? "block" : "none";
});

document.getElementById("backToTop").onclick = () => {
window.scrollTo({ top: 0, behavior: "smooth" });
};

const accessibilityPanel = document.querySelector(".accessibility-panel");

document.getElementById("toggleAccessibility").onclick = () => {
accessibilityPanel.classList.toggle("closed");
};

let fontSize = 16;

document.getElementById("increaseFont").onclick = () => {
fontSize += 2;
document.body.style.fontSize = fontSize + "px";
};

document.getElementById("decreaseFont").onclick = () => {
fontSize -= 2;
document.body.style.fontSize = fontSize + "px";
};

document.getElementById("toggleTheme").onclick = () => {
document.body.classList.toggle("light");
};

const counters = document.querySelectorAll(".counter");

const animateCounters = () => {
counters.forEach(counter => {
const update = () => {
const target = +counter.getAttribute("data-target");
const current = +counter.innerText;
const increment = target / 100;

if (current < target) {
counter.innerText = Math.ceil(current + increment);
setTimeout(update, 20);
} else {
counter.innerText = target;
}
};
update();
});
};

animateCounters();

document.querySelectorAll(".accordion-btn").forEach(btn => {
btn.onclick = () => {
const content = btn.nextElementSibling;
content.style.display =
content.style.display === "block" ? "none" : "block";
};
});

document.getElementById("calculateBtn").onclick = () => {
const area = +document.getElementById("areaInput").value;
const result = document.getElementById("simulationResult");

if (!area) {
result.innerText = "Digite uma área válida.";
return;
}

const production = area * 3.5;
result.innerText = `Produção estimada: ${production.toFixed(2)} toneladas`;
};

document.getElementById("registrationForm").onsubmit = (e) => {
e.preventDefault();
alert("Inscrição realizada com sucesso!");
e.target.reset();
};

document.getElementById("commentBtn").onclick = () => {
const input = document.getElementById("commentInput");
const container = document.getElementById("commentsContainer");

if (!input.value.trim()) return;

const div = document.createElement("div");
div.className = "comment";
div.innerText = input.value;

container.prepend(div);
input.value = "";
};

document.querySelectorAll(".assistant-options button").forEach(btn => {
btn.onclick = () => {
const response = document.getElementById("assistantResponse");

const map = {
"IA no Campo": "IA ajuda na previsão de safra e automação agrícola.",
"Drones": "Drones monitoram plantações em tempo real.",
"Sustentabilidade": "Redução de água e fertilizantes com IA.",
"Fertilizantes": "IA otimiza uso de fertilizantes no solo."
};

response.innerText = map[btn.innerText] || "";
};
});
