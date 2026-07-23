//seleção do relógio digital e dos ponteiros
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//função para rodar os ponteiros
function updateClock(){
    let now = new Date();//manipulação de data
    let hour = now.getHours(); //função para obtenção das horas
    let minute = now.getMinutes(); //função para obtenção dos minutos
    let second = now.getSeconds(); //função para obtenção dos segundos

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //preenche o relógio digital com os valores obtidos em now

    let sDeg = ((360 / 60) * second) - 90;//aqui meu segundo é calculado, sendo retirado 90 para que o zero fique certinho
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;//aqui faz a rotação do ponteiro
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

// fução para adicionar o zero nos números menores que 10
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}


//executa a função a cada segundo
setInterval(updateClock, 1000);
updateClock();//chama a função para que o relógio já abra com o horário certinho