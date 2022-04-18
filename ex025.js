function calcular(){
    let n1 = document.getElementById('n1')
    n1 = Number(n1.value)
    let n2 = document.getElementById('n2')
    n2 = Number(n2.value)

    let media = (n1 + n2) / 2

    res.innerHTML = 'Olá'

    if (media < 5){
        res.innerHTML = 'Você foi reprovado!'
    } else if (media < 7){
        res.innerHTML = 'Você está em recuperação!'
    } else {
        res.innerHTML = 'Parabéns, você passou!'
    }
} 