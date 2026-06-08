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


// Função dos contadores animados

function animarContador(id, valorFinal){

    let contador = 0;

    const elemento =
    document.getElementById(id);

    const incremento =
    Math.ceil(valorFinal / 100);

    const intervalo =
    setInterval(() => {

        contador += incremento;

        if(contador >= valorFinal){

            contador = valorFinal;

            clearInterval(intervalo);

        }

        elemento.textContent =
        contador.toLocaleString("pt-BR");

    },20);

}


// Inicia os contadores

animarContador("contador1",15000);
animarContador("contador2",3200);
animarContador("contador3",80000);


// Calcula a produção rural

const calcular =
document.getElementById("calcular");

calcular.addEventListener("click", () => {

    const cultura =
    Number(document.getElementById("cultura").value);

    const hectares =
    Number(document.getElementById("hectares").value);

    const resultado =
    document.getElementById("resultado");

    if(hectares <= 0 || isNaN(hectares)){

        resultado.innerHTML =
        "Digite uma quantidade válida de hectares.";

        return;
    }

    const producao =
    cultura * hectares;

    resultado.innerHTML =
    `Produção estimada: <strong>${producao} toneladas</strong>.`;

});


// Corrige as respostas do quiz

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

    if(pontos <= 2){

        medalha = "🥉 Medalha de Bronze";

    }else if(pontos <= 4){

        medalha = "🥈 Medalha de Prata";

    }else{

        medalha = "🥇 Medalha de Ouro";

    }

    document.getElementById(
    "resultadoQuiz"
    ).innerHTML =

    `
    Você acertou ${pontos} de 5 perguntas.<br><br>
    ${medalha}
    `;

});


// Área de comentários

const formComentario =
document.getElementById("formComentario");

const listaComentarios =
document.getElementById("listaComentarios");


// Mostra os comentários salvos

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


// Salva comentários novos

formComentario.addEventListener("submit",(e)=>{

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


// Informações extras sobre tecnologia

const botoes =
document.querySelectorAll(".info-btn");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        alert(
        "A tecnologia ajuda o produtor rural a aumentar a produtividade, economizar recursos e produzir de forma mais sustentável."
        );

    });

});


// Mensagem de boas-vindas

window.addEventListener("load", () => {

    console.log(
    "Projeto Agrinho carregado com sucesso."
    );

});
