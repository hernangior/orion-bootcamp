# orion-bootcamp
New Rizon's Orion bootcamp code repository

## 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.

#### a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.

###### concluído ✔ | aguardando PR ⚠
#### b) Dar um exemplo de uso com uma palavra recebida via input no formulário.
###### concluído ✔ | aguardando PR ⚠

____

## 2 - Dado o array:

```typescript
let lista = new Array<Object> = [
{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];
```

#### a) Crie uma função que retorne a bio do id passado

###### concluído ✔ | aguardando PR ⚠
#### b) Crie uma função que retorne o name do id passado

###### concluído ✔ | aguardando PR ⚠
#### c) Crie uma função que apague um item da lista a partir de um id passado

###### concluído ✔ | aguardando PR ⚠
#### d) Crie uma função que altere a bio ou o name a partir de um id passado

###### concluído ✔ | aguardando PR ⚠
#### e) Demonstre todas as funções com o paradigma funcional e com o imperativo

###### concluído ✔ | aguardando PR ⚠

____

## Comandos úteis

```typescript
// inicializar projeto
npm init -y

// instalar pacotes
npm i [nome do pacote]

// gerar configurações
npx tsc --init

// compilar
npx tsc

//executar js
node [arquivo js]

//para usar github actions instale webpack e babel
npm install webpack webpack-cli --save-dev
npm i babel-loader

//crie o arquivo [webpack.config.js]´e insira:
const path = require('path');
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};

//para testar se tudo deu certo execute:
npm run build

```

## Autores

- [@hernangior](https://www.github.com/hernangior)
