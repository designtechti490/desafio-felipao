let vitorias = 0;
let derrotas = 0;

const msg =
  "Número de vitórias ou de derrotas inválido, mude para algum número maior que 0!";

let saldoDeRankeadas = rankingDoJogador(vitorias, derrotas);
let classifNivelJogador = nivelDoJogador(vitorias, derrotas);

while (vitorias < 0 || derrotas < 0) {
  console.log(msg);
  break;
}

while (vitorias >= 0 && derrotas >= 0) {
  console.log(
    `O Herói tem de saldo de ${saldoDeRankeadas} e está no nível de ${classifNivelJogador}`,
  );
  break;
}

function rankingDoJogador(quantVitorias, quantDerrotas) {
  let classif = quantVitorias - quantDerrotas;
  return classif;
}

function nivelDoJogador(vitorias, derrotas) {
  let classVitorias = rankingDoJogador(vitorias, derrotas);
  let nivelJogador = "";

  switch (true) {
    case classVitorias <= 10:
      nivelJogador = "Ferro";
      break;
    case classVitorias <= 20:
      nivelJogador = "Bronze";
      break;
    case classVitorias <= 50:
      nivelJogador = "Prata";
      break;
    case classVitorias <= 80:
      nivelJogador = "Ouro";
      break;
    case classVitorias <= 90:
      nivelJogador = "Diamante";
      break;
    case classVitorias <= 100:
      nivelJogador = "Lendário";
      break;
    default:
      nivelJogador = "Imortal";
  }

  return nivelJogador;
}
