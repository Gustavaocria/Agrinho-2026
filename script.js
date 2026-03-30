document.getElementById('agro-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Coleta os valores
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Validação simples de segurança
    if (pass.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres para ser segura!");
        return;
    }

    // Sucesso: Troca de tela
    document.getElementById('user-display').innerText = user;
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    console.log("Usuário logado com sucesso!");
});

function logout() {
    window.location.reload(); // Volta para a tela inicial
}
