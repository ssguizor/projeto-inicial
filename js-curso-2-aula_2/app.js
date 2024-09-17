let = listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'acertou')
        let paralavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${paralavratentativa}`;
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Numero Secreto e menor');
        }else{
            exibirTextoNaTela('p', 'Numero Secreto e maior');
        };
        tentativas++;
        limparCampo();
    };
}

function gerarNumeroAleatorio(){
    let nuemroEscolhido = parseInt(Math.random()* 10 + 1);
    if (listaDeNumerosSorteados.includes(nuemroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        return nuemroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}











