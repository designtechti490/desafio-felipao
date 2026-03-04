// Variáveis;
let nomeHeroi = "Marcelo Junior";
let xp = 1;
let classif = "";

do {
  if (xp < 0) {
    console.log(
      "XP Inválido!, mude a opção xp para um valor maior ou igual a 0",
    );
    break;
  }

  switch (true) {
    case xp < 0:
      console.log(
        "XP Inválido!, mude a opção xp para um valor maior ou igual a 0",
      );
      break;

    case xp <= 1000:
      classif = "Ferro";
      break;

    case xp <= 2000:
      classif = "Bronze";
      break;

    case xp <= 4000:
      classif = "Prata";
      break;

    case xp <= 6000:
      classif = "Ouro";
      break;

    case xp <= 7000:
      classif = "Platina";
      break;

    case xp <= 8000:
      classif = "Diamante";
      break;

    case xp <= 9000:
      classif = "Ascedente";
      break;

    case xp <= 10000:
      classif = "Imortal";
      break;

    default:
      classif = "Radiante";
  }

  console.log("O Herói " + nomeHeroi + " está no nivel " + classif);
  break;
} while (xp >= 0);
