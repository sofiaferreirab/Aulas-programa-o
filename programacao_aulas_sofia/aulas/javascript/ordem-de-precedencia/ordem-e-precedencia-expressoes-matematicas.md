# Expressões Matemáticas e Lógicas em JavaScript

## 📚 O que são expressões?

> Em JavaScript, **expressões** são combinações de valores, variáveis, operadores e funções que resultam em um valor.

- Uma expressão pode ser simples (`2 + 2`) ou mais complexa (`a * (b + c) / d`).
- Sempre que o JavaScript **avalia** uma expressão, ele resolve para um **valor**.

---

## ➗ Expressões Matemáticas

Expressões matemáticas utilizam **operadores aritméticos**.

### Principais operadores:

| Operador | Significado            | Exemplo    | Resultado |
|:---------|:------------------------|:-----------|:----------|
| `+`      | Adição                   | `3 + 2`    | `5`       |
| `-`      | Subtração                | `5 - 2`    | `3`       |
| `*`      | Multiplicação             | `4 * 2`    | `8`       |
| `/`      | Divisão                  | `10 / 2`   | `5`       |
| `%`      | Resto da divisão (módulo) | `10 % 3`   | `1`       |
| `**`     | Exponenciação             | `2 ** 3`   | `8`       |

### Ordem de precedência

Assim como na matemática tradicional, JavaScript respeita a **ordem das operações**:
1. Parênteses `()`
2. Exponenciação `**`
3. Multiplicação `*`, Divisão `/`, Módulo `%`
4. Adição `+` e Subtração `-`

Exemplo:

```javascript
let resultado = 3 + 4 * 2;     // resultado = 11
let resultado2 = (3 + 4) * 2;  // resultado2 = 14
