//Exercício de funções #2
/*Calcule o preço do imóvel
- m2 = 3000.00
- 1 quarto, m2x1
- 2 quartos, m2x1.2
- 3 quartos, m2x1.5
*/
// function calcularImovel (m, q){//Jeito que eu fiz
//     if(q == 1){
//         return (m * 3000);
//     }
//     else if(q == 2){
//         return (m * (3000 * 1.2));
//     }
//     else{
//         return (m * (3000 * 1.5));
//     }
// }
function calcularImovel (metragem, quartos){//Forma que o professor fez
    let m2 = 3000;
    let preco = 0;
    switch (quartos){
        case 1:
            default:
                preco = metragem * m2;
                break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
    }
    return preco;
}
let metragem = 123;
let quartos = 1;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);