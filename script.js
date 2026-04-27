// Modo Claro e Escuro
const toggleButton = document.getElementById('toggleMode');

// Verifica o tema atual e altera ao clicar no botão
toggleButton.addEventListener('click', () => {
    const currentMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    if (currentMode === 'light') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '☀️';  // Ícone para Modo Claro
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleButton.innerHTML = '🌙';  // Ícone para Modo Escuro
    }
});

// FAQ - Mostrar e esconder respostas
const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
    });
});

// Efeito de "fade-in" nas seções à medida que o usuário rola a página
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, {
    threshold: 0.2  // Define que a seção deve estar 20% visível para o efeito ocorrer
});

// Observa todas as seções para aplicar o efeito de "fade-in"
sections.forEach(section => {
    observer.observe(section);
});
