// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o tema baseado na preferência do usuário
    initializeTheme();

    // Carregar os vídeos dinamicamente
    loadVideos();

    // Inicializar a interatividade da FAQ
    initializeFAQ();
});

// Função para inicializar o tema (claro/escuro)
function initializeTheme() {
    const toggleModeButton = document.getElementById('toggleMode');
    const savedTheme = localStorage.getItem('theme') || 'light'; // Pega a preferência de tema salva
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.textContent = '🌞'; // Exibe o ícone de sol
    } else {
        document.body.classList.add('light-mode');
        toggleModeButton.textContent = '🌙'; // Exibe o ícone de lua
    }

    toggleModeButton.addEventListener('click', () => {
        toggleTheme(toggleModeButton);
    });
}

// Função para alternar entre os modos claro e escuro
function toggleTheme(button) {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        button.textContent = '🌙'; // Ícone de lua no modo claro
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        button.textContent = '🌞'; // Ícone de sol no modo escuro
        localStorage.setItem('theme', 'dark');
    }
}

// Função para carregar vídeos dinamicamente
function loadVideos() {
    const videoGallery = document.getElementById('videoGallery');
    
    const videos = [
        { 
            title: 'Agricultura Sustentável', 
            url: 'https://www.youtube.com/embed/xFqfP-bGBZ8', 
            description: 'Práticas sustentáveis para o futuro da agricultura.'
        },
        { 
            title: 'Tecnologia no Agro', 
            url: 'https://www.youtube.com/embed/dBaZdOZbWqg', 
            description: 'Como a tecnologia transforma a agricultura.'
        },
        { 
            title: 'Futuro do Agro', 
            url: 'https://www.youtube.com/embed/JuZhYXY7oT4', 
            description: 'Visão para o futuro da agricultura sustentável.'
        }
    ];

    // Criação e adição dos vídeos à galeria
    videos.forEach(video => {
        const videoContainer = createVideoElement(video);
        videoGallery.appendChild(videoContainer);
    });
}

// Função que cria o HTML de cada vídeo
function createVideoElement(video) {
    const container = document.createElement('div');
    container.classList.add('video-item');
    
    const iframe = document.createElement('iframe');
    iframe.src = video.url;
    iframe.frameborder = "0";
    iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowfullscreen = true;

    const title = document.createElement('h3');
    title.textContent = video.title;

    const description = document.createElement('p');
    description.textContent = video.description;

    container.appendChild(title);
    container.appendChild(iframe);
    container.appendChild(description);

    return container;
}

// Função para inicializar a FAQ interativa (mostrar/esconder respostas)
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item h3');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleFAQAnswer(item);
        });
    });
}

// Função para mostrar/esconder as respostas da FAQ
function toggleFAQAnswer(question) {
    const answer = question.nextElementSibling;

    // Alterna a visibilidade da resposta
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        question.parentElement.classList.remove('open');
    } else {
        answer.style.display = 'block';
        question.parentElement.classList.add('open');
    }
}
