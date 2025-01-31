
function calcula() {
    const peso = document.querySelector("#txt_peso")
    const altura = document.querySelector("#txt_altura")

    let calc = peso.value / (altura.value * altura.value)
    let imc = calc.toFixed(2)

    if (imc < 18.5) {
        resultado.innerHTML = ` Você está abaixo do peso. <br> Seu Imc: ${imc} `

    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = ` Você está no peso normal. <br> Seu Imc: ${imc} `
    } else {
        resultado.innerHTML = ` Você está acima do peso. <br> Seu Imc: ${imc} `

    }
}
