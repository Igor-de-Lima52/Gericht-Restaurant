const language = 'portuguese';

let texts = {
  title: "Chef's World",
  subtitle: "What we believe in",
  paragraph1: "Our philosophy is simple: cook with love and respect for the ingredients.",
  paragraph2: "We value local suppliers, strive for sustainability, and always strive to surprise those who sit at our table.",
  paragraph3: "Chef & Founder",
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
      paragraph1: "Nossa filosofia é simples: cozinhar com amor e respeito pelos ingredientes.",
      paragraph2: "Valorizamos fornecedores locais, prezamos pela sustentabilidade e buscamos sempre surpreender quem se senta à mesa.",
      paragraph3: "Chef & Fundador",
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
      paragraph1: "Our philosophy is simple: cook with love and respect for the ingredients.",
      paragraph2: "We value local suppliers, strive for sustainability, and always strive to surprise those who sit at our table.",
      paragraph3: "Chef & Founder",
    }

    altTexts = {
      altImg: "Chef image",
      altQuote: "Quote",
      altSign: "Sign"
    }
    
    break;
}

export { texts, altTexts };