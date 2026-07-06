/*Eventos de clique*/
//Nada mais é que o clique na página, sendo cada clique um evento. Um clique representa dois eventos, um de press down e outro press up: um é quando você clica no item, outro é quando solta o clique
//Você cria um evento, e quando ele é acionado mecanicamente, algo é feito
function clicou(){
    console.log("Clicou no botão");//Ao clicar no botão, é retornada essa mensagem
}
/*Além da alternativa de colocar o onclick no html, conseguimos fazer da forma abaixo, que possui a mesma saída. Dessa forma, o onclick lá não é necessário*/
//addEventListener : escutador de evento, que irá observar a ocorrência do evento, executando o que lhe foi proporcionado ao acontecer o evento
let botao = document.querySelector('.botao');
//botao.addEventListener("click", clicou);: temos essa opção e a de baixo, onde construímos uma função 
botao.addEventListener("click", function(){//criamos a função function, que aciona a função clicou
    clicou();
});

//e temos como fazer com arrow function:
// botao.addEventListener("click", () => {
//     clicou();
// });

//podemos fazer tudo em uma linha também:
//document.querySelector('.botao').addEventListener("click", () => { clicou(); });