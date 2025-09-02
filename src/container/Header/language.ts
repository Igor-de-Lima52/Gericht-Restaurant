const language = 'portuguese';

let texts = {
  title: "The Key to Fine Dining",
  subtitle: "Chase the new flavour",
  btnTitle: "Explore Menu",
  paragraph: "",
}

let altTexts = {
  altImg: "Grilled chicken with orange lemon seasoning on top",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "A Chave para um Ótimo Jantar",
      subtitle: "Vá atrás do novo sabor",
      btnTitle: "Explorar Cardápio",
      paragraph: "",
    }

    altTexts = {
      altImg: "Frango grelhado com tempero laranja e limão em cima",
    }

    break;
  
  default:
    texts = {
      title: "The Key to Fine Dining",
      subtitle: "Chase the new flavour",
      btnTitle: "Explore Menu",
      paragraph: "",
    }

    altTexts = {
      altImg: "Grilled chicken with orange lemon seasoning on top",
    }
    
    break;
}

export { texts, altTexts };