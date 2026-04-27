// Manipulação do DOM para ativar/desativar o modo escuro
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Funcionalidade de manipulação do DOM - Exemplo de contador
let counter = 0;
const counterElement = document.createElement('div');
counterElement.innerHTML = `<h3>Contador: <span id="count">${counter}</span></h3>`;
document.body.appendChild(counterElement);

setInterval(() => {
    counter++;
    document.getElementById("count").innerText = counter;
}, 1000);
