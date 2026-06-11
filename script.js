/* ==========================================
   AGROFORTE 2026
   SCRIPT PREMIUM
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       LOADER
    ========================== */

    const loader = document.getElementById("loader");

    setTimeout(() => {

        if(loader){

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            },800);

        }

    },3000);

    /* ==========================
       HEADER SCROLL
    ========================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 80){

            header.style.background =
            "rgba(0,0,0,.65)";

        }

        else{

            header.style.background =
            "rgba(0,0,0,.15)";

        }

    });

    /* ==========================
       CONTADORES
    ========================== */

    const counters =
    document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target =
        parseInt(counter.dataset.target);

        let current = 0;

        const increment =
        target / 100;

        const update = () => {

            current += increment;

            if(current < target){

                counter.innerText =
                Math.ceil(current) + "%";

                requestAnimationFrame(update);

            }

            else{

                counter.innerText =
                target + "%";

            }

        };

        update();

    });

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements =
    document.querySelectorAll(
    ".section,.dashboard-card,.ia-card,.gallery img,.about-card,.about-text"
    );

    const reveal = () => {

        revealElements.forEach(el=>{

            const top =
            el.getBoundingClientRect().top;

            const windowHeight =
            window.innerHeight;

            if(top < windowHeight - 100){

                el.classList.add("show");

            }

        });

    };

    reveal();

    window.addEventListener(
    "scroll",
    reveal
    );

    /* ==========================
       GALERIA LIGHTBOX
    ========================== */

    const images =
    document.querySelectorAll(
    ".gallery-grid img"
    );

    images.forEach(img=>{

        img.addEventListener(
        "click",
        ()=>{

            const overlay =
            document.createElement("div");

            overlay.classList.add(
            "lightbox"
            );

            overlay.innerHTML = `
            <img src="${img.src}">
            `;

            document.body.appendChild(
            overlay
            );

            overlay.addEventListener(
            "click",
            ()=>{

                overlay.remove();

            });

        });

    });

    /* ==========================
       ACESSIBILIDADE
    ========================== */

    let fontSize = 100;

    const increase =
    document.getElementById(
    "btn-increase-font"
    );

    const decrease =
    document.getElementById(
    "btn-decrease-font"
    );

    if(increase){

        increase.addEventListener(
        "click",
        ()=>{

            if(fontSize < 135){

                fontSize += 5;

                document.documentElement.style.fontSize =
                fontSize + "%";

            }

        });

    }

    if(decrease){

        decrease.addEventListener(
        "click",
        ()=>{

            if(fontSize > 85){

                fontSize -= 5;

                document.documentElement.style.fontSize =
                fontSize + "%";

            }

        });

    }

    /* ==========================
       DARK MODE
    ========================== */

    const themeButton =
    document.getElementById(
    "btn-toggle-theme"
    );

    if(themeButton){

        themeButton.addEventListener(
        "click",
        ()=>{

            document.body.classList.toggle(
            "dark-mode"
            );

        });

    }

    /* ==========================
       LEITURA POR VOZ
    ========================== */

    const startSpeech =
    document.getElementById(
    "btn-tts-start"
    );

    const stopSpeech =
    document.getElementById(
    "btn-tts-stop"
    );

    let speech;

    if(startSpeech){

        startSpeech.addEventListener(
        "click",
        ()=>{

            const content =
            document.getElementById(
            "main-content"
            );

            speech =
            new SpeechSynthesisUtterance(
            content.innerText
            );

            speech.lang = "pt-BR";

            speech.rate = 1;

            speech.pitch = 1;

            window.speechSynthesis.speak(
            speech
            );

        });

    }

    if(stopSpeech){

        stopSpeech.addEventListener(
        "click",
        ()=>{

            window.speechSynthesis.cancel();

        });

    }

    /* ==========================
       COMENTÁRIOS
    ========================== */

    const commentForm =
    document.getElementById(
    "comment-form"
    );

    const commentsList =
    document.getElementById(
    "comments-list"
    );

    if(commentForm){

        commentForm.addEventListener(
        "submit",
        e=>{

            e.preventDefault();

            const textarea =
            document.getElementById(
            "txt-comment"
            );

            const value =
            textarea.value.trim();

            if(value === "") return;

            const comment =
            document.createElement("div");

            comment.className =
            "comment-item";

            comment.innerHTML = `

            <p class="comment-meta">
            <strong>Visitante</strong>
            </p>

            <p class="comment-body">
            ${value}
            </p>

            `;

            commentsList.prepend(
            comment
            );

            textarea.value = "";

        });

    }

    /* ==========================
       FORMULÁRIO
    ========================== */

    const registerForm =
    document.getElementById(
    "register-form"
    );

    const successMsg =
    document.getElementById(
    "form-success-msg"
    );

    if(registerForm){

        registerForm.addEventListener(
        "submit",
        e=>{

            e.preventDefault();

            successMsg.hidden = false;

            registerForm.reset();

            setTimeout(()=>{

                successMsg.hidden = true;

            },5000);

        });

    }

    /* ==========================
       BOTÃO VOLTAR TOPO
    ========================== */

    const topButton =
    document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.id =
    "backToTop";

    document.body.appendChild(
    topButton
    );

    window.addEventListener(
    "scroll",
    ()=>{

        if(window.scrollY > 500){

            topButton.classList.add(
            "active"
            );

        }

        else{

            topButton.classList.remove(
            "active"
            );

        }

    });

    topButton.addEventListener(
    "click",
    ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});
