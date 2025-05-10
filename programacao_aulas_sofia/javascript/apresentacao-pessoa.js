const nome = "Filipe"; // String (texto)
const idade = 17; // Number (número)
const ehGeneroFeminino = false; // Booleano (verdadeiro ou falso) true = verdadeiro e false = falso


var mensagemGenero;
if (idade < 18 && ehGeneroFeminino) {
    mensagemGenero = "uma menina";
} else if (idade < 18 && !ehGeneroFeminino) {
    mensagemGenero = "um menino"
} else if (idade >= 18 && ehGeneroFeminino) {
    mensagemGenero = "uma mulher";
} else if (idade >= 18 && !ehGeneroFeminino) {
    mensagemGenero = "um homem";
}


const textoDeApresentacao = `Meu nome é ${nome}, e eu sou ${mensagemGenero} de ${idade} anos`;

console.log(textoDeApresentacao);



// Por que operador booleano é importante?
// ex:
// const ligadoNaTomada = false;
// const aperteiNoBotaoDeLigar = true;
// const energiaPaga = true;

// const arCondicionadoLigado = ligadoNaTomada && aperteiNoBotaoDeLigar && energiaPaga;
// console.log(arCondicionadoLigado);



// Constantes e variáveis
// expressão 1: x + 2x + 3 = 0 -> 3x + 3 = 0 -> 3x = -3 -> x = -3/3 -> x = -1
// expressão 2: 2x + 3x + 3 = 0 -> 5x + 3 = 0 -> 5x = -3 -> x = -3/5
// x -> variável
// 3 -> constante


// = -> atribuição de valor
// == -> comparação de valor
// === -> comparação de valor e tipo

// Palavras reservadas constantes e variáveis
// const -> constante
// let -> variável
// var -> variável (antigo)

// Operadores lógicos

// >  maior                             ex:  1 >  2  false
// <  menor                             ex:  1 <  2  true
// >= maior ou igual                    ex1:  2 > OU = 2 false
// <=  menor ou igual                           F OU V        V
//                                      ex2:  3 >    = 2      V
//                                              V OU F
//                                      ex3:  4 >    = 4
//                                              F OU V        V
//                                      ex4:  5 >    = 6      F
//                                              F OU F

// ||  OU      
//                                      ex1: 2 > 3 || 3 > 2
//                                             F   ||   V   =   V
//                                      ex2: 5 > 6 || 15 > 4
//                                             F   ||   V   =   V                                 
//                                      ex3: 7 > 5 || 16 > 17
//                                             V   ||    F  =   V
//                                      ex4: 10 > 2 || 100 > 2
//                                             V   ||    V      V
//                                      ex5: 3 > 4 || 1 > 2
//                                             F   ||   F       F


// &&  E
//                                      ex1: 2 > 3 && 3 > 2
//                                             F   &&   V      =   F
//                                      ex2: 5 > 6 && 15 > 4
//                                             F   &&    V     =   F
//                                      ex3: 7 > 5 && 16 > 17
//                                             V   &&    F     =   F
//                                      ex4: 10 > 2 && 100 > 2
//                                             V   &&    V     =   V
//                                      ex5: 3 > 4 && 1 > 2
//                                             F   &&   F      =   F


// ! -> NÃO
//                                      ex1: !true
//                                             
//                                      ex2: !false
//                                             


// ==  igual - comparação
//                                      ex1: 2 == 3
//                                              F
//                                      ex2: 3 == 3
//                                              V
//                                      ex3: 4 == 3
//                                              F
//                                      ex4: 5 == 3
//                                              F
//                                      ex5: 6 == 3
//                                              F
//                                      ex6: "Filipe" == "Filipe"
//                                              V
//                                      ex7:  "Filipe" == "Sofia"
//                                              F
//                                      ex8:  "2" == 2
//                                              V

// != -> diferente
//                                      ex1: 2 != 3
//                                              V
//                                      ex2: 3 != 3
//                                              F
//                                      ex3: 4 != 3
//                                              V
//                                      ex4: 5 != 3
//                                              V
//                                      ex5: 6 != 3
//                                              V
//                                      ex6: true != true
//                                              F
//                                      ex7: "Filipe" != "Filip"
//                                              V
//                                      ex8:  "3" != 3
//                                              F

// ===  igual e do mesmo tipo
//                                      ex1: "2" === 2
//                                              F
//                                      ex2:  2 === 2
//                                              V
//                                      ex3:  "true" === true
//                                              F

// !==  diferente e de tipos diferentes
//                                      ex1: "5" !== 5
//                                               V
//                                      ex2: "Filipe" !== "Filip"
//                                            tipo-diferente? F    valor-diferente? V
//                                                      V
//                                      ex3:  "7" !== "7"
//                                            tipo-diferente? F    valor-diferente? V
//                                                      V
//                                      ex4:  "10" !== 10
//                                                      V
//                                      ex5:  "false" !== false
//                                            tipo-diferente? V    valor-diferente? F
//                                                      V