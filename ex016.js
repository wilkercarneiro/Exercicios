function calcular(){
    let vel = document.getElementById('vel')
    vel = Number(vel.value)
    let mult = (vel - 80) * 5
    if (vel > 80){
        res.innerHTML = '[VOCÊ FOI MULTADO] Sua multa é de: ' + mult + 'R$'
    } else {
        res.innerHTML = 'Continue nessa velocidade e nao ultrapasse os 80km'
    }
}