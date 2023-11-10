let listaDeNumeros = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector (tag);
  campo.innerHTML = texto;
}
  
exibirMensagemInicial();

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'jogo do numero secreto');
  exibirTextoNaTela('p', 'escolha um numero entre 1 a 10');

}

function verificarChute() {
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

  } else{
        if(chute > numeroSecreto) {
          exibirTextoNaTela('p', 'o numeiro é menor');
        }else{
          exibirTextoNaTela('p', 'o numero é maior');
        }
        tentativas ++;
        limparCampo();
  }
  }
  function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadesDeElementosNaLista = listaDeNumeros.length;
    if (quantidadesDeElementosNaLista == numeroLimite) {
      listaDeNumeros = [];
    }
    if (listaDeNumeros.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else{
      listaDeNumeros.push(numeroEscolhido);
      console.log(listaDeNumeros);
      return numeroEscolhido;
    }
  }
function limparCampo() {
  chute = document.querySelector ('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();

}

