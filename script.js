function calculo() {

    //valores inseridos no formulário
    var modelvei = document.getElementById('modelvei')
    var valorvei = document.getElementById('valorvei')
    var resultado = window.document.getElementById('resultado')

    //Fazendo os calculos com os dados inseridos
    var nomeVeiculo = String(modelvei.value)
    var valorVeiculo = Number(valorvei.value)
    var entrada = valorVeiculo / 2
    var parcelas = entrada / 60
    var parcelasJuros = parcelas * 1.7
    alert('Buscando Melhores Condição...')

    //resultado sendo exibido na tela
    resultado.innerText = `NÃO PERCA!
    PROMOÇÃO NO VEÍCULO ${nomeVeiculo}
    Entrada de R$${entrada}
    + 60x de R$${parcelasJuros.toFixed(2)}`
}