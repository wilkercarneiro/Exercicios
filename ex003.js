function salvar(){
    let name = document.getElementById('n1')
    let sal = document.getElementById('s1')
    let res = document.getElementById('res')

    res.innerHTML = 'Nome do Funcionario: ' + name.value + '<br>'
    res.innerHTML += 'Salario do Funcionario: ' + sal.value + '<br>'
    res.innerHTML += 'O salario de ' + name.value + ' é de R$' + sal.value 

}
 