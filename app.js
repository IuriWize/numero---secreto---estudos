/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto "; 
let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10: ";


//Função anônima
let numeroSecreto = gerarNumeroSecreto();
console.log(numeroSecreto);

let tentativas = 1

//Funçaõ que exibirá a mensagem no local escolhido. 
exibirMensagemInicial();
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Função que irá verificar se o chute é igual ao número secreto.
function verificarChute() {
    let chute = document.querySelector("input").value;
    console.log(tentativas);
    console.log(chute == numeroSecreto);
    let quantasTentativas = tentativas > 1? "tentativas" : "tentativa"
    let fraseTentativas = `Você descobiu o número secreto com ${tentativas} ${quantasTentativas}`
      if(chute == numeroSecreto){
             exibirTexto("h1", "Parabéns!");
             exibirTexto("p", fraseTentativas)
            document.getElementById("reiniciar").removeAttribute("disabled")
        }else if(numeroSecreto > chute){
            exibirTexto("p", `O número secreto é maior que: ${chute}`)
            limparCampo()
        } else{
            exibirTexto("p", `O número secreto é menor que: ${chute}`)
            limparCampo()
        } tentativas++
        
    }

// Função que gera o número secreto
function gerarNumeroSecreto(){
    return parseInt(Math.random() * 10 + 1);
}

//Função que chama outra função e exibe a mensagem na tela
function exibirMensagemInicial(){
    exibirTexto("h1", "Jogo do número secreto");
    exibirTexto("p", "Escolha um número entre 1 e 10: ")
}

//Função que limpa o campo do chute
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = " ";
}

//Função que quando clicado o botão "Novo jogo", o jogo é todo reiniciado. 
 function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)

 }

   

enviarMensagemInicial();
//Exibindo a mensagem inicial na tela
function exibirMensagemInicial(tag, texto){
    let preencher = document.querySelector(tag);
    preencher.innerHTML = texto
}

//Mensagem inicial declarada dentro de uma função
function enviarMensagemInicial(){
    exibirMensagemInicial("h1", "Vamos medir seu IMC: ");
    exibirMensagemInicial("p", "Digite a sua altura: ");
}

function verificarIMC(){
    let peso = document.querySelector("input").value
    console.log(peso)
    let massa = document.querySelector("input").value
    console.log(massa)
}
*/
let listaNumerosSorteados = [];
let numeroMaximo = 3
let tentativa = 1
exibirMensagemInicial()
function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Bem vindo ao jogo do número secreto!")
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10: ")
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
/*
imc(1.70, 115)
function imc(alt, peso){
    let total = peso / (alt * alt)
    console.log(parseInt(total))
}

function calcularFatorial(numero){
if(numero === 0 || numero === 1){
    return 1; 
}
let fatorial = 1;
for(let i = 2; i <= numero; i++){
    fatorial *= i ;
}
return fatorial; 
}

let numero = parseInt(Math.random() * 10 + 1);
console.log(numero)
let resultado = calcularFatorial(numero);
console.log(`O valor fatorial de ${numero} é igual a: ${resultado} `); 

function converterEmDOlar(reais){
    let dolar = 4.8;
    let totalDolar = reais / dolar;
    return parseInt(totalDolar); 
}
let reais = parseInt(Math.random() *10 + 1);
console.log(reais);
let resultado = converterEmDOlar(reais);
let palavraReal = pluralizar(reais, "reais", "real"); 
let palavraDolar = pluralizar(resultado, "dólares", "dólar")
console.log(`Na conversão atual ${reais} ${palavraReal} equivalem a ${resultado} ${palavraDolar}`);


function pluralizar(valor1, valor2, valor3){
    return valor1 > 1? valor2 : valor3;
}



/*
function conversão(valor1, valor2, valor3){
 return valor1 > 1? valor2 : valor3
}
let reais = 5;
let dólar = 1; 
 let palavraReal = conversão(reais, "reais", "real")
 let palavraDolar = conversão(dólar, "dólares", "dólar")
 console.log(`${reais} ${palavraReal} equivalem a ${dólar} ${palavraDolar}`)



function areaePerimetroTotal(raio){
    let area = parseInt(Math.PI * raio * raio)
    let perimetro = parseInt(2 * Math.PI * raio) ;

    console.log(`A área da circunferência é: ${area}`)
    console.log(`O perímetro da circunferência é: ${perimetro}`)
}

let r = 5
areaePerimetroTotal(r)


function tabuada(numero){
    for(let i = 0; i <= 10; i++){
        let multiplicação = numero * i
        console.log(`${numero} x ${i} = ${multiplicação}`)
    }
}
let num = parseInt(Math.random() * 10 + 1)
tabuada(num)

let listaGenerica = []; 
var linguagensDeProgramacao = ['JavaScript',"C","C++","Kotlin","Python"] ;
acrescentarArray("Java");
acrescentarArray("Ruby");
acrescentarArray("GoLang");
console.log(linguagensDeProgramacao);

function acrescentarArray(texto){
    linguagensDeProgramacao.push(texto)
}

let nomes = ["Iuri", "Mônica", "Célio"];
nomes.push("MaduDuarda")
nomes.pop()
console.log(nomes[2]);
*/