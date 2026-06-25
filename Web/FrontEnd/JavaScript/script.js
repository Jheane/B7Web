//Operações básicas em arrays
let ingredientes = ['água', 'farinha', 'açúcar', 'ovo', 'fermento'];
ingredientes[5] = 'chocolate em pó';//adiciono o nome do array, o número do índice que será adicionado e o item que irá preencher aquele campo. Essa forma não deve ser muito utilizada, porque pode adicionar campos vazios caso informe o número do novo índice incorretamente. Pex.: minha lista tem 6 itens, de 0 a 5. Caso eu informe, sem querer, o índice 7 invés do 6 para adição de um novo item, ele irá criar esse item no índice 7 normalmente, porém, deixando o índice 6 vazio.
ingredientes.push('essência de baunilha');//forma mais utilizada para adição de itens dentro de arrays

ingredientes.pop();//remove o último item da lista, nesse caso, sem a essência de baunilha

ingredientes.shift();//remove o primeiro item da lista, nesse caso, sem a água
console.log(`Total de ingredientes: ${ingredientes.length}`);//o .length mostra a quantidade de itens no array
console.log(ingredientes);
