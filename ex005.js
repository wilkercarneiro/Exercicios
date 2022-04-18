function media() {
    let nota1 = document.getElementById('n1')
    let nota2 = document.getElementById('n2')
    let res = document.getElementById('res')
    nota1 = Number(nota1.value)
    nota2 = Number(nota2.value)
    let resp = (nota1 + nota2) / 2
    res.innerHTML = 'A média do aluno é de: ' + resp


}