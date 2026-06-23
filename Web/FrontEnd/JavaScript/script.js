let isMember = true;
let age = 45;

let shipping = isMember ? 2 : 10;//shipping vai receber: isMember ? > if; 2 > condição se true; : > else; 10 > condição se false.
let isAdult = (age >= 18 && age < 60) ? "Sim" : "Não"; 
console.log(isMember ? "Você é membro" : "Você não é membro.")
console.log("Valor do frete: R$ " + shipping);
console.log(isAdult);
//Condicional ternário: IF em uma linha só