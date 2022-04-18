function calcular(){
    let num = document.getElementById('num')
    num = Number(num.value)
    dobro = num * 2
    tercap = num / 3
    res.innerHTML = 'O número é: ' + num + '<br>O dobro é: ' + dobro + '<br>A terça parte é: ' + tercap

}