// ACCORDION
document.querySelectorAll(".accordion-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// FONT CONTROL
let fontSize = 16;

document.getElementById("aumentar").addEventListener("click", ()=>{
  fontSize += 1;
  document.body.style.fontSize = fontSize + "px";
});

document.getElementById("diminuir").addEventListener("click", ()=>{
  fontSize -= 1;
  document.body.style.fontSize = fontSize + "px";
});

// DARK MODE
document.getElementById("modo").addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
});

// SPEECH
const synth = window.speechSynthesis;
let utterance;

document.getElementById("ler").addEventListener("click", ()=>{
  const text = document.getElementById("mainContent").innerText;
  utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
});

document.getElementById("parar").addEventListener("click", ()=>{
  synth.cancel();
});
