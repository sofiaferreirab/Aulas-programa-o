# Tarefa de casa - Loja de Roupas CLI

## Descrição

Você deve criar uma aplicação de linha de comando (CLI) para uma loja de roupas simples. Inicialmente apenas cadastraremos uma roupa. A aplicação deve fazer o seguinte:

1. Imprimir na tela uma mensagem de boas-vindas.
2. Deve perguntar o nome da roupa a ser cadastrada e armazenar em uma variável;
3. Deve perguntar se a roupa é masculina ou feminina e armazenar em uma variável;
4. Deve perguntar a marca da roupa a ser cadastrada e armazenar em uma variável;
5. Deve perguntar o preço da roupa a ser cadastrada e armazenar em uma variável;
6. Deve perguntar a cor da roupa a ser cadastrada e armazenar em uma variável;
7. Deve perguntar o tamanho da roupa a ser cadastrada e armazenar em uma variável;
8. Deve perguntar a quantidade de roupas a ser cadastrada e armazenar em uma variável;
9. Deve perguntar se a roupa é nova ou usada e armazenar em uma variável;
10. Imprimir na tela todas as informações da roupa cadastrada.

## Requisitos

### Siga os passos abaixo para criar a aplicação

1. Crie um arquivo chamado "lojaRoupas.js" na pasta "tarefas_casa/loja_roupas_cli";
2. Defina as variáveis necessárias para armazenar as informações da roupa;
3. Importe a biblioteca prompt-sync para fazer perguntas ao usuário no topo do arquivo;
4. Instalar a biblioteca prompt-sync com o comando `npm install prompt-sync`;
  **OBS: você precisar estar na pasta do projeto para instalar a biblioteca**
5. Depois de receber todas as informações, imprima na tela todas as informações da roupa cadastrada. Algo tipo:

    >Roupa cadastrada com sucesso!
    >
    >Nome: Camiseta
    >Sexo: Masculino
    >Marca: Nike
    >Preço: R$ 49,90
    >Cor: Azul
    >Tamanho: M
    >Quantidade: 10
    >Usada: Não
6. Execute o arquivo com o comando `node lojaRoupas.js` e verifique se tudo está funcionando corretamente.

## Envie as alterações para o repositório do Github

1. Adicione os arquivos ao repositório com o comando `git add .`;
2. Faça um commit com o comando `git commit -m "Criar aplicação CLI de loja de roupas"`;
3. Envie as alterações para o repositório remoto com o comando `git push`.
