function achar(){
    let n = document.getElementById('n')
    let num = Number(n.value)
    let ant = num - 1
    let suc = num + 1
    res.innerHTML = 'O número escolhido foi: ' + num + '<br>O antecessor é: ' + ant + '<br>O sucessor é: ' + suc
}