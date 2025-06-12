function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  let sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)) {
      numero = sortear(de, ate);
    }
    sorteados.push(numero);
    alterarStatusBotao();
    let palavraNumeroSorteado =
      sorteados.length > 1 ? "Números sorteados" : "Número sorteado";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">${palavraNumeroSorteado}: ${sorteados.join(
      ", "
    )}</label>`;
  }
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");

  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function limparCampo() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
}

function reiniciar() {
  limparCampo();
  alterarStatusBotao();
}
