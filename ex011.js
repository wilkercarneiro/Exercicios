function calcular(){
    let vp = document.getElementById('vp')
    let desc = document.getElementById('desc')
    vp = Number(vp.value)
    desc = Number(desc.value)
    let vdesc = (desc / 100) * vp
    let vpagar = vp - vdesc
    res.innerHTML = 'Com o desconto de ' + desc + '% você irá pagar ' + vdesc + 'R$ a menos, e assim o valor ficar por ' + vpagar + 'R$'

}