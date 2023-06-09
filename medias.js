var nota1 = Number(prompt("Digite a primeira nota"));
var nota2 = Number(prompt("Digite a segunda nota"));
var nota3 = Number(prompt("Digite a terceira nota"));

var opcao = prompt("Digite a opção desejada:\n 1 - Média aritmética\n 2 - Média ponderada");

switch (opcao) {
    case "1": {
        var media = (nota1 + nota2 + nota3) / 3;
        console.log("A média é: " + media);
        break;
    }
    case "2": {
        var media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
        console.log("A média é: " + media);
        break;
    }  

    default: {
        console.log("opção inválida");
        break;
    }        
}



