document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Função para alternar entre o modo claro e escuro
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        
        // Armazenar a preferência no localStorage
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
        themeToggleButton.textContent = 'Modo Escuro';
    }

    // Aplicar a função de alternância do tema
    themeToggleButton.addEventListener('click', toggleTheme);
});
