function calcular(){
    let alt = document.getElementById('alt')
    let larg = document.getElementById('larg')
    alt = Number(alt.value)
    larg = Number(larg.value)
    let litro = 2
    let metrosq = alt * larg
    let tinta = metrosq / 2
    res.innerHTML = 'Você vai pintar uma area de ' + metrosq + 'm². Para uma area desse tamanho, você irá precisar de ' + tinta + ' galões de tinta para pintar tudo.'

}