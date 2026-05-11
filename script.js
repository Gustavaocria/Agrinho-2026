// Modo Claro/Escuro
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});

// Carousel automático
const slides = document.querySelectorAll('.carousel .slides img');
let index = 0;

setInterval(() => {
    slides.forEach((slide, i) => slide.style.display = i === index ? 'block' : 'none');
    index = (index + 1) % slides.length;
}, 3000);

// Mostrar/Ocultar Links Úteis
const toggleLinksBtn = document.getElementById('toggleLinks');
const linksSection = document.getElementById('links');

toggleLinksBtn.addEventListener('click', () => {
    const list = linksSection.querySelector('ul');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';
        toggleLinksBtn.textContent = 'Ocultar Links Úteis';
    } else {
        list.style.display = 'none';
        toggleLinksBtn.textContent = 'Mostrar Links Úteis';
    }
});

// Contador de visitas na sessão
let contador = sessionStorage.getItem('contador') || 0;
contador++;
sessionStorage.setItem('contador', contador);
document.getElementById('contador').textContent = contador;
