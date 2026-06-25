//variáveis dentro de funções
function add(){
    let count = 0;//variável local, tem preferência sobre a global, mesmo com o mesmo nome
    count++;
}
let count = 0;//variável global
add();
add();
console.log(count);