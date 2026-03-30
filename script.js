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
