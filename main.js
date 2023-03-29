function tocaSom(seletorClasseAudio) {
    
    const elemento = document.querySelector(seletorClasseAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let cont = 0; cont < listaDeTeclas.length; cont++) {

    const teclas = listaDeTeclas[cont];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function() {
        tocaSom(idAudio);
    }

    teclas.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter') {
            teclas.classList.add('ativa');

        }
    }
    teclas.onkeyup = function() {
        teclas.classList.remove('ativa');
    }
}
