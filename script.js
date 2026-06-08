// Botão modo escuro
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkMode.textContent = document.body.classList.contains("dark") ? "Modo Claro" : "Modo Escuro";
});

// Quiz Agrinho
const corrigirQuiz = document.getElementById("corrigirQuiz");

corrigirQuiz.addEventListener("click", () => {
    let pontos = 0;
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    respostas.forEach((resposta) => {
        if(resposta.value === "certo") pontos++;
    });

    let medalha = "";
    if(pontos <= 1) medalha = "🥉 Bronze";
    else if(pontos <= 2) medalha = "🥈 Prata";
    else medalha = "🥇 Ouro";

    document.getElementById("resultadoQuiz").innerHTML = `Você acertou ${pontos}/2 perguntas. <br> ${medalha}`;
});

// Comentários
const formComentario = document.getElementById("formComentario");
const listaComentarios = document.getElementById("listaComentarios");

function carregarComentarios(){
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    listaComentarios.innerHTML = "";
    comentarios.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("comentario");
        div.innerHTML = `<h4>${item.nome}</h4><p>${item.texto}</p>`;
        listaComentarios.appendChild(div);
    });
}

carregarComentarios();

formComentario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.push({nome, texto: comentario});
    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    formComentario.reset();
    carregarComentarios();
});
