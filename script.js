// Inicializar Animações de Scroll
AOS.init({
    duration: 1000,
    once: true
});

// Efeito de mudar o navbar ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Contador de Números para a seção de Stats
const counters = document.querySelectorAll('.count');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Disparar contador apenas quando o usuário chegar na seção
let observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounters();
    }
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats'));
// --- SISTEMA DE LOGIN/CADASTRO ---
const authForm = document.getElementById('auth-form');
const authMessage = document.getElementById('auth-message');

authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;

    // Simulação: Se o usuário não existe, cadastra. Se existe, loga.
    const savedPass = localStorage.getItem(email);

    if (!savedPass) {
        localStorage.setItem(email, pass);
        authMessage.innerText = "Conta criada com sucesso! Bem-vindo ao Agro-Tech.";
        authMessage.style.color = "#2ecc71";
    } else if (savedPass === pass) {
        authMessage.innerText = "Login realizado! Acessando painel sustentável...";
        authMessage.style.color = "#2ecc71";
    } else {
        authMessage.innerText = "Senha incorreta para este e-mail.";
        authMessage.style.color = "#e74c3c";
    }
});

// --- SISTEMA DE VÍDEOS (MODAL) ---
const modal = document.getElementById('video-modal');
const videoFrame = document.getElementById('video-frame');
const closeBtn = document.querySelector('.close-modal');

function openVideo(url) {
    videoFrame.src = url + "?autoplay=1";
    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
    videoFrame.src = ""; // Para o vídeo parar de tocar
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
        videoFrame.src = "";
    }
};
