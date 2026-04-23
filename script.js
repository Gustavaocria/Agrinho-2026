// Formulário
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('status').innerText = "Mensagem enviada com sucesso! Obrigado por entrar em contato.";
    this.reset();
});

// Toggle modo escuro
const darkModeButton = document.getElementById('darkModeToggle');
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Contador de visitas (DOM)
let contador = 0;
const contadorText = document.getElementById('contador');
const incrementBtn = document.getElementById('incrementBtn');

incrementBtn.addEventListener('click', () => {
    contador++;
    contadorText.textContent = contador;
});

// Mostrar/Ocultar dica (DOM)
const toggleInfoBtn = document.getElementById('toggleInfoBtn');
const dicaDiv = document.getElementById('dica');

toggleInfoBtn.addEventListener('click', () => {
    if(dicaDiv.style.display === 'none'){
        dicaDiv.style.display = 'block';
    } else {
        dicaDiv.style.display = 'none';
    }
});

// Alterar texto do slogan (DOM)
const changeTextBtn = document.getElementById('changeTextBtn');
const sloganText = document.getElementById('sloganText');

changeTextBtn.addEventListener('click', () => {
    sloganText.textContent = "Agro Forte: Crescimento Sustentável para Todos!";
});
