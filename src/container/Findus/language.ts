const language = 'portuguese';

let link = "Contact";

let texts = {
  title: "Contact",
  subtitle: "Find us",
  paragraph: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
  info: "Opening hours",
  span1: "Mon - Fri: 10:00 am - 02:00 am",
  span2: "Sat - Sun: 10:00 am - 03:00 am",
  btnTitle: "Visit us",
}

let altTexts = {
  altImg: "A drink made with lemon and mint.",
}

switch(language) {
  case 'portuguese':
    link = "Contato";

    texts = {
      title: "Contato",
      subtitle: "Nos encontre",
      paragraph: "Avenida Afonso Pena, 1350 - Centro Belo Horizonte - MG, 30130-003",
      info: "Horário de funcionamento",
      span1: "Seg - Sex: 10:00 am - 02:00 am",
      span2: "Sáb - Dom: 10:00 am - 03:00 am",
      btnTitle: "Nos visite",
    }

    altTexts = {
      altImg: "Uma bebida feita com limão e menta.",
    }

    break;
  
  default:
    link = "Contact";

    texts = {
      title: "Contact",
      subtitle: "Find us",
      paragraph: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
      info: "Opening hours",
      span1: "Mon - Fri: 10:00 am - 02:00 am",
      span2: "Sat - Sun: 10:00 am - 03:00 am",
      btnTitle: "Visit us",
    }

    altTexts = {
      altImg: "A drink made with lemon and mint.",
    }
    
    break;
}

export { texts, altTexts, link };