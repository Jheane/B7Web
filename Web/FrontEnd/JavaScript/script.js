let idade = 45;
if(idade >= 0 && idade < 120){
    if(idade >=60 && idade <= 120){
        console.log("Você é um idoso");
    }
    if(idade >= 18 && idade < 60){
        console.log("Você é um adulto.");
    }
    if(idade >= 0 && idade < 18){
        console.log("Você é uma criança.");
    }
}
else{
    console.log("Digite uma idade válida.");
}

let sexo = "M";
if(sexo == "M" || sexo == "F"){
    if(sexo == "M"){
        console.log("Você é um homem.");
    }
    if(sexo == "F"){
        console.log("Você é uma mulher.")
    }
}
else{
    console.log("Você é de outro gênero.")
}
//Uso do && (E) e || (OU)