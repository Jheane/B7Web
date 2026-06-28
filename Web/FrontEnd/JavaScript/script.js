//Ordenação de array
// let fruits = ['maçã','banana','kiwi','uva'];
// console.log(fruits);
// fruits.sort();//ordena os itens do array de a para z, incluindo o index de cada elemento
// console.log(fruits);
// fruits.reverse();//ordena os itens do array de z para a
// console.log(fruits);
let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
];

// cars.sort((a, b) => {
//     // if(a.year > b.year){
//     //     return 1;
//     // } else if(a.year < b.year){
//     //     return -1;
//     // } else{
//     //     return 0;
//     // }//essa forma foi para entendermos a lógica da situação, podendo ser simplificado conforme linha abaixo
//     return a.year - b.year;
// });//Ou ainda podemos fazer de forma mais resumida:
cars.sort((a, b) => a.year - b.year);
console.log(cars);
cars.sort((a, b) => b.year - a.year);//Inverto para ordenar do mais novo para o mais antigo
console.log(cars);