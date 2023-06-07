var pesoProduto = Number(prompt("Digite o peso do produto"))
var distancia = Number(prompt("Digite a distância do trajeto"))

var custoPeso =  pesoProduto * 0.50
var custoDistancia = distancia * 0.10
var custoFrete = custoPeso + custoDistancia

console.log("O custo total é " + custoFrete + ' reais')
