"use strict";
/*
    +-----------------------------------------------------------------------------------------------
    |
    |   # Exercicio 01
    |
    +-----------------------------------------------------------------------------------------------
    */
// função que retorna a quantidade de vogais da palavra passada.
function getNumberOfVowels(word) {
    let regexExpression = /[aeiouàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/gi;
    let vowelsFound = word.match(regexExpression);
    return vowelsFound ? vowelsFound.length : 0;
}
/*
    +
    |
    |   a) Exemplo de uso com uma palavra recebida via parâmetro da função.
    |
    +
    */
/*
    let word = "Hernandez";
    console.log("# Na palavra ["+word+"] temos ["+getNumberOfVowels(word)+"] vogais");
    */
/*
    +
    |
    |   b) Exemplo de uso com uma palavra recebida via input no formulário.
    |
    +
    */
function showNumberOfWowels() {
    let inputWord = document.getElementById("inputPalavra");
    let numberOfVowels = getNumberOfVowels(inputWord.value);
    let output = "A quantidade de vogais da palavra informada é: " + numberOfVowels;
    let outputWord = document.getElementById("output-palavra");
    outputWord.value = output;
}
/*
    +-----------------------------------------------------------------------------------------------
    |
    |   # Exercicio 02
    |
    +-----------------------------------------------------------------------------------------------
    */
// array original com dados
let lista = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];
//console.log("# Lista de dados em array para Exercício 02:");
//console.table(lista);
// classe de manipulação para facilitar o trabalho
class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
}
// conversão de array para lista de objetos da classe Person
function convertArrayToList(array) {
    return array.map((obj) => new Person(obj.id, obj.name, obj.bio));
}
// efetiva mudança
let newList = convertArrayToList(lista);
//console.log("# Lista de objetos para Exercício 02:");
//console.log(newList);
//---------------------------------------------------------------------------------------
/*
    +
    |
    |   a) Crie uma função que retorne a bio do id passado
    |
    |   [ PARADIGMA FUNCIONAL ]
    |
    +
    */
function functionalGetBioById(id) {
    let person = newList.find((item) => item.id === id);
    return person ? person.bio : "";
}
// rotina para teste
/*
    console.log("# a) Crie uma função que retorne a bio do id passado");
    console.log("# paradigma funcional: ");
    console.log(functionalGetBioById(1));
    console.log("- - -");
    */
function calculateTask2A() {
    let input = parseInt(document.getElementById("input-2-a").value);
    let result = functionalGetBioById(input);
    let output = "";
    result
        ? (output = `A Bio do ID informado como [${input}] é: ${result}`)
        : (output = `Não foi encontrada Bio do ID informado como [${input}]`);
    document.getElementById("output-2-a").value = output;
}
/*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */
function imperativeGetBioById(id) {
    let result = "";
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        if (item.id === id) {
            result = item.bio;
        }
    }
    return result;
}
/*
    console.log("# paradigma imperativo: ");
    console.log(imperativeGetBioById(1));
    console.log("- - -");
    */
//---------------------------------------------------------------------------------------
/*
    +
    |
    |   b) Crie uma função que retorne o name do id passado
    |
    |   [ PARADIGMA FUNCIONAL ]
    |
    +
    */
function functionalGetNameById(id) {
    let person = newList.find((item) => item.id === id);
    return person ? person.name : "";
}
/*
    console.log("b) Crie uma função que retorne o name do id passado");
    console.log("# paradigma funcional: ");
    console.log(functionalGetNameById(1));
    console.log("- - -");
    */
function calculateTask2B() {
    let input = parseInt(document.getElementById("input-2-b").value);
    let result = functionalGetNameById(input);
    let output = "";
    result
        ? (output = `O nome do ID informado como [${input}] é: ${result}`)
        : (output = `Não foi encontrada Nome do ID informado como [${input}]`);
    document.getElementById("output-2-b").value = output;
}
/*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */
function imperativeGetNameById(id) {
    let result = "";
    for (let i = 0; i < lista.length; i++) {
        let item = lista[i];
        if (item.id === id) {
            result = item.name;
        }
    }
    return result;
}
/*
    console.log("# paradigma imperativo: ");
    console.log(imperativeGetNameById(1));
    console.log("- - -");
    */
