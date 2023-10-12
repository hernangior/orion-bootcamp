
    /*
    +-----------------------------------------------------------------------------------------------
    |
    |   # Exercicio 01
    |
    +-----------------------------------------------------------------------------------------------
    */ 

    // função que retorna a quantidade de vogais da palavra passada. 
    function getNumberOfVowels(word: string): number {
        let regexExpression = /[aeiouàáâãäåæçèéêëìíîïðòóôõöùúûüýÿ]/gi;
        let vowelsFound     = word.match(regexExpression);
        return vowelsFound  ? vowelsFound.length : 0;
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
        let inputWord      = document.getElementById('inputPalavra') as HTMLInputElement;
        let numberOfVowels = getNumberOfVowels(inputWord.value);
        let output = 'A quantidade de vogais da palavra informada é: ' + numberOfVowels;
        let outputWord     = document.getElementById('output-palavra') as HTMLInputElement;
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
    let lista : Array <Object> = [{
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
    // classe de manipulação para facilitar o trabalho
    class Person {
        id  : number;
        name: string;
        bio : string;
        constructor(id: number, name: string, bio: string) {
            this.id   = id;
            this.name = name;
            this.bio  = bio;
        }
    }
    // conversão de array para lista de objetos da classe Person
    function convertArrayToList(array: Array<any>): Array<Person> {
        return array.map(
                            (obj) => new Person(obj.id, obj.name, obj.bio)
                        );
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
    function functionalGetBioById(id: number): string {
        let person = newList.find((item) => item.id === id);
        return (person) ?  person.bio : '';
    }
    // rotina para teste
    console.log("# a) Crie uma função que retorne a bio do id passado");
    console.log("# paradigma funcional: ");
    console.log(functionalGetBioById(1));
    console.log("- - -");

    /*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */ 
    function imperativeGetBioById(id: number): string{
        let result = '';
        for (let i = 0; i < lista.length; i++) {
            let item = lista[i] as 
                { 
                    id  : number, 
                    name: string, 
                    bio : string 
                }; 
            if (item.id === id) {
                result = item.bio;
            }
        }
        return result;
    }
    console.log("# paradigma imperativo: ");
    console.log(imperativeGetBioById(1));
    console.log("- - -");

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
    function functionalGetNameById(id: number): string {
        let person = newList.find((item) => item.id === id);
        return (person) ?  person.name : '';
    }
    console.log("b) Crie uma função que retorne o name do id passado");
    console.log("# paradigma funcional: ");
    console.log(functionalGetNameById(1));
    console.log("- - -");

    /*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */ 
    function imperativeGetNameById(id: number): string{
        let result = '';
        for (let i = 0; i < lista.length; i++) {
            let item = lista[i] as 
                { 
                    id  : number, 
                    name: string, 
                    bio : string 
                }; 
            if (item.id === id) {
                result = item.name;
            }
        }
        return result;
    }
    console.log("# paradigma imperativo: ");
    console.log(imperativeGetNameById(1));
    console.log("- - -");

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
    function functionalDeleteItemById(id: number): void {
        let index = newList.findIndex((item) => item.id === id);
        (index !== -1) ? newList.splice(index, 1): '';
    }
    console.log("c) Crie uma função que apague um item da lista a partir de um id passado")
    console.log("# paradigma funcional: ");
    functionalDeleteItemById(2);
    console.table(newList);
    console.log("- - -");

    /*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */ 
    function imperativeDeleteItemById(id: number): void {
        for (let i = 0; i < newList.length; i++) {
          if (newList[i].id === id) {
            newList.splice(i, 1);
            break;
          }
        }
      }
    console.log("# paradigma imperativo: ");
    imperativeDeleteItemById(1);
    console.table(newList);
    console.log("- - -");

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
    function functionalUpdateItemById(id: number, newContent: string, type: string): void {
        let item = newList.find((item) => item.id === id);
        if (item){
          (type == "bio") ? item.bio  = newContent:'';
          (type == "name")? item.name = newContent:'';
        }
    }
    console.log("d) Crie uma função que altere a bio ou o name a partir de um id passado");
    console.log("# paradigma funcional: ");
    functionalUpdateItemById(3,"Aluno de Bootcamp","bio");
    functionalUpdateItemById(3,"Hernandez","name");
    console.table(newList);
    console.log("- - -");

    /*
    +
    |
    |   [ PARADIGMA IMPERATIVO ]
    |
    +
    */ 
    function imperativeUpdateItemById(id: number, newContent: string, type: string): void {
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
    console.log("# paradigma imperativo: ");
    imperativeUpdateItemById(4,"Profissional de tecnologia","bio");
    imperativeUpdateItemById(4,"Giordano","name");
    console.table(newList);
    console.log("- - -");

    // e) Demonstre todas as funções com o paradigma funcional e com o imperativo



    
