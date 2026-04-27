// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Alternar entre o modo claro e escuro
    initializeTheme();

    // Carregar os vídeos dinamicamente
    loadVideos();

    // Tornar a FAQ interativa (mostrar/esconder respostas)
    initializeFAQ();
});

// Função para inicializar o tema (claro/escuro)
function initializeTheme() {
    const toggleModeButton = document.getElementById('toggleMode');
    const savedTheme = localStorage.getItem('theme') || 'light'; // Salvar tema no localStorage
    
    // Ajustar o tema inicial
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.textContent = '🌞'; // Exibir ícone de sol no modo escuro
    } else {
        document.body.classList.add('light-mode');
        toggleModeButton.textContent = '🌙'; // Exibir ícone de lua no modo claro
    }

    // Evento de troca de tema
    toggleModeButton.addEventListener('click', () => {
        toggleTheme(toggleModeButton);
    });
}

// Função para alternar entre os temas
function toggleTheme(button) {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        button.textContent = '🌙'; // Ícone de lua
        localStorage.setItem('theme', 'light'); // Salvar preferência
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        button.textContent = '🌞'; // Ícone de sol
        localStorage.setItem('theme', 'dark'); // Salvar preferência
    }
}

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
        const videoContainer = createVideoElement(video);
        videoGallery.appendChild(videoContainer);
    });
}

// Função para criar o HTML de cada vídeo
function createVideoElement(video) {
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

    return videoContainer;
}

// Função para inicializar a interatividade na FAQ
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item h3');
    
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleFAQAnswer(item);
        });
    });
}

// Função para mostrar/esconder a resposta da FAQ
function toggleFAQAnswer(question) {
    const answer = question.nextElementSibling;

    // Alterna a visibilidade da resposta
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
    } else {
        answer.style.display = 'block';
    }
}
