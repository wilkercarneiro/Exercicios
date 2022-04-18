function calcular(){
    let nasc = document.getElementById('nasc')
    nasc = Number(nasc.value)
    let ano = 2022
    let idade = ano - nasc
    if (idade > 18){
        let maior = idade - 18
        res.innerHTML = "Já se passaram " + maior + ' anos do alistamento! Você já tem ' + idade + ' anos'
    } else {
        let menor = 18 - idade
        res.innerHTML = 'Ainda faltam ' + menor + ' anos para o alistamento! Você ainda tem ' + idade + ' anos'
    }

}