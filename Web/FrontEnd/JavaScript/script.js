//Retorno da função
//ENTRADA - > PROCESSAMENTO - > SAÍDA
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;//Retorno da função, será exibido no console.log(completo)
    console.log("Testando 123");//Após o return, a função termina, então essa parte não é executada, seria apenas se estivesse acima do return
}
//let completo = nomeCompleto("Jheane", "Silva Santos");//Chama a função
//console.log('Nome completo: ' + completo);//Imprime o retorno da função de forma expandida
console.log('Nome completo: ' + nomeCompleto("Jheane", "Silva Santos"));//Imprime o retorno da função de forma compacta, já inserindo a chamada da função dentro do console.log