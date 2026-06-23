let profissao = "fiscal";
switch(profissao){
    case "fiscal": //primeira condição
        console.log("Camisa verde");
    break; //para a execução se essa condição for verdadeira
    case "bombeiro": //próxima condição...
        console.log("Camisa vermelha");
    break;
    case "policial":
        console.log("Camisa azul");
    break;
    default: //condição padrão, será executada caso não entre nas condições anteriores
        console.log("Camisa preta");
        break; //finaliza a execução
}

//Switch: condicional com múltiplos resultados