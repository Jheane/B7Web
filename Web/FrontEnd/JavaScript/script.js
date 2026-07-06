/*O que é DOM*/

//DOM: Document Object Model: representação na memória do navegador da estrutura da página web
//Organização de estrutura da página na memória, para entender como ela vai seguir. As tags dentro do HTML são elementos do DOM

/*Selecionando elementos 1*/
//Consigo utilizar o JS para navegar nos elementos e alterar o DOM
//Na página, há dois objetos que podem parecer parecidos, selecionando a janela: document e window. Window refere-se à janela completa do navegador, já o document refere-se ao conteúdo da página.
// document.getElementsByTagName("h1") > faço a seleção de um elemento pelo nome da tag (nesse caso, h1). Ele entregará um array contendo os elementos encontrados, podendo eu atribuir essa array a uma variável com o código abaixo.
//let elementos = document.getElementsByTagName("h1");
//elementos[0] : aqui eu consigo consultar os elementos conforme seus índices

/*Selecionando elementos 2*/
//document.getElementsByTagName("div") : chamada de elementos das tags div
//document.getElementById("teste") : chamada de elemento por id. Lembrando que APENAS um elemento pode ter um determinado ID, então o getElement aqui fica no singular
//document.getElementsByClassName("botao") : chamada de elementos da tag com nome de classe botao
//document.querySelector(".botao") : seleção como no CSS, onde estou buscando pelos elementos da classe botao
//document.querySelector("#teste") : seleção do elemento de id teste
//o query selector retorna de forma diferente do getElement, o query retorna como a tag descrita no meu HTML, já o getElement me retorna um array com os elementos, contendo o índice, tamanho e o tipo do protótipo
//document.querySelectorAll("#teste ul li") : acesso os elementos dentro da tag de id teste, todos os li dentro dos ul
//no querySelectorAll, os resultados retornados são como no getElement, em array. Além disso, o querySelectorAll retorna um Nodelist, enquanto o querySelector retorna apenas o primeiro elemento correspondente.
//Mesmo o querySelector sendo mais fácil de fazer, é reocmendado o uso do getElementById, por ser mais rápido (já que é algo mais específico).