//Arrow function
//forma convencional de usar funções:
// function somar(x, y){
//     return x + y;
// }
// console.log(somar(10,5));
//forma reduzida:
// const somar = (x, y) => {//Funções com mais de uma linha precisam ser escritas dessa forma
//     let resultado = x + y;
//     return resultado;
// }
const somar = (x, y) => x + y;//quando é uma linha apenas, posso escrever dessa forma, eliminando a escrita do return
console.log(somar(10, 7));
//Quando há apenas um parâmetro, consigo ainda eliminar os parênteses da função
const sobrenome = sob => 'Jheane ' + sob;//sem parênteses, com adição de texto para melhor visualização
console.log(sobrenome("Santos"));