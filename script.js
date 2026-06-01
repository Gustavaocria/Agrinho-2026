const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const content = button.nextElementSibling;
        const visible = content.style.display==="block";
        content.style.display = visible ? "none" : "block";
    });
});

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");
});

let currentSize = 16;

document.getElementById("increaseFont").addEventListener("click",()=>{
    currentSize += 2;
    document.documentElement.style.setProperty("--font-size", currentSize + "px");
});

document.getElementById("decreaseFont").addEventListener("click",()=>{
    currentSize -= 2;
    if(currentSize < 12){ currentSize = 12; }
    document.documentElement.style.setProperty("--font-size", currentSize + "px");
});

let speech;

const startReading = document.getElementById("startReading");
const stopReading = document.getElementById("stopReading");

startReading.addEventListener("click",()=>{
    window.speechSynthesis.cancel();
    const content = document.getElementById("main-content").innerText;
    speech = new SpeechSynthesisUtterance(content);
    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
});

stopReading.addEventListener("click",()=>{
    window.speechSynthesis.cancel();
});

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    alert("Inscrição enviada com sucesso!");
});

const commentButton = document.querySelector(".comments-card button");

commentButton.addEventListener("click",()=>{
    const textarea = document.querySelector("textarea");
    if(textarea.value.trim()===""){
        alert("Digite um comentário.");
        return;
    }
    alert("Comentário enviado!");
    textarea.value="";
});
