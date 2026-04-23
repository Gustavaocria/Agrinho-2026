// Modo Escuro
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
});

// Banner rotativo automático
const slides = document.querySelectorAll('.carousel .slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index) slide.classList.add('active');
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Troca a cada 5 segundos

// Contador de cliques nos cards
const cardButtons = document.querySelectorAll('.card-btn');
let clickCount = 0;
const contador = document.getElementById('contadorCards');

cardButtons.forEach(button => {
    button.addEventListener('click', () => {
        clickCount++;
        contador.textContent = `Você clicou em ${clickCount} cards.`;
    });
});

// Mostrar/Esconder Galeria
const toggleGalleryBtn = document.getElementById('toggleGalleryBtn');
const gallery = document.querySelector('.gallery');

toggleGalleryBtn.addEventListener('click', () => {
    if(gallery.style.display === 'none') {
        gallery.style.display = 'grid';
        toggleGalleryBtn.textContent = 'Esconder Galeria';
    } else {
        gallery.style.display = 'none';
        toggleGalleryBtn.textContent = 'Mostrar Galeria';
    }
});

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
