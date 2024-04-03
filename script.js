let randomNum;
let chance;

function restart() {

    location.reload();
}

function sendDificulty() {
    let nivelValue = parseInt(document.getElementById('nivel').value)
    let modeText = document.getElementById('mode-text');
    let modeName = document.getElementById('mode-name');
    let game = document.getElementById('gameVisual')
    let chanceVisual = document.getElementById('chanceVisual')
    let chanceText = document.getElementById('chanceText')

    switch (nivelValue) {
        case 1:
            randomNum = Math.floor(Math.random() * 11)
            chance = 5
            chanceText.style.display = 'block'
            modeText.style.display = 'block'
            modeName.innerHTML = 'Fácil'
            game.style.display = 'block'
            chanceVisual.innerHTML = chance + ' chances.'
            break;
        case 2:
            randomNum = Math.floor(Math.random() * 51)
            chance = 3
            chanceText.style.display = 'block'
            modeText.style.display = 'block'
            modeName.innerHTML = 'Médio'
            game.style.display = 'block'
            chanceVisual.innerHTML = chance + ' chances.'
            break;
        case 3:
            randomNum = Math.floor(Math.random() * 101)
            chance = 1
            chanceText.style.display = 'block'
            modeText.style.display = 'block'
            modeName.innerHTML = 'Difícil'
            game.style.display = 'block'
            chanceVisual.innerHTML = chance + ' chance.'
            break;
        default:
            alert('Escolha uma dificuldade.')
            break;
    }
}

function sendChange() {
    let resposta = document.getElementById('change').value
    let chanceText = document.getElementById('chanceText')
    let gameText =  document.getElementById('gameText')
    

    if (resposta == randomNum) {
        gameText.innerHTML = 'Parabéns, você acertou! O número era: ' + randomNum
    } else if (resposta < randomNum) {
        gameText.innerHTML = 'Tente um número maior.'
        chance -= 1
        chanceText.innerHTML = 'Você tem: ' + chance + ' chances.'
    } else {
        gameText.innerHTML = 'Tente um número menor.'
        chance -= 1
        chanceText.innerHTML = 'Você tem: ' + chance + ' chances.'
    }

    if(chance == 0){
        gameText.innerHTML = 'Suas chances acabaram. O número era: ' + randomNum;
        document.getElementById('send-change').disabled = true;
    }
}