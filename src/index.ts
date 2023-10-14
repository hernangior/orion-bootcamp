/*
    +-----------------------------------------------------------------------------------------------
    |
    |   # Exercicio 01
    |
    +-----------------------------------------------------------------------------------------------
    */

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
    let regexExpression = /[aeiouàáâãçèéêìíòóôõùú]/gi;
    let vowelsFound = word.toLowerCase().match(regexExpression);
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
  function showNumberOfWowels(): void {
    let inputWord = document.getElementById("inputPalavra") as HTMLInputElement;
    let numberOfVowels = getNumberOfVowels(inputWord.value);
    let output =
      "A quantidade de vogais da palavra informada é: " + numberOfVowels;
    let outputWord = document.getElementById(
      "output-palavra"
    ) as HTMLInputElement;
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
  let lista: Array<Object> = [
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
    id: number;
    name: string;
    bio: string;
    constructor(id: number, name: string, bio: string) {
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
  function convertArrayToList(array: Array<any>): Array<Person> {
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
  /**
   * Função para retornar a bio do id passado
   * usando o paradigma funcional
   *
   * @param id - item de nome id do tipo número contendo o id a ser pesquisado
   * @returns string - retorna uma string referente a Bio desejada de acordo com o Id
   *
   * @beta
   */
  function functionalGetBioById(id: number): string {
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
    let input = parseInt(
      (document.getElementById("input-2-a") as HTMLInputElement).value
    );
    let result = functionalGetBioById(input);
    let output = "";
    result
      ? (output = `A Bio do ID informado como [${input}] é: ${result}`)
      : (output = `Não foi encontrada Bio do ID informado como [${input}]`);
    (document.getElementById("output-2-a") as HTMLInputElement).value = output;
  }
  
  /*
        +
        |
        |   [ PARADIGMA IMPERATIVO ]
        |
        +
        */
  /**
   * Função para retornar a [bio] do [id] passado
   * usando o paradigma imperativo
   *
   * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
   * @returns string - retorna uma string referente a [Bio] desejada de acordo com o [Id]
   *
   * @beta
   */
  function imperativeGetBioById(id: number): string {
    let result = "";
    for (let i = 0; i < lista.length; i++) {
      let item = lista[i] as {
        id: number;
        name: string;
        bio: string;
      };
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
  /**
   * Função para retornar o Name de acordo com o id passado
   * usando o paradigma funcional
   *
   * @param id - item de nome id do tipo número contendo o id a ser pesquisado
   * @returns string - retorna uma string referente o Name desejada de acordo com o Id
   *
   * @beta
   */
  function functionalGetNameById(id: number): string {
    let person = newList.find((item) => item.id === id);
    return person ? person.name : "";
  }
  /*
        console.log("b) Crie uma função que retorne o name do id passado");
        console.log("# paradigma funcional: ");
        console.log(functionalGetNameById(1));
        console.log("- - -");
        */
  
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
    let input = parseInt(
      (document.getElementById("input-2-b") as HTMLInputElement).value
    );
    let result = functionalGetNameById(input);
    let output = "";
    result
      ? (output = `O nome do ID informado como [${input}] é: ${result}`)
      : (output = `Não foi encontrada Nome do ID informado como [${input}]`);
    (document.getElementById("output-2-b") as HTMLInputElement).value = output;
  }
  
  /*
        +
        |
        |   [ PARADIGMA IMPERATIVO ]
        |
        +
        */
  
  /**
   * Função para retornar o Name de acordo com o id passado
   * usando o paradigma imperativo
   *
   * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
   * @returns string - retorna uma string referente o [Name] desejada de acordo com o [Id]
   *
   * @beta
   */
  function imperativeGetNameById(id: number): string {
    let result = "";
    for (let i = 0; i < lista.length; i++) {
      let item = lista[i] as {
        id: number;
        name: string;
        bio: string;
      };
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
  
  /**
   * Função para remover o registro da lista de acordo com o id passado
   * usando o paradigma funcional
   *
   * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
   * @returns string - retorna uma string referente ao resultado do processo de exclusão
   *
   * @beta
   */
  function functionalDeleteItemById(id: number): string {
    let index = newList.findIndex((item) => item.id === id);
    let result;
    if (index !== -1) {
      newList.splice(index, 1);
      result = "success";
    } else {
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
    let input = parseInt(
      (document.getElementById("input-2-c") as HTMLInputElement).value
    );
    console.log("# input: " + input);
    let output = "";
    functionalDeleteItemById(input) == "success"
      ? (output = `O item com ID informado como [${input}] foi removido da lista`)
      : (output = `Não existe na lista um item com o ID informado como [${input}]`);
    console.log("# output: " + output);
    (document.getElementById("output-2-c") as HTMLInputElement).value = output;
    console.log("# conclusão de execução de task 2 - c");
  }
  
  /*
        +
        |
        |   [ PARADIGMA IMPERATIVO ]
        |
        +
        */
  
  /**
   * Função para remover o registro da lista de acordo com o id passado
   * usando o paradigma imperativo
   *
   * @param id - item de nome [id] do tipo número contendo o [id] a ser pesquisado
   * @returns void - a função não retorna resultado
   *
   * @beta
   */
  function imperativeDeleteItemById(id: number): void {
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
  function functionalUpdateItemById(
    id: number,
    newContent: string,
    type: string
  ): string {
    let item = newList.find((item) => item.id === id);
    let result = "";
    if (item) {
      type == "bio" ? (item.bio = newContent) : "";
      type == "name" ? (item.name = newContent) : "";
    } else {
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
    let inputId = parseInt(
      (document.getElementById("input-2-d-id") as HTMLInputElement).value
    );
    let inputText = (
      document.getElementById("input-2-d-text") as HTMLInputElement
    ).value;
    let result = functionalUpdateItemById(inputId, inputText, "bio");
    let output = "";
    result == "not found"
      ? (output = `Não foi encontrada dados para alterar referentes ao ID informado como [${inputId}]`)
      : (output = `A Bio referente ao ID informado como [${inputId}] foi alterada!`);
    (document.getElementById("output-2-d") as HTMLInputElement).value = output;
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
    let inputId = parseInt(
      (document.getElementById("input-2-d-id") as HTMLInputElement).value
    );
    let inputText = (
      document.getElementById("input-2-d-text") as HTMLInputElement
    ).value;
    let result = functionalUpdateItemById(inputId, inputText, "name");
    let output = "";
    result == "not found"
      ? (output = `Não foi encontrada dados para alterar referentes ao ID informado como [${inputId}]`)
      : (output = `O Name referente ao ID informado como [${inputId}] foi alterada!`);
    (document.getElementById("output-2-d") as HTMLInputElement).value = output;
  }
  
  /*
        +
        |
        |   [ PARADIGMA IMPERATIVO ]
        |
        +
        */
  /**
   * Função para psquisar o registro da lista de acordo com o id passado
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
  function imperativeUpdateItemById(
    id: number,
    newContent: string,
    type: string
  ): void {
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
  