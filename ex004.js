function calc() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let res = document.getElementById('res')
    let soma = Number(num1.value) + Number(num2.value)

    res.innerHTML = 'A soma entre ' + num1.value + ' e ' + num2.value + ' é de = ' + soma
}