// Função de login: Qualquer nome de usuário e senha são aceitos
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Esconde a tela de login e exibe o conteúdo principal
    document.getElementById("loginPage").style.display = "none"; 
    document.getElementById("mainContent").style.display = "block"; 

    // Exibe uma mensagem de login bem-sucedido
    document.getElementById("loginError").style.display = "block";
});

// Função para exibir mais informações sobre práticas sustentáveis
document.getElementById('showMoreBtn').addEventListener('click', function() {
    const moreInfo = document.getElementById('moreInfo');
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});

// Função para o contador de sustentabilidade
let treeCounter = 0;
let waterCounter = 0;

function updateCounters() {
    treeCounter += 5; // Adiciona 5 árvores a cada 1 segundo
    waterCounter += 10; // Adiciona 10 litros de água economizada a cada 1 segundo

    document.getElement
