// Modo Escuro / Claro
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Alternar Modo Claro / Escuro';
toggleButton.id = 'toggle-mode';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    // Alternar entre modos
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

    if (currentMode === 'light') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        toggleButton.innerText = 'Alternar Modo Claro';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        toggleButton.innerText = 'Alternar Modo Escuro';
    }
});

// Exemplo de manipulação de texto no DOM
const textChangeButton = document.createElement('button');
textChangeButton.innerText = 'Clique para Alterar Texto';
textChangeButton.id = 'change-text-button';
document.body.appendChild(textChangeButton);

const aboutText = document.querySelector('#about .text p'); // Pegando o parágrafo da seção "Sobre"

textChangeButton.addEventListener('click', () => {
    aboutText.innerText = 'Agora você está vendo o texto alterado dinamicamente pelo JavaScript!';
});

// Exemplo de contador de visualizações de vídeo
let videoViews = 0;
const viewCounter = document.createElement('div');
viewCounter.id = 'view-counter';
viewCounter.innerText = `Número de visualizações: ${videoViews}`;
document.body.appendChild(viewCounter);

const videoElements = document.querySelectorAll('iframe'); // Todos os vídeos incorporados

videoElements.forEach((video) => {
    video.addEventListener('click', () => {
        videoViews++;
        viewCounter.innerText = `Número de visualizações: ${videoViews}`;
    });
});
