//Acessando e alterando objetos
// let personagem = {
//     nome: 'Jheane',
//     idade: 31,
//     pais: 'Brasil',
//     caracteristicas: {
//         forca: 150,
//         magia: 220,
//         stamina: 4
//     },
//      olhos: ['azul', 'verde']
// }
// console.log(personagem);
// personagem.nome='Ana';
// console.log(personagem.nome);
// personagem.caracteristicas.forca = 40;
// console.log(personagem.caracteristicas.forca);
// personagem.caracteristicas.forca += 40;//adição de valor à força
// personagem.olhos.push('castanho');//adição de cor ao array olhos
// console.log(personagem.caracteristicas.forca);

let personagem = {
    nome: 'Matilda',
    idade: 32,
    carros: [
        {modelo: 'Fiat', cor: 'azul'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ]
}

console.log(personagem.carros[1].cor);//Acessar a cor que está no objeto carro, dentro do array carros, dentro do objeto personagem