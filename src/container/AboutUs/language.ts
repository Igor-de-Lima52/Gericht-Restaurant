const language = 'portuguese';

let texts = {
  title: "Chef's World",
  subtitle1: "About us",
  subtitle2: "Our history",
  btnTitle: "Know more",
  paragraph1: "",
  paragraph2: "",
}

let altTexts = {
  altG: "G letter",
  altSpoon: "Small yellow spoon",
  altSign: "Chef's Sign"
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Mundo do chef",
      subtitle1: "Sobre",
      subtitle2: "Nossa História",
      btnTitle: "Saber mais",
      paragraph1: "",
      paragraph2: "",
    }

    altTexts = {
      altG: "Letra G",
      altSpoon: "Pequena colher amarela",
      altSign: "Assinatura do Chef"
    }

    break;
  
  default:
    texts = {
      title: "Chef's World",
      subtitle1: "About us",
      subtitle2: "Our history",
      btnTitle: "Know more",
      paragraph1: "",
      paragraph2: "",
    }

    altTexts = {
      altG: "G letter",
      altSpoon: "Small yellow spoon",
      altSign: "Chef's Sign"
    }
    
    break;
}

export { texts, altTexts };