var questoes = [
    `O que é um algoritmo?
    a) Um algoritmo é um conjunto de instruções para resolver um problema.
    b) Um algoritmo é um dispositivo eletrônico utilizado para armazenar dados.
    c) Um algoritmo é uma linguagem de programação.
    d) Um algoritmo é uma rede de computadores.`,

    `Quais são as características de um bom algoritmo?
    a) Precisão, eficiência e clareza.
    b) Complexidade, abstração e recursividade.
    c) Aleatoriedade, flexibilidade e diversidade.
    d) Sintaxe, semântica e pragmática.`,

    `O que é a complexidade de um algoritmo?
    a) A complexidade de um algoritmo é a quantidade de instruções que ele possui.
    b) A complexidade de um algoritmo é o tempo necessário para executá-lo.
    c) A complexidade de um algoritmo é a quantidade de memória utilizada por ele.
    d) A complexidade de um algoritmo é a dificuldade de compreendê-lo.`,

    `O que é um laço (loop) em programação?
    a) Um laço é um erro em um programa de computador.
    b) Um laço é uma estrutura de controle que repete um bloco de código várias vezes.
    c) Um laço é uma função que retorna um valor.
    d) Um laço é um tipo de dado em programação.`,

    `O que é uma estrutura condicional?
    a) Uma estrutura condicional é um tipo de dado em programação.
    b) Uma estrutura condicional é um conjunto de instruções para resolver um problema.
    c) Uma estrutura condicional é uma função que retorna um valor.
    d) Uma estrutura condicional é uma estrutura de controle que permite tomar decisões com base em uma condição.`,

    `O que é a recursão?
    a) A recursão é um tipo de erro em programação.
    b) A recursão é uma técnica que permite que uma função chame a si mesma.
    c) A recursão é uma estrutura de controle que repete um bloco de código várias vezes.
    d) A recursão é um conjunto de instruções para resolver um problema.`,

    `O que é a ordenação de dados?
    a) A ordenação de dados é uma técnica que permite encontrar um item específico em uma lista.
    b) A ordenação de dados é uma técnica que permite agrupar elementos em categorias.
    c) A ordenação de dados é uma técnica que permite organizar os elementos de uma lista em uma determinada ordem.
    d) A ordenação de dados é uma técnica que permite eliminar elementos duplicados de uma lista.`,

    `O que é a busca binária?
    a) A busca binária é uma técnica de pesquisa que divide repetidamente uma lista pela metade.
    b) A busca binária é uma técnica de ordenação de dados que utiliza uma árvore binária.
    c) A busca binária é uma técnica de ordenação de dados que utiliza uma pilha.
    d) A busca binária é uma técnica de criptografia que utiliza uma chave binária.`,

    `O que é um algoritmo de ordenação?
    a) Um algoritmo de ordenação é um dispositivo eletrônico utilizado para armazenar dados de forma organizada.
    b) Um algoritmo de ordenação é um conjunto de instruções que organiza os elementos de uma lista em uma determinada ordem.
    c) Um algoritmo de ordenação é uma função que retorna um valor ordenado.
    d) Um algoritmo de ordenação é uma linguagem de programação especializada em organização de dados.`,

    `O que é a eficiência de um algoritmo?
    a) A eficiência de um algoritmo é a medida da sua precisão na resolução de um problema.
    b) A eficiência de um algoritmo é a quantidade de memória utilizada por ele.
    c) A eficiência de um algoritmo é a quantidade de instruções que ele possui.
    d) A eficiência de um algoritmo é a medida da sua velocidade de execução.`
]


for(var contador = 0; contador < questoes.length; contador++ ) {
  alert(`questao ${contador + 1}:  
  ${questoes[contador]}`)
}