//---------------------------------------------------------------------------------------
/*
    +
    |
    |   c) Crie uma função que apague um item da lista a partir de um id passado
    |
    |   [ PARADIGMA FUNCIONAL ]
    |
    +
    */
function functionalDeleteItemById(id) {
    let index = newList.findIndex((item) => item.id === id);
    let result;
    if (index !== -1) {
        newList.splice(index, 1);
        result = "success";
    }
    else {
        result = "nada a excluir";
    }
    return result;
}
/*
    console.log("c) Crie uma função que apague um item da lista a partir de um id passado")
    console.log("# paradigma funcional: ");
    functionalDeleteItemById(2);
    console.table(newList);
    console.log("- - -");
    */
function calculateTask2C() {
    console.log("# inicio de execução de task 2 - c");
    let input = parseInt(document.getElementById("input-2-c").value);
    console.log("# input: " + input);
    let output = "";
    functionalDeleteItemById(input) == "success"
        ? (output = `O item com ID informado como [${input}] foi removido da lista`)
        : (output = `Não existe na lista um item com o ID informado como [${input}]`);
    console.log("# output: " + output);
    document.getElementById("output-2-c").value = output;
    console.log("# conclusão de execução de task 2 - c");
}
/*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */
function imperativeDeleteItemById(id) {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            newList.splice(i, 1);
            break;
        }
    }
}
/*
    console.log("# paradigma imperativo: ");
    imperativeDeleteItemById(1);
    console.table(newList);
    console.log("- - -");
    */
//---------------------------------------------------------------------------------------
/*
    +
    |
    |   d) Crie uma função que altere a bio ou o name a partir de um id passado
    |
    |   [ PARADIGMA FUNCIONAL ]
    |
    +
    */
function functionalUpdateItemById(id, newContent, type) {
    let item = newList.find((item) => item.id === id);
    let result = "";
    if (item) {
        type == "bio" ? (item.bio = newContent) : "";
        type == "name" ? (item.name = newContent) : "";
    }
    else {
        result = "not found";
    }
    return result;
}
/*
    console.log("d) Crie uma função que altere a bio ou o name a partir de um id passado");
    console.log("# paradigma funcional: ");
    functionalUpdateItemById(3,"Aluno de Bootcamp","bio");
    functionalUpdateItemById(3,"Hernandez","name");
    console.table(newList);
    console.log("- - -");
    */
function calculateTask2DBio() {
    let inputId = parseInt(document.getElementById("input-2-d-id").value);
    let inputText = document.getElementById("input-2-d-text").value;
    let result = functionalUpdateItemById(inputId, inputText, "bio");
    let output = "";
    result == "not found"
        ? (output = `Não foi encontrada dados para alterar referentes ao ID informado como [${inputId}]`)
        : (output = `A Bio referente ao ID informado como [${inputId}] foi alterada!`);
    document.getElementById("output-2-d").value = output;
}
function calculateTask2DName() {
    let inputId = parseInt(document.getElementById("input-2-d-id").value);
    let inputText = document.getElementById("input-2-d-text").value;
    let result = functionalUpdateItemById(inputId, inputText, "name");
    let output = "";
    result == "not found"
        ? (output = `Não foi encontrada dados para alterar referentes ao ID informado como [${inputId}]`)
        : (output = `O Name referente ao ID informado como [${inputId}] foi alterada!`);
    document.getElementById("output-2-d").value = output;
}
/*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */
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
/*
    console.log("# paradigma imperativo: ");
    imperativeUpdateItemById(4,"Profissional de tecnologia","bio");
    imperativeUpdateItemById(4,"Giordano","name");
    console.table(newList);
    console.log("- - -");
    */
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo
