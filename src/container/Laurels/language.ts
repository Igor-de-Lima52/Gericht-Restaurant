const language = 'portuguese';

let link = "Awards";

let texts = {
  title: "Our Laurels",
  subtitle: "Awards & Recognition",
}

let altTexts = {
  altImg: "A grilled chicken with some asparagus and cherry tomatoes",
}

switch(language) {
  case 'portuguese':
    link = "Premios";

    texts = {
      title: "Nossos destaques",
      subtitle: "Prêmios & Reconhecimento",
    }

    altTexts = {
      altImg: "Um frango grelhado com aspargo tomates cereja",
    }

    break;
  
  default:
    link = "Awards";

    texts = {
      title: "Our Laurels",
      subtitle: "Awards & Recognition",
    }

    altTexts = {
      altImg: "A grilled chicken with some asparagus and cherry tomatoes",
    }
    
    break;
}

export { texts, altTexts, link };