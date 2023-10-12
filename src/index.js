"use strict";
/*
+
|
|   Exercicio 01
|
+
*/
// função que retorna a quantidade de vogais da palavra passada. 
function getNumberOfVowels(word) {
    let regexExpression = /[aeiouàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/gi;
    let vowelsFound = word.match(regexExpression);
    return vowelsFound ? vowelsFound.length : 0;
}
// a) Exemplo de uso com uma palavra recebida via parâmetro da função.
/*
let word = "Hernandez";
console.log("# Na palavra ["+word+"] temos ["+getNumberOfVowels(word)+"] vogais");
*/
// b) Exemplo de uso com uma palavra recebida via input no formulário.
function showNumberOfWowels() {
    let inputWord = document.getElementById('inputPalavra');
    let numberOfVowels = getNumberOfVowels(inputWord.value);
    alert('A quantidade de vogais da palavra informada é: ' + numberOfVowels);
}
/*
+
|
|   Exercicio 02
|
+
*/
let lista = [{
        "id": 1,
        "name": "Ada Lovelace",
        "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        "id": 2,
        "name": "Alan Turing",
        "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
    },
    {
        "id": 3,
        "name": "Nikola Tesla",
        "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        "id": 4,
        "name": "Nicolau Copérnico",
        "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
//console.log("# Lista de dados em array para Exercício 02:");
//console.table(lista);
class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
}
function convertArrayToList(array) {
    return array.map((obj) => new Person(obj.id, obj.name, obj.bio));
}
let newList = convertArrayToList(lista);
//console.log("# Lista de objetos para Exercício 02:");
//console.log(newList);
// a) Crie uma função que retorne a bio do id passado
// usando [paradigma funcional]
function functionalGetBioById(id) {
    let person = newList.find((item) => item.id === id);
    return (person) ? person.bio : '';
}
//console.log(functionalGetBioById(1));
// usando [paradigma imperativo]
function imperativeGetBioById(id) {
    let result = '';
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        if (item.id === id) {
            result = item.bio;
        }
    }
    return result;
}
//console.log(imperativeGetBioById(1));
// b) Crie uma função que retorne o name do id passado
// usando [paradigma funcional]
function functionalGetNameById(id) {
    let person = newList.find((item) => item.id === id);
    return (person) ? person.name : '';
}
//console.log(functionalGetNameById(1));
// usando [paradigma imperativo]
function imperativeGetNameById(id) {
    let result = '';
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        if (item.id === id) {
            result = item.name;
        }
    }
    return result;
}
//console.log(imperativeGetNameById(1));
// c) Crie uma função que apague um item da lista a partir de um id passado
// usando [paradigma funcional]
function functionalDeleteItemById(id) {
    let index = newList.findIndex((item) => item.id === id);
    (index !== -1) ? newList.splice(index, 1) : '';
}
//functionalDeleteItemById(2);
//console.table(newList);
// usando [paradigma imperativo]
function imperativeDeleteItemById(id) {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            newList.splice(i, 1);
            break;
        }
    }
}
//imperativeDeleteItemById(1);
//console.table(newList);
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// usando [paradigma funcional]
function functionalUpdateItemById(id, newContent, type) {
    let item = newList.find((item) => item.id === id);
    if (item) {
        (type == "bio") ? item.bio = newContent : '';
        (type == "name") ? item.name = newContent : '';
    }
}
//functionalUpdateItemById(1,"Aluno de Bootcamp","bio");
//functionalUpdateItemById(1,"Hernandez","name");
//console.table(newList);
// usando [paradigma imperativo]
function imperativeUpdateItemById(id, newContent, type) {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            if (type == "bio") {
                newList[i].bio = newContent;
            }
            if (type == "name") {
                newList[i].name = newContent;
            }
            break;
        }
    }
}
//imperativeUpdateItemById(2,"Aluno de Bootcamp","bio");
//imperativeUpdateItemById(2,"Hernandez","name");
//console.table(newList);
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
