let nome = "Jheane";
let sobrenome = "Santos";
let idade = 26;
//let nomeCompleto = nome + ' ' + sobrenome; //forma que usamos anteriormente para concatenar as strings
//let nomeCompleto = `Jheane Silva Santos`;//Template String: string entre `, onde podemos colocar conjunto de strings. Ele também permite expressões, sendo inseridas entre chaves e precedidas de $
let nomeCompleto = `Nome: ${nome} ${sobrenome}, idade: ${idade + 5} anos`
console.log(nomeCompleto);