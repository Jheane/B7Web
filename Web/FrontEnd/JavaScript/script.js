/*Manipulando elementos 1*/
function clicou(){
    const teste = document.querySelector('#teste');
    const teste2 = document.querySelector('#teste2');
    console.log(teste);//retorna o array dentro da div #teste (inclui a estrutura da div, o ul, lis e o que mais incluir dentro dela)
    console.log(teste.children); //retorna o filho imediato como HTMLCollection, em um array, aqui, no caso, sendo o ul e o strong (não traz o li porque não é filho imediato, é filho do filho)
    console.log(teste.children[0].children); //aqui já retorna os filhos dos filhos, trazendo os elementos dentro da ul
    const ul = teste.querySelector('ul');//seleciona o item ul
    console.log(ul);

    const ul2 = teste2.querySelector('ul');//seleciono novamente minha ul, para uma nova variável

    console.log(ul.innerHTML); //mostra o conteúdo dentro do elemento, sendo retornado como texto. Posso usar para consultar e para alterar o valor

    // ul.innerHTML = "<li>Item alterado</li>";//innerHTML: altera o conteúdo da minha ul para o que informei dentro das aspas, sendo descartada a alteração após atualizar a tela
    // ul2.innerHTML += "<li>Item alterado</li>";//aqui, invés de substituir os itens da minha ul, ele vai aidcionar o que determinei nas aspas, juntando com o que já existe na ul
    // ul2.children[0].innerHTML = "<li>Item do <strong>li[0]</strong> alterado</li>"; //altera o item do li, na posição 0, apenas. Ele aceita comandos HTML, diferente do innerText, que permite apenas texto.
    console.log(ul.outerHTML);//aqui ele mostra o conteúdo do elemento ul, incluindo a parte de fora, que é o próprio ul em si (não pegando apenas o li dentro do elemento)
    ul.outerHTML = "<strong>Alterado!</strong>"; //aqui ele altera o elemento, mas alterando tudo. Não é muito utilizado.
}