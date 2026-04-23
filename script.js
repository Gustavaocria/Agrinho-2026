// Modo escuro
const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Alterar o texto do botão dinamicamente
    if (document.body.classList.contains('dark-mode')) {
        darkModeBtn.textContent = 'Modo Claro';
    } else {
        darkModeBtn.textContent = 'Modo Escuro';
    }
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
const galeria = document.getElementById('galeria');
const toggleGalleryBtn = document.createElement('button');
toggleGalleryBtn.textContent = 'Mostrar/Esconder Galeria';
toggleGalleryBtn.style.margin = '10px 0';
toggleGalleryBtn.style.padding = '8px 15px';
toggleGalleryBtn.style.cursor = 'pointer';
galeria.prepend(toggleGalleryBtn);

toggleGalleryBtn.addEventListener('click', () => {
    const galleryContainer = galeria.querySelector('.gallery');
    if (galleryContainer.style.display === 'none') {
        galleryContainer.style.display = 'grid';
    } else {
        galleryContainer.style.display = 'none';
    }
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

// Alterar dinamicamente texto do título
const tituloPrincipal = document.querySelector('#sobre h1');
setTimeout(() => {
    tituloPrincipal.textContent = 'Agro Forte - Inovação e Sustentabilidade!';
}, 5000);
