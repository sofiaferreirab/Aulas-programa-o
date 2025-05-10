# Expressões Matemáticas, Lógicas e Mistas em JavaScript

## 📚 O que são expressões?

> Em JavaScript, **expressões** são combinações de valores, variáveis, operadores e funções que resultam em um valor.

- Uma expressão pode ser simples (`2 + 2`) ou complexa (`a * (b + c) / d`).
- O JavaScript **avalia** a expressão e **resolve** para um **valor**.

---

## ➗ Expressões Matemáticas

Expressões matemáticas usam **operadores aritméticos**.

### Principais operadores:

| Operador | Significado            | Exemplo    | Resultado |
|:---------|:------------------------|:-----------|:----------|
| `+`      | Adição                   | `3 + 2`    | `5`       |
| `-`      | Subtração                | `5 - 2`    | `3`       |
| `*`      | Multiplicação             | `4 * 2`    | `8`       |
| `/`      | Divisão                  | `10 / 2`   | `5`       |
| `%`      | Resto da divisão (módulo) | `10 % 3`   | `1`       |
| `**`     | Exponenciação (2³)          | `2 ** 3`   | `8`       |

---

## 🤔 Expressões Lógicas

Expressões lógicas são usadas para **comparar valores** e **tomar decisões**.

### Operadores de comparação:

| Operador | Significado                         | Exemplo         | Resultado |
|:---------|:-------------------------------------|:----------------|:----------|
| `==`     | Igualdade de valor                   | `5 == '5'`      | `true`    |
| `===`    | Igualdade estrita (valor e tipo)      | `5 === '5'`     | `false`   |
| `!=`     | Diferente de valor                   | `5 != 3`        | `true`    |
| `!==`    | Diferente estrito (valor e tipo)      | `5 !== '5'`     | `true`    |
| `>`      | Maior que                            | `7 > 5`         | `true`    |
| `<`      | Menor que                            | `3 < 5`         | `true`    |
| `>=`     | Maior ou igual                       | `5 >= 5`        | `true`    |
| `<=`     | Menor ou igual                       | `4 <= 5`        | `true`    |

### Operadores lógicos:

| Operador | Significado     | Exemplo            | Resultado |
|:---------|:----------------|:-------------------|:----------|
| `&&`     | E (AND)          | `true && false`   | `false`   |
| `||`     | Ou (OR)          | `true || false`   | `true`    |
| `!`      | Negação (NOT)    | `!true`           | `false`   |

---

## ⚡ Ordem de Precedência dos Operadores

### 1️⃣ Ordem Matemática

1. Parênteses `()`
2. Exponenciação `**`
3. Multiplicação `*`, Divisão `/`, Módulo `%`
4. Adição `+` e Subtração `-`

### 2️⃣ Ordem Lógica

1. Parênteses `()`
2. Negação `!`
3. E lógico `&&`
4. Ou lógico `||`

### 3️⃣ Ordem Mista

1. Parênteses `()`
2. Operadores aritméticos (`**`, `*`, `/`, `%`, `+`, `-`)
3. Operadores de comparação (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`)
4. Operadores lógicos (`!`, `&&`, `||`)

---

## 🔀 Expressões Mistas

Em programas reais, expressões combinam **cálculos matemáticos**, **comparações** e **operações lógicas**!

## Exemplos de Expressões Mistas

### Exemplo 1: Verificar aprovação com média e presença

```javascript
let nota1 = 7;
let nota2 = 8;
let nota3 = 6;
let frequencia = 80; // porcentagem

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7 && frequencia >= 75) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado.");
}
```

### Exemplo 2: Cálculo de compra com saldo e desconto

```javascript
let saldo = 300;
let precoProduto = 100;
let quantidade = 3;
let temDesconto = true;

let valorFinal = precoProduto * quantidade;
if (temDesconto) {
  valorFinal = valorFinal * 0.9; // 10% de desconto
}

if (saldo >= valorFinal && valorFinal < 400) {
  console.log("Compra aprovada!");
} else {
  console.log("Saldo insuficiente ou valor alto demais.");
}
```

### Exemplo 3: Verificação de tempo e condições climáticas

```javascript
let temperatura = 22;
let chovendo = false;
let horario = 18; // 24h

if ((temperatura >= 20 && temperatura <= 30) && !chovendo && (horario >= 16 && horario <= 20)) {
  console.log("Perfeito para passear!");
} else {
  console.log("Melhor ficar em casa.");
} 
```

### Exemplo 4: Aprovação automática ou recuperação

```javascript
let prova = 5;
let trabalho = 9;
let projeto = 7;

let mediaFinal = (prova * 0.5) + (trabalho * 0.3) + (projeto * 0.2);

if (mediaFinal >= 7 || (mediaFinal >= 5 && trabalho >= 8)) {
  console.log("Aprovado (normal ou recuperação)!");
} else {
  console.log("Reprovado.");
}
```

### Exemplo 5: Validação de login complexo

```javascript
let senha = "admin123";
let usuario = "admin";
let tentativas = 1;

if ((usuario === "admin" || usuario === "root") && senha.length >= 6 && tentativas <= 3) {
  console.log("Login permitido.");
} else {
  console.log("Acesso bloqueado.");
}
```