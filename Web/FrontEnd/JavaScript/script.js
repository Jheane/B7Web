let nome = "Jheane";//variável let, contém escopo de bloco
//a variável let não pode ser redeclarada. Pode ser alterada, mas sem chamar novamente pela mesma variável, pois o código não será executado
console.log(nome);
nome = "João";
console.log(nome);
var nome1 = "Ana";//variável var, contém escopo de função
console.log(nome1);
const nome2 = "Bianca";//constante const
console.log(nome2);
nome2 = "Bia";//vai dar erro por estarmos tentando atribuir outro valor a uma constante: "Uncaught TypeError: Assignment to constant variable."
