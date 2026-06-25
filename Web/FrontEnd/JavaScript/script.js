//Exercício de array
//1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;//Com x = 1 e jogando ele na próxima linha, ele vai buscar o item de índice 1 no array
console.log('1. ' + carros[x]);
//2. Troque a Ferrari por Audi
console.log(carros);
carros[1] = 'Audi';
console.log('2. Lista com Audi: ' + carros);

//3. Adicione Volvo à lista
carros.push('Volvo');//add Volvo à lista
console.log('3. Lista com Volvo: ' + carros);

//4. Exiba quantos itens tem no array
console.log(`4. Itens no array: ${carros.length}`);
