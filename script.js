// Informações de login fictícias
const validUsername = "usuario";
const validPassword = "senha123";

// Função para login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        document.getElementById("loginPage").style.display = "none"; // Oculta a tela de login
        document.getElementById("mainContent").style.display = "block"; // Exibe o conteúdo principal
    } else {
        document.getElementById("loginError").style.display = "block"; // Mostra erro de login
    }
});

// Manipula a exibição do texto extra ao clicar no botão
document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});

// Alterna entre mostrar e esconder os destaques
setInterval(function() {
    const highlightContent = document.getElementById('highlightContent');
    if (highlightContent.style.color === 'red') {
        highlightContent.style.color = 'green';
    } else {
        highlightContent.style.color = 'red';
    }
}, 3000);
