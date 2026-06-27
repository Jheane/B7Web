//Exercício de loops
// 1. Faça um loop que mostre todas as frutas
let fruits = ['Maçã', 'Uva', 'Banana'];
/*for (let i = 0; i < 3; i++){//forma como fiz
    console.log(fruits[i]);
}*/
//Correção do professor
for (let x in fruits) {
    console.log(fruits[x]);
}
// 2. Conte de 1 a 100 através de um while
let num = 1;
while (num <= 100){
    console.log(`número: ${num}`);
    num++;
}