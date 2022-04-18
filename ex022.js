function calcular (){
    let nome = document.getElementById('name')
    let sex = document.getElementsByName('txtsex')
    let valor = document.getElementById('valorc')
    valor = Number(valor.value)
    
    if (sex[1].checked){
        let desc = (15 / 100) * valor
        let valorf = valor - desc
       
        res.innerHTML = 'A cliente tem ' + desc + 'R$ de desconto. A compra ficou por: ' + valorf
    
    } else {
        let desc = (5 / 100) * valor
        let valorf = valor - desc
        res.innerHTML = 'O cliente tem ' + desc + 'R$ de desconto. A compra ficou por: ' + valorf
    }
}