//Função com retorno condicional
function maiorDeIdade(idade){
    if(idade>=18){
        return true;
    }
    else{
        return false;
    }
}
let idade = 17;
let verificacao = maiorDeIdade(idade);
console.log(verificacao ? "Maior de idade" : "Menor de idade");
