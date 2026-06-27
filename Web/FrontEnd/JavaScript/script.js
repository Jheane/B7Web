//Funções de array
let fruits = ['Banana', 'maçã', 'morango', 'uva'];
console.log(fruits);//info do array
console.log(fruits.length);//tamanho do array
fruits.push('kiwi');//add item no final do array
console.log(fruits);
fruits.pop();//remove último item do array
console.log(fruits);
fruits.shift();//remove primeiro item do array
console.log(fruits);
console.log(fruits.join(', '));//junta os itens do array com o que coloquei dentro de '', nesse caso, com espaço e vírgula. Ele não altera o array, ele junta e retorna uma string com o separador informado.
console.log(fruits);
fruits[1] = 'Abacate';//altera o índice 1, trocando a string atual pela nova informada
fruits[fruits.length - 1] = 'goiaba';//troca o último índice do array
console.log(fruits);