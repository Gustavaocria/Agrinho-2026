// JavaScript para alternar entre modo claro e escuro
document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.getElementById('toggleMode');
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Define o tema carregado
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.textContent = '🌞';  // Mostra ícone de sol no modo escuro
    } else {
        document.body.classList.add('light-mode');
        toggleModeButton.textContent = '🌙';  // Mostra ícone de lua no modo claro
    }

    // Alterna o modo e salva a preferência no localStorage
    toggleModeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            toggleModeButton.textContent = '🌙';  // Mostra lua
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            toggleModeButton.textContent = '🌞';  // Mostra sol
            localStorage.setItem('theme', 'dark');
        }
    });

    // Carrega os vídeos dinamicamente na seção de vídeos
    loadVideos();
});

// Função para carregar vídeos dinamicamente
function loadVideos() {
    const videoGallery = document.getElementById('videoGallery');
    
    const videos = [
        { 
            title: 'Agricultura Sustentável', 
            url: 'https://www.youtube.com/embed/xFqfP-bGBZ8', 
            description: 'Entenda como práticas sustentáveis podem melhorar a produtividade e proteger o meio ambiente.' 
        },
        { 
            title: 'Tecnologia no Agro', 
            url: 'https://www.youtube.com/embed/dBaZdOZbWqg', 
            description: 'Como a tecnologia está transformando a agricultura e garantindo mais eficiência.' 
        },
        { 
            title: 'Futuro do Agro', 
            url: 'https://www.youtube.com/embed/JuZhYXY7oT4', 
            description: 'O que podemos esperar para o futuro da agricultura com inovações tecnológicas.' 
        }
    ];

    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-item');
        
        const iframe = document.createElement('iframe');
        iframe.src = video.url;
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowfullscreen = true;

        const title = document.createElement('h3');
        title.textContent = video.title;

        const description = document.createElement('p');
        description.textContent = video.description;

        videoContainer.appendChild(title);
        videoContainer.appendChild(iframe);
        videoContainer.appendChild(description);

        videoGallery.appendChild(videoContainer);
    });
}

// Mostrar/Ocultar FAQ com interatividade
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

// Animação de fade-in nas seções quando rolar a página
const sections = document.querySelectorAll('.fade-in');
const options = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
