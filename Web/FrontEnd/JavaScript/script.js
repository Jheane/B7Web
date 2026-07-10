/*Manipulando elementos 2*/
function clicou(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    //métodos: funções próprias do elemento para manipulação
    ul.children[0].append(" (alterado)");//o append adiciona conteúdo ao conteúdo existente no elemento, funcionando apenas para texto (não interpreta como html, como o inner). O append, diferente do innerHTML, concatena a inforamção ao conteúdo, sem alterar tudo. Já o inner pega aquele conteúdo, concatena e altera todo o conteúdo. Ou seja, ele some da memória do navegador e é preenchido por outro conteúdo com a alteração aplicada. Isso explica o porquê de, quando usamos o append com algum texto selecionado do conteúdo selecionado, ao clicar no botão, ele vai continuar selecionado após o clique no botão, diferente do inner, que vai remover a seleção por se tratar de outro item.

    let newLi = document.createElement("li");//cria um novo li, sem nada
    newLi.innerText = "Item adicionado";//adiciona a informação na variável, mas não é mostrada na tela

    ul.appendChild(newLi);//agora ele aparece, e sem remover a seleção dos elementos anteriores. É o jeito mais otimizado de adicionar itens, visto que o inner pode modificar a questão de processamento para telas com muitos dados para carregar.
    //O appendChild adiciona o item no final da listagem. Para adicionar no início, usamos o comando abaixo:
    ul.prepend(newLi);
    
}