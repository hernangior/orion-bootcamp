"use strict";
/**
 * Função que retorna a quantidade de vogais de uma palavra informada
 *
 *
 * @param word - A palavra que se deseja contar a quantidade de vogais
 * @returns A quantidade de vogais de uma palavra informada
 *
 * @beta
 */
function getNumberOfVowels(word) {
    let regexExpression = /[aeiouàáâãçèéêìíòóôõùú]/gi;
    let vowelsFound = word.toLowerCase().match(regexExpression);
    return vowelsFound ? vowelsFound.length : 0;
}
/**
 *
 * Função que retorna a quantidade de vogais de uma palavra informada
 * em um formulário HTML
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno
 *
 * @beta
 */
function showNumberOfWowels() {
    let inputWord = document.getElementById("inputPalavra");
    let numberOfVowels = getNumberOfVowels(inputWord.value);
    let output = "A quantidade de vogais da palavra informada é: " + numberOfVowels;
    let outputWord = document.getElementById("output-palavra");
    outputWord.value = output;
}
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
// classe de manipulação para facilitar o trabalho
class Person {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }
}
/**
 * Função para conversão de array para lista de objetos da classe Person
 *
 *
 * @param array - array com os dados da lista
 * @returns Array<Person> - Retorna um array de objetos do tipo Person
 *
 * @beta
 */
function convertArrayToList(array) {
    return array.map((obj) => new Person(obj.id, obj.name, obj.bio));
}
// efetiva mudança
let newList = convertArrayToList(lista);
/**
 * Função para retornar a bio do id passado
 * usando o paradigma funcional
 *
 * @param id - item de nome id do tipo número contendo o id a ser pesquisado
 * @returns string - retorna uma string referente a Bio desejada de acordo com o Id
 *
 * @beta
 */
function functionalGetBioById(id) {
    let person = newList.find((item) => item.id === id);
    return person ? person.bio : "";
}
/**
 *
 * Função que executa os procedimentos referentes a [questão 2 - letra A] em um formulário HTML
 * O objetivo da função é retornar a bio do [id] passado na página HTML como saída
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno, setado diretamente no componente HTML
 *
 * @beta
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
/**
 * Função para retornar a [bio] do [id] passado
 * usando o paradigma imperativo
 *
 * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
 * @returns string - retorna uma string referente a [Bio] desejada de acordo com o [Id]
 *
 * @beta
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
/**
 * Função para retornar o Name de acordo com o id passado
 * usando o paradigma funcional
 *
 * @param id - item de nome id do tipo número contendo o id a ser pesquisado
 * @returns string - retorna uma string referente o Name desejada de acordo com o Id
 *
 * @beta
 */
function functionalGetNameById(id) {
    let person = newList.find((item) => item.id === id);
    return person ? person.name : "";
}
/**
 *
 * Função que executa os procedimentos referentes a [questão 2 - letra B] em um formulário HTML
 * O objetivo da função é retornar o [Name] do [Id] passado na página HTML como saída
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno, setado diretamente no componente HTML
 *
 * @beta
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
/**
 * Função para retornar o Name de acordo com o id passado
 * usando o paradigma imperativo
 *
 * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
 * @returns string - retorna uma string referente o [Name] desejada de acordo com o [Id]
 *
 * @beta
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
/**
 * Função para remover o registro da lista de acordo com o id passado
 * usando o paradigma funcional
 *
 * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
 * @returns string - retorna uma string referente ao resultado do processo de exclusão
 *
 * @beta
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
/**
 *
 * Função que atualiza os valores do array de elementos no respectivo elemento HTML
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno, setado diretamente no componente HTML
 *
 * @beta
 */
function refreshArray() {
    let listString = JSON.stringify(newList, null, 2);
    listString = `
      <label>Dados do array:</label>
      <pre>
          <code>
          ${listString}
          </code>
      </pre>
      <hr>
      <label><b>De acordo com as alterações realizadas abaixo esse objeto será dinâmicamente atualizado</b></label>
      `;
    let divTask2Array = document.getElementById("div-task-2-array");
    if (divTask2Array) {
        divTask2Array.innerHTML = listString;
    }
}
/**
 *
 * Função que executa os procedimentos referentes a [questão 2 - letra C] em um formulário HTML
 * O objetivo da função é remover o registro da lista de acordo com o [id] passado via Input no HTML
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno, setado diretamente no componente HTML
 *
 * @beta
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
    refreshArray();
}
/**
 * Função para remover o registro da lista de acordo com o id passado
 * usando o paradigma imperativo
 *
 * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
 * @returns void - a função não retorna resultado
 *
 * @beta
 */
function imperativeDeleteItemById(id) {
    for (let i = 0; i < newList.length; i++) {
        if (newList[i].id === id) {
            newList.splice(i, 1);
            break;
        }
    }
}
/**
 * Função para psquisar o registro da lista de acordo com o id passado
 * após a pesquisa realizar modificação no [Name] ou [Bio] de acordo com a necessidade
 * usando o paradigma funcional
 *
 * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
 * @param newContent - item de nome [newContent] do tipo string com o novo valor para o campo
 * @param type - item de nome [type] do tipo string para se identificar o que mudará
 *
 * @returns string - a função retorna o resultado da execução para posterior validação
 *
 * @beta
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
/**
 *
 * Função que executa os procedimentos referentes a [questão 2 - letra D] em um formulário HTML
 * O objetivo da função pesquisar o [Id] passado via Input no HTML e alterar a [Bio] para o valor informado
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno, setado diretamente no componente HTML
 *
 * @beta
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
    refreshArray();
}
/**
 *
 * Função que executa os procedimentos referentes a [questão 2 - letra D] em um formulário HTML
 * O objetivo da função pesquisar o [Id] passado via Input no HTML e alterar o [Name] para o valor informado
 *
 * @param   - sem parâmetros
 * @returns void - sem retorno, setado diretamente no componente HTML
 *
 * @beta
 */
function calculateTask2DName() {
    let inputId = parseInt(document.getElementById("input-2-d-id").value);
    let inputText = document.getElementById("input-2-d-text").value;
    let result = functionalUpdateItemById(inputId, inputText, "name");
    let output = "";
    result == "not found"
        ? (output = `Não foi encontrada dados para alterar referentes ao ID informado como [${inputId}]`)
        : (output = `O Name referente ao ID informado como [${inputId}] foi alterada!`);
    document.getElementById("output-2-d").value = output;
    refreshArray();
}
/**
 * Função para pesquisar o registro da lista de acordo com o id passado
 * após a pesquisa realizar modificação no [Name] ou [Bio] de acordo com a necessidade
 * usando o paradigma imperativo
 *
 * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
 * @param newContent - item de nome [newContent] do tipo string com o novo valor para o campo
 * @param type - item de nome [type] do tipo string para se identificar o que mudará
 *
 * @returns void - a função não retorna resultado
 *
 * @beta
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
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo


