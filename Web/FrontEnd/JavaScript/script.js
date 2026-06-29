//Classes: Construtor e This; Instância
//Aula Classes: Construtor e this
//Template de como nosso objeto deve funcionar, onde o conceito só funcionará quando o transformarmos em um objeto
//Depois da criação do template, criamos a instância/objeto. O template define a estrutura e comportamento que as instâncias vão seguir.
class Person{//nome da classe se usa a primeira letra maiúscula, onde a classe terá propriedades e ações. A classe é um conjunto de atributos e métodos que definem um objeto
    constructor(name, age){//como uma função, onde eu passo parâmetros também. Serve para inicializar as propriedades do objeto
        this.name = name;//o this se refere ao próprio objeto que estou criando
        this.age = age;
    }
};

//Aula Classes: Instância
//Instanciar classe: pegar o template e criar o objeto
let p1 = new Person('João', 20);//cada uma dessas linhas é uma instância
let p2 = new Person('Maria', 30);
let p3 = new Person('Pedro', 40);
//criei 3 objetos que utilização do mesmo template
console.log(p3.age);