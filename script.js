// Validação simples de formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        alert(`Obrigado, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// Efeito de transparência no header ao rolar
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.opacity = '0.95';
    } else {
        header.style.opacity = '1';
    }
});
