"use strict";
// função que retorna a quantidade de vogais da palavra passada. 
function getNumberOfVowels(word) {
    const regexExpression = /[aeiouàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/gi;
    const vowelsFound = word.match(regexExpression);
    return vowelsFound ? vowelsFound.length : 0;
}
// a) Exemplo de uso com uma palavra recebida via parâmetro da função.
console.log(getNumberOfVowels("Hernandez"));
// b) Exemplo de uso com uma palavra recebida via input no formulário.
function showNumberOfWowels() {
    const inputWord = document.getElementById('inputPalavra');
    const numberOfVowels = getNumberOfVowels(inputWord.value);
    alert('A quantidade de vogais da palavra informada é: ' + numberOfVowels);
}
