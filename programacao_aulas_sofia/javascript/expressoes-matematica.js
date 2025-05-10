// Operadores Matemáticos Básicos
//
// +  Adição
// Exemplo: 1 + 2 = 3

// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o número 1: "));
// const n2 = Number(prompt("Digite o número 2: "));


// const soma = n1 + n2;

// console.log(soma);



//
// -  Subtração
// Exemplo: 2 - 1 = 1
//
// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o primeiro número: "));
// const n2 = Number(prompt("Digite o segundo número: "));

// const subtracao = n1 - n2;

// console.log(subtracao);

// *  Multiplicação
// Exemplo: 2 * 3 = 6
//

// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o primeiro número: "));
// const n2 = Number(prompt("Digite o segundo número: "));

// const produto = n1 * n2;

// console.log(produto);

// /  Divisão
// Exemplo 1: 6 / 2 = 3
// Exemplo 2: 5 / 2 = 2.5
// Exemplo 3: 5 / 4 = 1.25
//
// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o primeiro número: "));
// const n2 = Number(prompt("Digite o segundo número: "));

// const quociente = n1 / n2;

// console.log(quociente);

// ** Divisão Inteira - O javascript não tem esse operador, mas podemos simular fazendo a divisão e arredondando para baixo com Math.floor
// Exemplo 1: Math.floor(5 / 2) = 2
// Exemplo 2: Math.floor(15 / 4) = 3

// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o primeiro número: "));
// const n2 = Number(prompt("Digite o segundo número: "));

// const quociente = Math.floor(n1 / n2);

// console.log(quociente);

// %  Resto da Divisão
// Exemplo 1: 5 % 2 = 1
// Exemplo 2: 15 % 4 = 

// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o primeiro número: "));
// const n2 = Number(prompt("Digite o segundo número: "));

// const restoDivisao = n1 % n2;

// console.log(restoDivisao);


// ** Potência
// Exemplo 1: 2 ** 2 = 4
// Exemplo 2: 2 ** 3 = 8

// const prompt = require('prompt-sync')();

// const n1 = Number(prompt("Digite o primeiro número: "));
// const n2 = Number(prompt("Digite o segundo número: "));

// const potencia = n1 ** n2;

// console.log(potencia);

// Ordem de Precedência
// Exemplo: 2 + 3 * 4 = 3 * 4 + 2 = 12 + 2 = 14

const prompt = require('prompt-sync')();
const n1 = Number(prompt("Digite o primeiro número: "));
const n2 = Number(prompt("Digite o segundo número: "));
const n3 = Number(prompt("Digite o terceiro número: "));
const n4 = Number(prompt("Digite o quarto número: "));
const n5 = Number(prompt("Digite o quinto número: "));

const resultado = n1 + n2 * n3 - Math.floor(n4 / n5 ** 2);
// 2 + 5 * 10 - 33 / 2 ** 2 

// 2 + 50 - 8 
console.log(resultado);



// 10 + 24 / 3 * 2 ** 2 = 10 + 24 / 3 * 4 = 10 + 24 / 12 = 10 + 2 = 12

// n2 2² = 4
