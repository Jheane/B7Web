//O loop for
//O código pode ser executado n vezes
// for(let i = 0; i < 10; i++){//se lê: para(variável i igual a zero, i menor que 10, i incrementa com mais 1)
//     console.log(i);//ele vai executar o console.log cada vez que o for for executado, dessa forma, o valor de i vai sendo incrementado até chegar na condição de parada, que é i < 10 (serão 10 vezes, de 0 a 9)

// }

//Dando loops em arrays
let cores = [
    { nome: 'preto', qtd: 7},
    { nome: 'branco', qtd: 10},
    { nome: 'azul', qtd: 5},
    { nome: 'vermelho', qtd: 15}
];
/* for (let n = 0; n < cores.length; n++){//aqui, ele vai executar o for enquanto n for menor que o tamanho de itens do array cores, independente se o valor ficar o mesmo ou se forem adicionados ou removidos itens da listagem
    console.log(cores[n]);
 }
*/
 //Existem mais formas de execução dessa mesma maneira, trazendo o mesmo resultado:
/* 1:
for (let i in cores){//aqui ele faz a mesma coisa que o for anterior
    console.log(cores[i]);
    //cores[i].nome = cores[i].nome.toUpperCase();
}
*/
/* 2:

for (let cor of cores){//aqui o resultado é o mesmo do primeiro for também, transformando minha variável cor em cores para buscar os itens do array
    console.log(`Nome: ${cor.nome} - ${cor.qtd}`);//traz as cores de forma formatada
}*/

for (let i in cores){
    cores[i].nome = cores[i].nome.toUpperCase();//retorna as cores com caixa alta
}
console.log(cores);

//for in: percorre índices, for of percorre valores