const language = 'portuguese';

let texts = {
  title: "The Key to Fine Dining",
  subtitle: "Chase the new flavour",
  btnTitle: "Explore Menu",
  paragraph: "Discover a unique gastronomic experience, where tradition and innovation meet on the same plate. Every detail is designed to transform your meal into an unforgettable experience, full of flavor, aroma, and comfort.",
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
      paragraph: "Descubra uma experiência gastronômica única, onde tradição e inovação se encontram no mesmo prato. Cada detalhe é pensado para transformar sua refeição em um momento inesquecível, cheio de sabor, aroma e aconchego.",
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
      paragraph: "Discover a unique gastronomic experience, where tradition and innovation meet on the same plate. Every detail is designed to transform your meal into an unforgettable experience, full of flavor, aroma, and comfort.",
    }

    altTexts = {
      altImg: "Grilled chicken with orange lemon seasoning on top",
    }
    
    break;
}

export { texts, altTexts };