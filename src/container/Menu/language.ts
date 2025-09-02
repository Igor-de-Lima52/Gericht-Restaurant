const language = 'portuguese';

let texts = {
  title: "Today's Special",
  subtitle1: "Menu that fits you palette",
  subtitle2: "Wine & Beer",
  subtitle3: "Cocktails",
  btnTitle: "View More",
}

let altTexts = {
  altImg: "Cocktail cup",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Especial de hoje",
      subtitle1: "Menu que se adapta ao seu paladar",
      subtitle2: "Vinho & Cerveja",
      subtitle3: "Coquetéis",
      btnTitle: "Ver Mais",
    }

    altTexts = {
      altImg: "Copo de Coquetel",
    }

    break;
  
  default:
    texts = {
      title: "Today's Special",
      subtitle1: "Menu that fits you palette",
      subtitle2: "Wine & Beer",
      subtitle3: "Cocktails",
      btnTitle: "View More",
    }

    altTexts = {
      altImg: "Cocktail cup",
    }
    
    break;
}

export { texts, altTexts };