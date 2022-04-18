function calcular(){
    let km = document.getElementById('km')
    km = Number(km.value)
    if (km > 200){
        let pass = 0.45 * km
        res.innerHTML = 'O valor da passagem é: ' + pass + 'R$'
    } else{
        let pass = 0.50 * km
        res.innerHTML = 'O valor da passagem é ' + pass + 'R$'
    }
}