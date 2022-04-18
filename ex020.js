function calcular(){
    let ano = document.getElementById('ano')
    ano = Number(ano.value)
    let biss = ano % 4
    if (biss < 1){
        res.innerHTML = 'Esse é um ano BISSEXTO'
    } else {
        res.innerHTML = 'Esse não é um ano BISSEXTO'
    }
}