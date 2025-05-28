let listaNumerosSorteados = [];
let numeroMaximo = 100
let tentativa = 1
exibirMensagemInicial()
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Bem vindo ao jogo do número secreto!")
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100: ")
}
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);
function gerarNumeroSecreto(){
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementoLista = listaNumerosSorteados.length
    if(quantidadeDeElementoLista == numeroMaximo){
        listaNumerosSorteados = []
    }
    if(listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroSorteado);
        console.log(listaNumerosSorteados);
        return numeroSorteado;
    }
    
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
    let palavraTentativa = tentativa > 1? "tentativas" : "tentativa"; 
    let mensagemTentativas = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}`
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns")
        exibirTextoNaTela("p", `${mensagemTentativas}`)
        document.getElementById("reiniciar").removeAttribute("disabled")
    } else if(chute > numeroSecreto){
        exibirTextoNaTela("p", `O número secreto é menor que: ${chute}`)
        limpaCampo();
    } else{
        exibirTextoNaTela("p", `O número secreto é maior que: ${chute}`)
        limpaCampo();
    }tentativa++
}

function limpaCampo(){
   chute = document.querySelector("input");
   chute.value = " "
}

function reiniciarJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroSecreto();
    console.log(numeroSecreto);
    limpaCampo();
    tentativa = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
