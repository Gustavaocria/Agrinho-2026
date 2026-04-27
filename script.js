// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Alternar entre o modo escuro e claro
    const toggleModeButton = document.getElementById('toggleMode');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleModeButton.textContent = '🌞'; // Exibe ícone de sol no modo escuro
    } else {
        document.body.classList.add('light-mode');
        toggleModeButton.textContent = '🌙'; // Exibe ícone de lua no modo claro
    }

    toggleModeButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            toggleModeButton.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            toggleModeButton.textContent = '🌞';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Carregar vídeos dinamicamente
    loadVideos();

    // Interatividade da FAQ (exibir/ocultar respostas)
    const faqItems = document.querySelectorAll('.faq-item h3');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });
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
