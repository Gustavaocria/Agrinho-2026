// Modo escuro
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});

// Scroll suave
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mostrar/Esconder Galeria
const toggleGalleryBtn = document.getElementById('toggleGalleryBtn');
const galleryContainer = document.querySelector('.gallery');
toggleGalleryBtn.addEventListener('click', () => {
    galleryContainer.style.display = galleryContainer.style.display === 'none' ? 'grid' : 'none';
});

// Contador de cliques nos cards
const cards = document.querySelectorAll('.card');
const contadorDiv = document.createElement('div');
contadorDiv.style.margin = '20px 0';
contadorDiv.style.fontWeight = 'bold';
contadorDiv.textContent = 'Você clicou em 0 cards.';
document.querySelector('#sobre .container').appendChild(contadorDiv);

let contador = 0;
cards.forEach(card => {
    card.addEventListener('click', () => {
        contador++;
        contadorDiv.textContent = `Você clicou em ${contador} cards.`;
    });
});

// Alterar dinamicamente título principal
const tituloPrincipal = document.querySelector('#sobre h1');
setTimeout(() => {
    tituloPrincipal.textContent = 'Agro Forte - Inovação e Sustentabilidade!';
}, 5000);

// Banner rotativo automático
const slides = document.querySelectorAll('#banner .slide');
let currentSlide = 0;
function showSlide(index){
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
