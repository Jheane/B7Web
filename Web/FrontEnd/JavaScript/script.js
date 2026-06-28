//Iteração de array 1
let fruits = ['maçã','banana','kiwi','uva','groselha','pera','laranja'];
let bigFruits = fruits.filter((item) => {//a variável bigFruits recebe a função com filtro de frutas com mais de 4 letras
    return item.length > 4;
});
console.log(bigFruits);

let ok = fruits.every((value) => {//O every é como o E, onde irá retornar true caso todos os elementos entrem na condição
    value.length > 3 ? true : false;
});
console.log(ok == true ? "Todos são maiores que 3" : "Não são todos maiores que 3");

let ok1 = fruits.some((value) => {//Já o some é como o OU, onde irá retornar true caso um elemento seja satisfatório
    return value.length > 4;
});

console.log(ok1 == true ? "Algum item é maior que 3" : "Nenhum item é maior que 3");

console.log(fruits.includes('uva') ? "Tem uva" : "Não tem uva");//O includes pesquisa o item que passei dentro do array