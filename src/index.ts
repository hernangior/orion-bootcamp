  /**
   * Função que retorna a quantidade de vogais de uma palavra informada
   *
   *
   * @param word - A palavra que se deseja contar a quantidade de vogais
   * @returns A quantidade de vogais de uma palavra informada
   *
   * @beta
   */
function getNumberOfVowels(word: string): number {
    const regexExpression = /[aeiouàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/gi;
    const vowelsFound     = word.toLowerCase().match(regexExpression);
    return vowelsFound    ? vowelsFound.length : 0;
}

// a) Exemplo de uso com uma palavra recebida via parâmetro da função.
console.log(getNumberOfVowels("Hernandez"));

// b) Exemplo de uso com uma palavra recebida via input no formulário.
function showNumberOfVowels() : void {
    const inputWord      = document.getElementById('inputPalavra') as HTMLInputElement;
    const numberOfVowels = getNumberOfVowels(inputWord.value);
    let divOutput = document.getElementById('div-output');
    (divOutput)? divOutput.innerHTML = `# A quantidade de vogais é: ${numberOfVowels.toString()}`:'erro ao calcular';
}
