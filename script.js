/* ==========================================================
   SIMULADOR AGROTECH PARANÁ - JS COMPLETO
   Funcionalidades:
   - Modo claro/escuro
   - Cálculo automático de custos por hectare
   - Cálculo do total do plantio
   - Sugestão de máquinas por cultura
   - Manipulação dinâmica do DOM
   - Formatação de valores em Real
========================================================== */

// ============================
// VARIÁVEIS GLOBAIS
// ============================
const btnTema = document.getElementById('btn-tema');
const body = document.body;
const placeholderRes = document.getElementById('placeholder-res');
const conteudoRes = document.getElementById('conteudo-res');
const resCultura = document.getElementById('res-cultura');
const resHecLabel = document.getElementById('res-hec-label');
const resTotal = document.getElementById('res-total');
const tabelaCategorias = {
    'sementes': { unidade: document.getElementById('td-sem-un'), total: document.getElementById('td-sem-tot') },
    'fertilizante': { unidade: document.getElementById('td-fer-un'), total: document.getElementById('td-fer-tot') },
    'defensivo': { unidade: document.getElementById('td-def-un'), total: document.getElementById('td-def-tot') },
    'combustivel': { unidade: document.getElementById('td-com-un'), total: document.getElementById('td-com-tot') },
    'manutencao': { unidade: document.getElementById('td-man-un'), total: document.getElementById('td-man-tot') }
};

// ============================
// FUNÇÃO 1: ALTERNAR MODO CLARO/ESCURO
// ============================
function alternarTema() {
    if(body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme','dark');
        btnTema.innerHTML = '☀️ Modo Claro';
    } else {
        body.setAttribute('data-theme','light');
        btnTema.innerHTML = '🌙 Modo Escuro';
    }
}

// ============================
// FUNÇÃO 2: SUGESTÃO DE MÁQUINAS POR CULTURA
// ============================
function sugerirMaquinas(cultura) {
    // Objeto com máquinas recomendadas
    const maquinas = {
        'soja': ['Trator 150HP', 'Plantadeira de soja 10 linhas', 'Pulverizador autopropelido', 'Colheitadeira de grãos'],
        'milho': ['Trator 180HP', 'Plantadeira de milho 12 linhas', 'Distribuidor de fertilizante', 'Colheitadeira de milho'],
        'trigo': ['Trator 120HP', 'Semeadora de trigo', 'Pulverizador tratorizado', 'Ceifadeira de trigo']
    };
    return maquinas[cultura] || [];
}

// ============================
// FUNÇÃO 3: FORMATAR VALORES EM REAIS
// ============================
function formatarBRL(valor) {
    return valor.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
}

// ============================
// FUNÇÃO 4: CÁLCULO DE CUSTOS
// ============================
function calcularCustos() {

    // Captura os valores do formulário
    const hectares = parseFloat(document.getElementById('hectares').value) || 0;
    const cultura = document.getElementById('cultura').value;
    const semente = 450; // Valores de mercado padrão
    const fertilizante = 1200;
    const defensivo = 800;
    const combustivel = 350;
    const manutencao = 200;

    // Validação
    if(hectares <= 0) {
        alert('Insira uma quantidade de hectares válida!');
        return;
    }

    // =========================
    // CÁLCULO UNITÁRIO E TOTAL
    // =========================
    const custos = {
        sementes: { unidade: semente, total: semente*hectares },
        fertilizante: { unidade: fertilizante, total: fertilizante*hectares },
        defensivo: { unidade: defensivo, total: defensivo*hectares },
        combustivel: { unidade: combustivel, total: combustivel*hectares },
        manutencao: { unidade: manutencao, total: manutencao*hectares }
    };

    const custoTotalGeral = Object.values(custos).reduce((acc, cat) => acc + cat.total, 0);

    // =========================
    // ATUALIZAÇÃO DO DOM
    // =========================
    placeholderRes.style.display = 'none';
    conteudoRes.style.display = 'flex';

    resCultura.innerText = cultura.toUpperCase();
    resHecLabel.innerText = hectares;
    resTotal.innerText = formatarBRL(custoTotalGeral);

    // Atualizar tabela
    for(let key in custos){
        tabelaCategorias[key].unidade.innerText = formatarBRL(custos[key].unidade);
        tabelaCategorias[key].total.innerText = formatarBRL(custos[key].total);
    }

    // =========================
    // SUGESTÃO DE MÁQUINAS
    // =========================
    const maquinas = sugerirMaquinas(cultura);
    let maquinasBox = document.querySelector('.maquinas-box');
    if(!maquinasBox){
        maquinasBox = document.createElement('div');
        maquinasBox.classList.add('maquinas-box');
        conteudoRes.appendChild(maquinasBox);
    }
    maquinasBox.innerHTML = `<h4>🚜 Máquinas Recomendadas</h4>`;
    const ul = document.createElement('ul');
    maquinas.forEach(m => {
        const li = document.createElement('li');
        li.innerText = m;
        ul.appendChild(li);
    });
    maquinasBox.appendChild(ul);
}

// ============================
// EVENT LISTENER
// ============================
document.addEventListener('DOMContentLoaded', () => {
    btnTema.addEventListener('click', alternarTema);
    document.querySelector('.btn-calcular').addEventListener('click', calcularCustos);
});
