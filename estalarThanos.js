var personagens_marvel = [
    "Homem de Ferro",
    "Capitão América",
    "Thor",
    "Hulk",
    "Viúva Negra",
    "Gavião Arqueiro",
    "Pantera Negra",
]

var personagemEliminados = []
var metadePersonagens = Math.floor(personagens_marvel.length / 2) // arrendoda número em casos de divisão quebrada 

for(var contador = 0; contador < metadePersonagens; contador++) {
  eliminarPersonagem()
}

console.log("Eliminados", personagemEliminados )
console.log("Sobreviventes", personagens_marvel)

for(var contador = 0; contador < 1; contador++) {
  RessusitarPersonagem()
}

console.log("Sobreviventes dragao", personagens_marvel)

// Funções da aplicação

function eliminarPersonagem() {
  var quantidadePersonagens = personagens_marvel.length
 
  var posicaoPersonagem = parseInt(Math.random() * (quantidadePersonagens)) // gera um número aleatório entre 0 e tamanho do array
  personagemEliminados.push(personagens_marvel[posicaoPersonagem])
  personagens_marvel.splice(posicaoPersonagem, 1); // Retira do array o personagem da posição sorteada
}

function RessusitarPersonagem() {
  var quantidadePersonagemEliminados = personagemEliminados.length
  var posicaoPersonagemEliminados = parseInt(Math.random() * (quantidadePersonagemEliminados)) 
  
  personagens_marvel.push(personagemEliminados[posicaoPersonagemEliminados])
  personagemEliminados.splice(posicaoPersonagemEliminados, 1); 
}





