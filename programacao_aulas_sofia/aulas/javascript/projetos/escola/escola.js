// importar bibliota prompt-sync
const prompt = require('prompt-sync')();

// string, number, boolean

// array de nomeCompleto, array de genero, array de idade, array de serie, array de enderecoCompleto
// array ele é basicamente uma "lista" de valores


// declaração de variáveis
let nomeCompleto = [];
let genero = [];
let idade = [];
let serie = [];
let enderecoCompleto = [];

// mensagem inicial
console.log("Bem-vindo! Cadastre um aluno!");
console.log("\n");

// formulário para atribuição de valores inseridos pelo usuário às variáveis declaradas anteriormente (usando função pronta da biblioteca prompt-sync)
for(i = 0 ; i <= 2 ; i++) {
  console.log(`Aluno ${i + 1}`)
  nomeCompleto.push(prompt("Digite o nome completo do aluno: "));
  genero.push(prompt("Digite o gênero do aluno (Masculino/Feminino): "));
  idade.push(prompt("Digite a idade do aluno: "));
  serie.push(prompt("Digite a série do aluno: "));
  enderecoCompleto.push(prompt("Digite o endereço completo do aluno: "));
  console.log("\n")
}

// retorno para o usuário
console.log("\n");
console.log(`Aluno cadastrado`);
console.log("\n");
console.log(`Nome completo: ${nomeCompleto}`);
console.log(`Gênero: ${genero}`);
console.log(`Idade: ${idade}`);
console.log(`Série: ${serie}`);
console.log(`Endereço completo: ${enderecoCompleto}`);




