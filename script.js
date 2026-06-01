const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {
    button.addEventListener("click", () => {

        const content = button.nextElementSibling;
        const isOpen = content.classList.contains("active");

        document.querySelectorAll(".accordion-content").forEach(item => {
            item.classList.remove("active");
            item.style.maxHeight = null;
        });

        if (!isOpen) {
            content.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    createNotification(
        document.body.classList.contains("dark-mode")
        ? "Modo escuro ativado"
        : "Modo claro ativado"
    );
});

let currentSize = 16;

document.getElementById("increaseFont").addEventListener("click", () => {

    currentSize += 2;

    document.documentElement.style.setProperty(
        "--font-size",
        currentSize + "px"
    );

    createNotification("Fonte aumentada");
});

document.getElementById("decreaseFont").addEventListener("click", () => {

    currentSize -= 2;

    if(currentSize < 12){
        currentSize = 12;
    }

    document.documentElement.style.setProperty(
        "--font-size",
        currentSize + "px"
    );

    createNotification("Fonte reduzida");
});

let speech;

const startReading = document.getElementById("startReading");
const stopReading = document.getElementById("stopReading");

startReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const content =
    document.getElementById("main-content").innerText;

    speech = new SpeechSynthesisUtterance(content);

    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

    createNotification("Leitura iniciada");
});

stopReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    createNotification("Leitura interrompida");
});

const toggleAccessibility =
document.getElementById("toggleAccessibility");

const accessibilityBox =
document.querySelector(".accessibility-box");

toggleAccessibility.addEventListener("click", () => {

    accessibilityBox.classList.toggle("collapsed");
});

document.querySelector("form")
.addEventListener("submit", (e) => {

    e.preventDefault();

    createNotification(
        "Inscrição enviada com sucesso!"
    );

    e.target.reset();
});

const commentButton =
document.querySelector(".comments-card button");

commentButton.addEventListener("click", () => {

    const textarea =
    document.querySelector(".comments-card textarea");

    const text = textarea.value.trim();

    if(text === ""){

        createNotification(
            "Digite um comentário."
        );

        return;
    }

    const commentArea =
    document.createElement("div");

    commentArea.classList.add("new-comment");

    commentArea.innerHTML = `
        <p>${text}</p>
    `;

    document
    .querySelector(".comments-card")
    .appendChild(commentArea);

    textarea.value = "";

    createNotification(
        "Comentário enviado!"
    );
});

function createNotification(message){

    const notification =
    document.createElement("div");

    notification.classList.add("notification");

    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {
            notification.remove();
        }, 500);

    }, 2500);
}

window.addEventListener("scroll", () => {

    const cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

        const position =
        card.getBoundingClientRect().top;

        const screenPosition =
        window.innerHeight / 1.2;

        if(position < screenPosition){
            card.classList.add("visible");
        }

    });

});

document.addEventListener("mousemove", (e) => {

    const hero =
    document.querySelector(".hero");

    const x =
    (window.innerWidth / 2 - e.pageX) / 40;

    const y =
    (window.innerHeight / 2 - e.pageY) / 40;

    hero.style.backgroundPosition =
    `${x}px ${y}px`;
});
