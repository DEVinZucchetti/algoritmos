var codigo = Number(prompt("Digite o código do item"));
var quantidade = Number(prompt("Digite a quantidade desejada"));

switch (codigo) {
  case 100: {
    calcularPreco(1.20, quantidade)
    break;
  }
  case 101: {
    calcularPreco(1.30, quantidade)
    break;
  }
  case 102:
    calcularPreco(1.50, quantidade)
    break;
  case 103: {
    calcularPreco(1.20, quantidade)
    break;
  }
  case 104: {
    calcularPreco(1.30, quantidade)
    break;
  }
  case 105: {
    calcularPreco(1.0, quantidade)
    break;
  }
  default:
    console.log("Código inválido");
}

function calcularPreco(preco, quantidade) {
  var valorTotal = preco * quantidade;
  console.log("Valor a ser pago: R$ " + valorTotal.toFixed(2));
}