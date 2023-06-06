/*
var nome = "douglas"
console.log("Menu nome é " + nome)
*/

var nota1 = Number(prompt("Digite a nota 1"))
var nota2 = Number(prompt("Digite a nota 2"))
var nota3 = Number(prompt("Digite a nota 3"))
var nota4 = Number(prompt("Digite a nota 4"))

var resultado = (nota1 + nota2 + nota3 + nota4) / 4

if(resultado >= 7) {
    console.log("aluno aprovado")
} else {
    console.log("aluno em recuperacao")
}

