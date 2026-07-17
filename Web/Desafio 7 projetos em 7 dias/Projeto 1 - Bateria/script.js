document.body.addEventListener('keyup', (event) => {
    //console.log(event.code);//esse comando fará com que, ao apertar qualquer tecla, seja mostrado no console o código da tecla apertada. O event.code é o código da tecla, e o event.key é a tecla em si. Por exemplo, se eu apertar a tecla "a", o event.code vai mostrar "KeyA" e o event.key vai mostrar "a".
    playSound(event.code.toLowerCase());//essa função vai tocar o som da tecla apertada, e o event.code vai passar o código da tecla apertada para a função playSound, que vai tocar o som correspondente à tecla apertada.
}); //o document.body entende que o evento vai ser aplicado a todo o corpo do documento. O addEventListener vai ouvir o evento. O keyup é o efeito de apertar a tecla e solta. Já o keydown é quando eu aperto e continuo pressionando. Esse é nosso primeiro parâmetro enviado ao eventlistener. O segundo é a função que será chamada ao executar o comando.

document.querySelector('.composer button').addEventListener('click', () => {//seleciono o button dentro da minha class composer, e ao acontecer o evento de clique, vai executar a função abaixo
    let song = document.querySelector('#input').value;//seto a variável song com o que entrou no meu elemento de id input
    if(song !== ''){//validação se song está vazia
        let songArray = song.split(''); //aqui será atribuído a variável songArray o que estiver em song, sendo dividido cada caractere separado por '', para transformar o que foi digitado em array
        playComposition(songArray);//chamada da função playComposition, passando como parâmetro o array digitado e atribuído a songArray.
    }
});
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);//o querySelector vai selecionar o elemento que tem o id igual ao que foi passado na função. O # é para selecionar pelo id. O s_ é para diferenciar os ids dos elementos de áudio dos ids das teclas. O sound é o parâmetro que foi passado na função, que é o código da tecla apertada.
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)
    if(audioElement) {
        audioElement.currentTime = 0;//Dessa forma, ao clicar na tecla, não é esperado terminar o áudio para reexecução, como antes, que, quando uma tecla fosse pressionada rapidamente inúmeras vezes, a animação aparecia, mas o som não era reproduzido.
        audioElement.play();//o play() é um método do elemento de áudio que toca o som. O if(audioElement) é para verificar se o elemento de áudio existe, caso contrário, não vai dar erro.
    }
    if(keyElement) {
        keyElement.classList.add('active');//o classList.add() é um método do elemento que adiciona uma classe ao elemento. A classe 'active' é a classe que vai fazer o efeito de animação na tecla apertada.
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);//Esse timeout vai remover o meu active, fazendo com que a animação da tecla pressionada seja removida com 3 ms
    }
}

function playComposition(songArray) {
    let wait = 0;//essa variável vai ser usada para controlar o tempo de espera entre cada som, para que eles não sejam tocados todos de uma vez. O valor inicial é 0, pois o primeiro som vai ser tocado imediatamente.

    for(let songItem of songArray) {//o for of vai percorrer cada item do array songArray, e a cada iteração, o item atual será atribuído à variável songItem.
        setTimeout(() => {
            playSound(`key${songItem}`);//aqui, a cada iteração, vai ser chamada a função playSound, passando como parâmetro o código da tecla correspondente ao item do array. O setTimeout é para que o som seja tocado com um intervalo de tempo entre cada som, e não todos de uma vez.
        }, wait += 250);//o wait vai ser incrementado em 250 ms a cada iteração, fazendo com que o próximo som seja tocado após 250 ms do anterior.
    }
}