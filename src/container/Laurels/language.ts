const language = 'portuguese';

let texts = {
  title: "Our Laurels",
  subtitle: "Awards & Recognition",
  paragraph: "",
}

let altTexts = {
  altImg: "A grilled chicken with some asparagus and cherry tomatoes",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Nossos destaques",
      subtitle: "Prêmios & Reconhecimento",
      paragraph: "",
    }

    altTexts = {
      altImg: "Um frango grelhado com aspargo tomates cereja",
    }

    break;
  
  default:
    texts = {
      title: "Our Laurels",
      subtitle: "Awards & Recognition",
      paragraph: "",
    }

    altTexts = {
      altImg: "A grilled chicken with some asparagus and cherry tomatoes",
    }
    
    break;
}

export { texts, altTexts };