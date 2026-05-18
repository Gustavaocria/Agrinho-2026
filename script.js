// ----------------- TOGGLE TEMA -----------------
document.getElementById('btn-tema').addEventListener('click', alternarTema);

function alternarTema() {
    const body = document.body;
    const btn = document.getElementById('btn-tema');
    const temaAtual = body.getAttribute('data-theme');

    if (temaAtual === 'light') {
        body.setAttribute('data-theme','dark');
        btn.innerHTML = '☀️ Modo Claro';
    } else {
        body.setAttribute('data-theme','light');
        btn.innerHTML = '🌙 Modo Escuro';
    }
}

// ----------------- CALCULO DE CUSTOS -----------------
document.getElementById('btn-calcular').addEventListener('click', calcularCustos);

function calcularCustos() {
    const hectares = parseFloat(document.getElementById('hectares').value) || 0;
    const cultura = document.getElementById('cultura').value;
    const semente = parseFloat(document.getElementById('semente').value) || 0;
    const fertilizante = parseFloat(document.getElementById('fertilizante').value) || 0;
    const defensivo = parseFloat(document.getElementById('defensivo').value) || 0;
    const combustivel = parseFloat(document.getElementById('combustivel').value) || 0;
    const manutencao = parseFloat(document.getElementById('manutencao').value) || 0;

    if(hectares <=0){
        alert('Insira uma quantidade válida de hectares.');
        return;
    }

    const sementeTotal = semente*hectares;
    const fertilizanteTotal = fertilizante*hectares;
    const defensivoTotal = defensivo*hectares;
    const combustivelTotal = combustivel*hectares;
    const manutencaoTotal = manutencao*hectares;

    const custoTotalGeral = sementeTotal+fertilizanteTotal+defensivoTotal+combustivelTotal+manutencaoTotal;

    document.getElementById('placeholder-res').style.display='none';
    document.getElementById('conteudo-res').style.display='flex';

    document.getElementById('res-cultura').innerText = cultura;
    document.getElementById('res-hec-label').innerText = hectares;

    function formatBRL(valor){ 
        return valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
    }

    document.getElementById('td-sem-un').innerText = formatBRL(semente);
    document.getElementById('td-sem-tot').innerText = formatBRL(sementeTotal);

    document.getElementById('td-fer-un').innerText = formatBRL(fertilizante);
    document.getElementById('td-fer-tot').innerText = formatBRL(fertilizanteTotal);

    document.getElementById('td-def-un').innerText = formatBRL(defensivo);
    document.getElementById('td-def-tot').innerText = formatBRL(defensivoTotal);

    document.getElementById('td-com-un').innerText = formatBRL(combustivel);
    document.getElementById('td-com-tot').innerText = formatBRL(combustivelTotal);

    document.getElementById('td-man-un').innerText = formatBRL(manutencao);
    document.getElementById('td-man-tot').innerText = formatBRL(manutencaoTotal);

    document.getElementById('res-total').innerText = formatBRL(custoTotalGeral);
}
