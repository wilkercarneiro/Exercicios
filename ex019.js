function calcular(){
    let num = document.getElementById('num')
    num = Number(num.value)
    let valor = num % 2

    if (valor < 1){
        res.innerHTML = 'O número é par'
    } else {
        res.innerHTML = 'O número é impar'
    }
}