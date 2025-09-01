const language = 'portuguese';

let texts = {
  title: "Chef's World",
  subtitle1: "Contact Us",
  subtitle2: "Working hours",
  paragraphAddress: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
  number1: "+44 20 7555 1230",
  number2: "+44 20 7344 1230",
  paragraphLogo: '"The best way to find yourself is to lose yourself inn the service of others."',
  rightsReserved: "Gerítch. All rights reserved.",
  info1: "Monday-Friday:",
  info2: "10:00 am - 02:00 am",
  info3: "Saturday-Sunday:",
  info4: "10:00 am - 03:00 am",
}

let altTexts = {
  altImgLogo: "Small yellow spoon",
  altQuote: "Quote",
  altSign: "Sign"
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Mundo do chef",
      subtitle1: "Entre em contato",
      subtitle2: "Horário de funcionamento",
      paragraphAddress: "Avenida Afonso Pena, 1350 - Centro Belo Horizonte - MG, 30130-003",
      number1: "+55 11 95555-1230",
      number2: "+55 11 93444-1230",
      paragraphLogo: '"A melhor maneira de se encontrar é se perder no serviço aos outros."',
      rightsReserved: "Gerítch. Todos os direitos reservados.",
      info1: "Segunda-Sexta:",
      info2: "10:00 am - 02:00 am",
      info3: "Sábado-Domingo:",
      info4: "10:00 am - 03:00 am:",
    }

    altTexts = {
      altImgLogo: "Pequena colher amarela",
      altQuote: "Aspas",
      altSign: "Assinatura"
    }

    break;
  
  default:
    texts = {
      title: "Chef's World",
      subtitle1: "Contact Us",
      subtitle2: "Working hours",
      paragraphAddress: "Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG",
      number1: "+44 20 7555 1230",
      number2: "+44 20 7344 1230",
      paragraphLogo: '"The best way to find yourself is to lose yourself inn the service of others."',
      rightsReserved: "Gerítch. All rights reserved.",
      info1: "Monday-Friday:",
      info2: "10:00 am - 02:00 am",
      info3: "Saturday-Sunday:",
      info4: "10:00 am - 03:00 am",
    }

    altTexts = {
      altImgLogo: "Small yellow spoon",
      altQuote: "Quote",
      altSign: "Sign"
    }
    
    break;
}

export { texts, altTexts };