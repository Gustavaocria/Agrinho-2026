document.addEventListener("DOMContentLoaded", function () {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Função para alternar entre o modo claro e escuro
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');

        // Armazenar a preferência do usuário no localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleButton.textContent = 'Modo Claro';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleButton.textContent = 'Modo Escuro';
        }
    };

    // Verificar a preferência de tema do usuário
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = 'Modo Escuro';
    }

    // Alternar o tema ao clicar no botão
    themeToggleButton.addEventListener('click', toggleTheme);

    // Animação de carregamento para o botão
    themeToggleButton.addEventListener('mouseenter', function () {
        themeToggleButton.style.transform = "scale(1.1)";
    });

    themeToggleButton.addEventListener('mouseleave', function () {
        themeToggleButton.style.transform = "scale(1)";
    });

    // Efeito de rolagem suave para links internos
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    linksInternos.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
