function calcular(){
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    let media = (n1 + n2) / 2
    if (media < 7){
        res.innerHTML = '<h3><br>Você teve um mal desempenho, se esforce mais. </h3><h1><br>MÉDIA: ' + media + '</h1>'
    } else {
        res.innerHTML = '<h3><br>Parabéns, você teve um ótimo desempenho! Continue assim.</h3><h1><br>MÉDIA: ' + media + '</h1>'
    }
}