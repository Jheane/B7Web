let idade = 45;
if(idade >=60 && idade <= 120){
    console.log("Você é um idoso");
}
else if(idade >= 18 && idade < 60){
    console.log("Você é um adulto.");
}
else if(idade >= 0 && idade < 18){
    console.log("Você é uma criança.");
}

else{
    console.log("Digite uma idade válida.");
}

let sexo = "m";
if(sexo == "M" || sexo == "m"){
    console.log("Você é um homem.");
}
else if(sexo == "F" || sexo == "f"){
    console.log("Você é uma mulher.")
}
else{
    console.log("Você é de outro gênero.")
}
//Uso do && (E) e || (OU)