const prompt = require('prompt-sync')();

let nomeCompleto;
let genero;
let idade;
let serie;
let enderecoCompleto;

console.log("Bem-vindo! Cadastre um aluno!");
console.log("\n");
nomeCompleto = prompt("Digite o nome completo do aluno: ");
genero = prompt("Digite o gênero do aluno (Masculino/Feminino): ");
idade = prompt("Digite a idade do aluno: ");
serie = prompt("Digite a série do aluno: ");
enderecoCompleto = prompt("Digite o endereço completo do aluno: ");
console.log("\n");
console.log(`Aluno cadastrado`);
console.log("\n");
console.log(`Nome completo: ${nomeCompleto}`);
console.log(`Gênero: ${genero}`);
console.log(`Idade: ${idade}`);
console.log(`Série: ${serie}`);
console.log(`Endereço completo: ${enderecoCompleto}`);




