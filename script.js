// Valores de mercado por hectare (exemplo realista)
const culturas = {
    soja: {
        sementes: 250,       // R$/ha
        fertilizantes: 400,
        defensivos: 300,
        combustivel: 150,
        manutencao: 100,
        maquinas: ['Trator 150cv', 'Plantadeira', 'Pulverizador']
    },
    milho: {
        sementes: 220,
        fertilizantes: 380,
        defensivos: 280,
        combustivel: 180,
        manutencao: 120,
        maquinas: ['Trator 180cv', 'Plantadeira', 'Colheitadeira']
    },
    trigo: {
        sementes: 180,
        fertilizantes: 350,
        defensivos: 250,
        combustivel: 130,
        manutencao: 90,
        maquinas: ['Trator 140cv', 'Arado', 'Colheitadeira']
    }
};

// Função para calcular custos
function calcularTudo() {
    const hectares = parseFloat(document.getElementById('hectares').value);
    const cultura = document.getElementById('cultura').value;
    const dados = culturas[cultura];

    if (!hectares || hectares <= 0) {
        alert('Informe uma área válida!');
        return;
    }

    // Cálculos unitários e totais
    const sementes_tot = dados.sementes * hectares;
    const fertilizantes_tot = dados.fertilizantes * hectares;
    const defensivos_tot = dados.defensivos * hectares;
    const combustivel_tot = dados.combustivel * hectares;
    const manutencao_tot = dados.manutencao * hectares;

    const total_geral = sementes_tot + fertilizantes_tot + defensivos_tot + combustivel_tot + manutencao_tot;

    // Atualizar HTML
    document.getElementById('res-cultura').innerText = cultura.charAt(0).toUpperCase() + cultura.slice(1);
    document.getElementById('res-hec').innerText = hectares;

    document.getElementById('td-sem-un').innerText = `R$ ${dados.sementes.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('td-sem-tot').innerText = `R$ ${sementes_tot.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;

    document.getElementById('td-fer-un').innerText = `R$ ${dados.fertilizantes.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('td-fer-tot').innerText = `R$ ${fertilizantes_tot.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;

    document.getElementById('td-def-un').innerText = `R$ ${dados.defensivos.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('td-def-tot').innerText = `R$ ${defensivos_tot.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;

    document.getElementById('td-com-un').innerText = `R$ ${dados.combustivel.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('td-com-tot').innerText = `R$ ${combustivel_tot.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;

    document.getElementById('td-man-un').innerText = `R$ ${dados.manutencao.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;
    document.getElementById('td-man-tot').innerText = `R$ ${manutencao_tot.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;

    document.getElementById('td-machinery').innerText = dados.maquinas.join(', ');

    document.getElementById('res-total').innerText = `R$ ${total_geral.toLocaleString('pt-BR', {minimumFractionDigits:2})}`;

    document.getElementById('placeholder-res').style.display = 'none';
    document.getElementById('conteudo-res').style.display = 'block';
}

// Tema claro/escuro
function alternarTema() {
    const body = document.body;
    if(body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        document.getElementById('btn-tema').innerText = '☀️ Modo Claro';
    } else {
        body.setAttribute('data-theme', 'light');
        document.getElementById('btn-tema').innerText = '🌙 Modo Escuro';
    }
}
