const language = 'portuguese';

let texts = {
  title: "Chef's World",
  subtitle: "What we believe in",
  paragraph: "Chef & Founder"
}

let altTexts = {
  altImg: "Chef image",
  altQuote: "Quote",
  altSign: "Sign"
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Mundo do chef",
      subtitle: "O que nós acreditamos",
      paragraph: "Chef & Fundador"
    }

    altTexts = {
      altImg: "Foto do Chef",
      altQuote: "Aspas",
      altSign: "Assinatura"
    }

    break;
  
  default:
    texts = {
      title: "Chef's World",
      subtitle: "What we believe in",
      paragraph: "Chef & Founder"
    }

    altTexts = {
      altImg: "Chef image",
      altQuote: "Quote",
      altSign: "Sign"
    }
    
    break;
}

export { texts, altTexts };