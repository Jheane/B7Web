document.querySelector('.busca').addEventListener('submit', async (event)=>{
    event.preventDefault(); //essa função previne o comportamento padrão do formulário, que no caso, seria enviar as informações preenchidas no formulário (já que, no nosso caso, não é interessante o envio das informações)
    let input = document.querySelector('#searchInput').value; //aqui eu pego o que o usuário digitou

    if(input !== ''){
        clearInfo();
        showWarning('Carregando...');//mostra mensagem de carregando ao clicar no botão, para mostrar ao usuário que algo está acontecendo
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=efeae7f3157005811691364a74a99ed8&units=metric&lang=pt_br`;

        let results = await fetch(url);//faço a requisição e ele espera o resultado
        let json = await results.json();//pega o resultado e transforma em json

        console.log(json);

        if(json.cod === 200){//caso a requisição encontre alguma cidade com o nome digitado, é preenchido o showInfo com os dados em json
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempoIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            })
        } else {
            clearInfo();
            showWarning('Não encontramos essa localização.');//caso retorne outra coisa (possivelmente o 404), mostra essa mensagem.
        }
    }
});

function showInfo(json){
    showWarning('');//remove minha mensagem de carregando
    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`;//pego a cidade e o nome do país
    document.querySelector('.tempInfo').innerHTML = `${json.temp} <sup>ºC</sup>`;//pego a temperatura
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed} <span>km/h</span>`;//pego a velocidade do vento
    document.querySelector('.temp img').setAttribute('src', `http://openweathermap.org/img/wn/${json.tempoIcon}@2x.png`);//troco o ícone conforme o json passado, para atualizar na aplicação
    document.querySelector('.ventoPonto').style.transform = `rotate(${json.windAngle-90}deg)`;//troco a rotação da direção do vento

    document.querySelector('.resultado').style.display = 'block'; //troca meu display do arquivo style da classe resultado, de none para block.
}

function clearInfo(){//essa função vai ocultar meus resultados, para que, ao procurar novamente, não seja exibida a informação anterior.
    showWarning('');
    document.querySelector('.resultado').style.display = 'none';
};

function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}