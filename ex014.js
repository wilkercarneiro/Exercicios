function calcular(){
    let dtrab = document.getElementById('dtrab')
    dtrab = Number(dtrab.value)
    let vhora = 25 * 8
    let soma = dtrab * vhora
    res.innerHTML = 'O funcionario trabalhou ' + dtrab + ' dias por 8h recebendo 25R$ por hora. Sendo assim seu salario é de ' + soma + 'R$'

}