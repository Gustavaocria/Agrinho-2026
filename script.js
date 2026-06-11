document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. SISTEMA COMPLETO DE ACCORDION (EXPANSÍVEL)
    // ==========================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isExpanded = header.getAttribute('aria-expanded') === 'true';

            // Comportamento focado na acessibilidade: inverte o estado ARIA
            header.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                content.removeAttribute('hidden');
                item.classList.add('active');
            } else {
                content.setAttribute('hidden', '');
                item.classList.remove('active');
            }
        });
    });


    // ==========================================
    // 2. VALIDAÇÃO AVANÇADA DO FORMULÁRIO DE INSCRIÇÃO
    // ==========================================
    const registerForm = document.getElementById('register-form');
    const emailInput = document.getElementById('inp-email');
    const successMsgBox = document.getElementById('form-success-msg');

    // Validação de E-mail em tempo real com expressão regular robusta
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() === "" || validateEmail(emailInput.value)) {
            emailInput.classList.remove('invalid');
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isFormValid = true;
        const inputs = registerForm.querySelectorAll('input[required]');

        // Varre todos os inputs obrigatórios verificando preenchimento
        inputs.forEach(input => {
            if (input.value.trim
document.addEventListener("DOMContentLoaded",()=>{

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;
const current=+counter.innerText;

const increment=target/80;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,25);

}else{

counter.innerText=target;

}

};

update();

});

const btnTheme=document.getElementById("btn-toggle-theme");

if(btnTheme){

btnTheme.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

});

}

const accordions=document.querySelectorAll(".accordion-header");

accordions.forEach(btn=>{

btn.addEventListener("click",()=>{

const expanded=
btn.getAttribute("aria-expanded")==="true";

btn.setAttribute(
"aria-expanded",
!expanded
);

const panel=
document.getElementById(
btn.getAttribute("aria-controls")
);

panel.hidden=expanded;

});

});

const start=document.getElementById("btn-tts-start");
const stop=document.getElementById("btn-tts-stop");

if(start){

start.addEventListener("click",()=>{

const text=
document.getElementById("main-content")
.innerText;

const speech=
new SpeechSynthesisUtterance(text);

speech.lang="pt-BR";

window.speechSynthesis.speak(speech);

});

}

if(stop){

stop.addEventListener("click",()=>{

window.speechSynthesis.cancel();

});

}

});
