# orion-bootcamp
New Rizon's Orion bootcamp code repository

## 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.

#### a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
#### b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

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
  entry: './index.js',
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
