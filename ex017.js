function calcular(){
    let nasc = document.getElementById('nasc')
    let ano = document.getElementById('ano')
    nasc = Number(nasc.value)
    ano = Number(ano.value)
    let idade = ano - nasc


    if (idade <= 16){
        let id1 = 16 - idade
        res.innerHTML = 'Você não pode votar, aguarde ' + id1 + ' anos'
    } else if (idade <= 18){
        res.innerHTML = 'Você pode votar mas não é obrigado(a)'
    } else if (idade <= 65){
        res.innerHTML = 'Você é obrigado a votar, vote consciente!'
    } else {
        res.innerHTML = 'Você pode votar mas não é obrigado(a)'
    }
}