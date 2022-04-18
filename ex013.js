function calcular(){
    let km = document.getElementById('km')
    let dias = document.getElementById('dias')
    km = Number(km.value)
    dias = Number(dias.value)
    let km1 = km * 0.20
    let dias1 = dias * 90
    let vpagar = km1 + dias1
    res.innerHTML = 'Você rodou por ' + dias + ' dias e fez um total de ' + km + 'km então o valor total a pagar é de: ' + vpagar + 'R$'
}