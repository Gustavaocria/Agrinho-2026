// Botão para ativar o modo escuro

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkMode.textContent = "Modo Claro";
    }else{
        darkMode.textContent = "Modo Escuro";
    }

});


// Contadores animados

function contador(id, valorFinal){

    let atual = 0;

    const elemento =
    document.getElementById(id);

    if(!elemento){
        return;
    }

    const incremento =
    Math.ceil(valorFinal / 100);

    const intervalo =
    setInterval(() => {

        atual += incremento;

        if(atual >= valorFinal){

            atual = valorFinal;

            clearInterval(intervalo);

        }

        elemento.textContent =
        atual.toLocaleString("pt-BR");

    },20);

}


// Inicia os contadores

contador("contador1",1500);
contador("contador2",850);
contador("contador3",12000);


// Quiz Agrinho

const corrigirQuiz =
document.getElementById("corrigirQuiz");

corrigirQuiz.addEventListener("click", () => {

    let pontos = 0;

    const respostas =
    document.querySelectorAll(
    'input[type="radio"]:checked'
    );

    respostas.forEach((resposta) => {

        if(resposta.value === "certo"){

            pontos++;

        }

    });

    let medalha = "";

    if(pontos === 3){

        medalha = "🥇 Excelente! Você entende muito do tema.";

    }else if(pontos === 2){

        medalha = "🥈 Muito bom!";

    }else{

        medalha = "🥉 Continue aprendendo!";
    }

    document.getElementById(
        "resultadoQuiz"
    ).innerHTML =

    `
    <p>Você acertou ${pontos} de 3 perguntas.</p>
    <p>${medalha}</p>
    `;

});


// Área de comentários

const formComentario =
document.getElementById("formComentario");

const listaComentarios =
document.getElementById("listaComentarios");


// Carrega comentários salvos

function carregarComentarios(){

    const comentarios =

    JSON.parse(
        localStorage.getItem("comentarios")
    ) || [];

    listaComentarios.innerHTML = "";

    comentarios.forEach((comentario) => {

        const div =
        document.createElement("div");

        div.classList.add("comentario");

        div.innerHTML = `
        <h4>${comentario.nome}</h4>
        <p>${comentario.texto}</p>
        `;

        listaComentarios.appendChild(div);

    });

}

carregarComentarios();


// Salva comentários

formComentario.addEventListener("submit", (e) => {

    e.preventDefault();

    const nome =
    document.getElementById("nome").value;

    const comentario =
    document.getElementById("comentario").value;

    const comentarios =

    JSON.parse(
        localStorage.getItem("comentarios")
    ) || [];

    comentarios.push({

        nome:nome,
        texto:comentario

    });

    localStorage.setItem(
        "comentarios",
        JSON.stringify(comentarios)
    );

    formComentario.reset();

    carregarComentarios();

});


// Mensagem quando o site abre

window.addEventListener("load", () => {

    console.log(
        "Projeto Agrinho carregado com sucesso."
    );

});
