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
    const regexExpression = /[aeiouàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/gi;
    const vowelsFound = word.toLowerCase().match(regexExpression);
    return vowelsFound ? vowelsFound.length : 0;
}
// a) Exemplo de uso com uma palavra recebida via parâmetro da função.
console.log("# função para contagem de vogais de uma palavra dada");
console.log('# teste executado par a palavra: "Hernandez"');
console.log(`A quantidade de vogais da palavra informada é: [${getNumberOfVowels("Hernandez")}]`);
// b) Exemplo de uso com uma palavra recebida via input no formulário.
function showNumberOfVowels() {
    const inputWord = document.getElementById("input-task-1");
    const numberOfVowels = getNumberOfVowels(inputWord.value);
    let divOutput = document.getElementById("div-output");
    if (divOutput) {
        divOutput.innerHTML = `# A quantidade de vogais é: ${numberOfVowels.toString()}`;
    }
}
