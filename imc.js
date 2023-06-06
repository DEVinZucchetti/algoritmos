var peso = Number(prompt("Digite o seu peso:"))

var altura = Number(prompt("Digite o sua altura:"))

var imc = peso / (altura * altura)

console.log(imc)

if (imc <= 18.5) {
  console.log("Você está abaixo do peso!")
}
else if (imc >= 18.6 && imc <= 24.9) {
  console.log("Você está com peso ideal!")
}
else if (imc >= 25.0 && imc <= 29.9) {
  console.log("Você está levemente acima do peso!")
}
else if (imc >= 30 && imc <= 34.9) {
  console.log("Você está com Obesidade Grau I!")
}
else if (imc >= 35 && imc <= 39.9) {
  console.log("Você está com Obesidade Grau II!")
} else {
  console.log("Você está com Obesidade Grau III!")
}