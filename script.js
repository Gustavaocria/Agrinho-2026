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
