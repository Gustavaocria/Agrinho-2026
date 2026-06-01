const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        document.querySelectorAll(".accordion-content").forEach(item => {
            if (item !== content) {
                item.style.display = "none";
            }
        });

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

let fontSize = 16;

const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

if (increaseFont) {
    increaseFont.addEventListener("click", () => {
        fontSize += 2;
        document.body.style.fontSize = fontSize + "px";
    });
}

if (decreaseFont) {
    decreaseFont.addEventListener("click", () => {
        if (fontSize > 12) {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + "px";
        }
    });
}

const toggleTheme = document.getElementById("toggleTheme");

if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

const readButton = document.getElementById("readPage");
const stopButton = document.getElementById("stopReading");

let utterance;

if (readButton) {
    readButton.addEventListener("click", () => {

        window.speechSynthesis.cancel();

        const content = document.getElementById("mainContent");

        if (!content) return;

        utterance = new SpeechSynthesisUtterance(
            content.innerText
        );

        utterance.lang = "pt-BR";
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;

        window.speechSynthesis.speak(utterance);
    });
}

if (stopButton) {
    stopButton.addEventListener("click", () => {
        window.speechSynthesis.cancel();
    });
}

const form = document.querySelector(".registration-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = form.querySelector('input[type="text"]');

        let mensagem = "Inscrição realizada com sucesso!";

        if (nome && nome.value.trim() !== "") {
            mensagem =
                "Obrigado, " +
                nome.value +
                "! Sua inscrição foi enviada com sucesso.";
        }

        alert(mensagem);

        form.reset();
    });
}

const counters = document.querySelectorAll(".counter");

const animateCounter = counter => {

    const target = +counter.dataset.target;

    let current = 0;

    const increment = target / 80;

    const update = () => {

        current += increment;

        if (current < target) {

            counter.innerText =
                Math.floor(current) + "%";

            requestAnimationFrame(update);

        } else {

            counter.innerText =
                target + "%";

        }
    };

    update();
};

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            animateCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

const animatedElements = document.querySelectorAll(
    ".card, .dashboard-card, .timeline-item, .imagem"
);

animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.8s ease";

});

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0px)";

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    revealObserver.observe(element);
});

const navbarLinks = document.querySelectorAll("a[href^='#']");

navbarLinks.forEach(link => {

    link.addEventListener("click", e => {

        const targetId =
            link.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    document.body.style.transition =
        "opacity 1s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

});
