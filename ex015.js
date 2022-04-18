function calcular(){
    let dia = document.getElementById('dia')
    let ano = document.getElementById('ano')
    dia = Number(dia.value)
    ano = Number(ano.value) * 365
    let soma = (((dia * 10) * ano) / 60) / 24
    res.innerHTML = 'Você já perdeu ' + soma + ' dias fumando essa merda!'

}