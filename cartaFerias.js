var dataHoje = new Date().toLocaleDateString()

var nomeFuncionario = prompt("Digite o nome do funcionário")
var dataInicio = prompt("Digite a data de início das férias")
var dataFim = prompt("Digite a data de fim das férias")


// Forma com concatenação
var resultado = "Caro(a) responsável  \n  Gostaria de solicitar minhas férias:  \n Nome do funcionário: " + nomeFuncionario 

var cartaFerias = `Caro(a) responsável 
Gostaria de solicitar minhas férias: 

Nome do funcionário: ${nomeFuncionario} 
Data de inicio: ${dataInicio}
Data de fim: ${dataFim}

Agradeço a atenção

Atenciosamente, ${nomeFuncionario}

Gerado em ${dataHoje}
`

console.log(cartaFerias)



