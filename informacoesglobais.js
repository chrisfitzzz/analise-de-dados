const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const carrosVendidos = (dados.total_carros_vendidos / 1e9)
    const celtasNoBrasil = (dados.total_celtas_brasil / 1e9)
    const horas = parseInt(dados.tempo_usado)
    const minutos = Math.round((dados.tempo_usado - horas) * 100)
    const porcentagemUsada = ((carrosVendidos / celtasNoBrasil ) * 100).toFixed(2)

    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    
    paragrafo.innerHTML = `voce sabia que existem aproximadamente <span>${dados.total_celtas_brasil}1.667.202</span> unidades de celtas no brasil, foram vendidos <span>${dados.total_carros_vendidos}1.057.366 </span>unidades de celtas no brasil. Por dia, os celtas sao usados por <span>${dados.tempo_usado}</span>2.38 horas por pessoa.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
