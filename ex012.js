function calcular(){
    let sal = document.getElementById('sal')
    let aum_porc = document.getElementById('aum')
    sal = Number(sal.value)
    aum_porc = Number(aum_porc.value)
    aum = (aum_porc / 100) * sal
    sal_atual = aum + sal
    res.innerHTML = 'Com um aumento de ' + aum_porc + '% o novo salario é de: ' + sal_atual

}