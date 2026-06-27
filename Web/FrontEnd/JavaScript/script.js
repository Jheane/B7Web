//O loop while
//Funciona da mesma forma que o for, mas de jeito diferente de ser montado.
//A maioria das vezes vamos usar o for, mas em outras, o while será melhor aplicado
//Enquanto a condição for verdadeira, ele roda o código
let n = 0; //crio a variável aqui
while (n < 10){//coloco minha condição
    console.log(`O número da vez é ${n}`);
    n++;//incremento a variável
};
//funciona da mesma maneira que o for, porém ele (while) é de forma expandida:
for (i = 0; i < 10; i++) {//crio a variável, coloco a condição e incremento a variável
    console.log(`O número da vez é ${i}`);
};

//o problema do while é que ele pode crashar o programa, porque dá abertura para execução infinita, como o exemplo abaixo:
//let a = 0; //crio a variável aqui
//while (a >= 0){//coloco minha condição
//    console.log(`O número da vez é ${a}`);
//    a++;//incremento a variável
//};