var salarioFuncionario = Number(prompt("Qual o salário do funcionário ?"))

var impostoRenda = 0

if(salarioFuncionario <= 1903.98) {
  impostoRenda = 0
} else if(salarioFuncionario >= 1903.99 && salarioFuncionario <= 2826.65 ) {
  impostoRenda = (salarioFuncionario * 0.075 ) - 142.80
} else if(salarioFuncionario >= 2826.66 && salarioFuncionario <= 3751.05) {
  impostoRenda = ( salarioFuncionario * 0.15) - 354.80
} else if(salarioFuncionario >= 3751.06 && salarioFuncionario <= 4664.68) {
  impostoRenda =( salarioFuncionario * 0.225) - 636.13
} else {
  impostoRenda = (salarioFuncionario * 0.275) - 869.36
}

var inss = 0

 if (salarioFuncionario <= 1302) {
        inss = salarioFuncionario * 0.075 // 7.5%
    } else if (salarioFuncionario >= 1302.01 && salarioFuncionario <= 2571.29) {
        inss = salarioFuncionario * 0.09 // 9%
    } else if (salarioFuncionario >= 2571.30 && salarioFuncionario <= 3856.94) {
        inss = salarioFuncionario * 0.12 // 12%
    } else {
        inss = salarioFuncionario * 0.14 //14%
    }

var salarioLiquido = salarioFuncionario - impostoRenda - inss

var salarioFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(salarioLiquido)

alert(salarioFormatado)


