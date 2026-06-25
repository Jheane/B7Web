//funções dentro de funções
function squares(a, b){
    function square(x){
        return x * x;    
    }
    let sqrA = square(a);//chamo a função anterior aqui
    let sqrB = square(b);//e aqui
    return sqrA + sqrB;//somo os returns das funções aqui
}
console.log(squares(2, 3));//e aqui retorna a soma das potências da função square
