//Exercício de funções #3
/*Validar usuário e senha
usuário correto: pedro
senha correta: 123
*/
function validar(usuario, senha){
    if(usuario === 'pedro' && senha === '123'){
        return true;
    }
    else{
        return false;
    }
}
let usuario = 'pedro';
senha = '1234';
let validacao = validar(usuario, senha);
console.log(validacao ? 'Acesso concedido!' : 'Acesso negado!');