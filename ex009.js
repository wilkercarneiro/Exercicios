function converter(){
    let reais = document.getElementById('reais')
    reais = Number(reais.value)
    let dolar = reais * 5.10
    res.innerHTML = reais + ' convertido em dolar dá: ' + dolar
}