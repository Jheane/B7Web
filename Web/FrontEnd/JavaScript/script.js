//O que são objetos?
//O objeto é parecido com o array, onde, dentro dele, há várias informações, porém funciona e é reconhecido de forma diferente do array pelo JS
let nome = 'Jheane';
let nomes = ['Bianca', 'Joanne', 'Jane', 'João'];
let personagem = {//Declaração do objeto
    nome: 'Jheane',//propriedade: informação (chave-valor)
    idade: 31,
    pais: 'Brasil',
    caracteristicas: {//Objeto dentro de objeto
        forca: 150,
        magia: 220,
        stamina: 4
    },
    olhos: ['preto', 'azul']//array dentro de objeto
}

console.log(typeof(nome), typeof(nomes), typeof(personagem));//aqui, tanto nomes quanto personagem é como objeto na saída do JS, mas o funcionamento é diferente
console.log(personagem.idade);//acesso à propriedade para impressão do dado desejado
console.log(personagem.caracteristicas.forca);//acesso em cascata, para ver a propriedade força dentro de caracteristicas, que está dentro de personagem
console.log(personagem.olhos[1]);//consulta de item do array dentro do objeto
//. para acessar característica do objeto, [] para acessar índice do array