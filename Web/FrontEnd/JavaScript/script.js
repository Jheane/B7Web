//Função dentro de objeto
let pessoa = {
    nome: 'Jhe',
    sobrenome: 'Sin',
    idade: 20,
    nomeCompleto: function(){
        /*return this.nome + ' ' + this.sobrenome; //keyword que permite o acesso a uma chave dentro de um objeto na classe pai (pessoa)*/
        return `${this.nome} ${this.sobrenome}`;//outra forma de concatenar o que quero e retornar na função
    }
    /*nomeCompleto: () => {
        return `${this.nome} ${this.sobrenome}`;//Dessa forma, não será possível acessar propriedades do próprio objeto, por usarmos uma função anônima (já que não usamos a palavra function ao usarmos a arrow function)
    }*/
}

console.log(pessoa.nomeCompleto());//Chama a função dentro do objeto
