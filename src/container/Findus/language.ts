const language = 'portuguese';

let texts = {
  title: "Contact",
  subtitle: "Find us",
  paragraph: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
  info: "Opening hours",
  span1: "Mon - Fri: 10:00 am - 02:00 am",
  span2: "Sat - Sun: 10:00 am - 03:00 am",
  buttonTitle: "Visit us",
}

let altTexts = {
  altImg: "A drink made with lemon and mint.",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Contato",
      subtitle: "Nos encontre",
      paragraph: "Avenida Afonso Pena, 1350 - Centro Belo Horizonte - MG, 30130-003",
      info: "Horário de funcionamento",
      span1: "Seg - Sex: 10:00 am - 02:00 am",
      span2: "Sáb - Dom: 10:00 am - 03:00 am",
      buttonTitle: "Nos visite",
    }

    altTexts = {
      altImg: "Uma bebida feita com limão e menta.",
    }

    break;
  
  default:
    texts = {
      title: "Contact",
      subtitle: "Find us",
      paragraph: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
      info: "Opening hours",
      span1: "Mon - Fri: 10:00 am - 02:00 am",
      span2: "Sat - Sun: 10:00 am - 03:00 am",
      buttonTitle: "Visit us",
    }

    altTexts = {
      altImg: "A drink made with lemon and mint.",
    }
    
    break;
}

export { texts, altTexts };