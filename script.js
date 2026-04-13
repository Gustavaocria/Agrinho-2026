// Função de login com qualquer nome de usuário e senha
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Apenas exibe o conteúdo principal sem verificar o nome de usuário ou senha
    document.getElementById("loginPage").style.display = "none"; // Oculta a tela de login
    document.getElementById("mainContent").style.display = "block"; // Exibe o conteúdo principal
    document.getElementById("loginError").style.display = "none"; // Esconde qualquer mensagem de erro
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
