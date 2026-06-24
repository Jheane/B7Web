//Parâmetros em funções
function somar(n1, n2){//n1 e n2 são chamados como parâmetros
    let resultado = n1 + n2;//resultado é a soma
    console.log(resultado);
}
somar(1024, 742);//aqui meus números entram como parâmetros da função, entrando na operação

function nomeCompleto(nome, sobrenome){
    console.log(`Nome completo: ${nome} ${sobrenome}`);
}
nomeCompleto("Jheane", "Silva")