/* Alternância de Modo Claro e Escuro */
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggleMode');
    const currentMode = localStorage.getItem('mode') || 'light'; // Verifica o modo armazenado no localStorage

    // Define o modo inicial
    document.body.classList.add(currentMode + '-mode');

    // Alterna entre modos e armazena a preferência no localStorage
    toggleButton.addEventListener('click', function() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark'); // Salva o modo escuro
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('mode', 'light'); // Salva o modo claro
        }
    });
});

/* Rolagem suave para as seções */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

/* Efeito de transição nas seções */
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Ativa quando 50% da seção estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

/* Carregamento dinâmico de conteúdo (Exemplo para Vídeos) */
document.addEventListener('DOMContentLoaded', () => {
    const videoSection = document.getElementById('videos');
    const videoData = [
        {
            title: "Agricultura Sustentável em Ação",
            url: "assets/videos/video1.mp4",
        },
        {
            title: "Tecnologia e Inovação no Agro",
            url: "assets/videos/video2.mp4",
        }
    ];

    const videoGallery = videoSection.querySelector('.video-gallery');
    videoData.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            <h4>${video.title}</h4>
            <video controls>
                <source src="${video.url}" type="video/mp4">
                Seu navegador não suporta este vídeo.
            </video>
        `;
        videoGallery.appendChild(videoItem);
    });
});

/* Efeito de rolagem para o fundo (parallax) nas seções */
const parallaxSections = document.querySelectorAll('.hero, .sustentabilidade');
parallaxSections.forEach(section => {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        section.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
});

/* Animação no carregamento das seções */
const fadeInSections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeInSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight - 100) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
