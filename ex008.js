function calcular (){
    let valor = document.getElementById('valorm')
    valor = Number(valor.value)
    let km = valor / 1000
    let hm = valor / 100
    let dam = valor / 10
    let dm = valor * 10
    let cm = valor * 100
    let mm = valor * 1000
    res.innerHTML = 'A distancia de ' + valor + ' é de: <br>KM - ' + km + '<br>HM - ' + hm + '<br>DAM - ' + dam + '<br>DM - ' + dm + '<br>CM - ' + cm + '<br>MM - ' + mm
}