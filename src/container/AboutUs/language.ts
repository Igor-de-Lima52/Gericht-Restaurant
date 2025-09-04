const language = 'portuguese';

let link = "About";

let texts = {
  title: "Chef's World",
  subtitle1: "About us",
  subtitle2: "Our history",
  btnTitle: "Know more",
  paragraph1: "At Gericht, we believe that good food goes beyond the plate: it's a way to connect people. Our space was created to be warm and inviting, ideal for gatherings, celebrations, and special moments.",
  paragraph2: "Gericht was born from a passion for transforming simple ingredients into memorable dishes. From the beginning, we've strived to combine the tradition of home cooking with modern touches, always maintaining the essence of flavor that brings people together and inspires.",
}

let altTexts = {
  altG: "G letter",
  altSpoon: "Small yellow spoon",
  altKnife: "Big knife",
  altSign: "Chef's Sign",
}

switch(language) {
  case 'portuguese':
    link = "Sobre";

    texts = {
      title: "Mundo do chef",
      subtitle1: "Sobre",
      subtitle2: "Nossa História",
      btnTitle: "Saber mais",
      paragraph1: "No Gericht, acreditamos que a boa comida vai além do prato: é uma forma de conexão entre pessoas. Nosso espaço foi criado para ser acolhedor e convidativo, ideal para encontros, celebrações e momentos especiais.",
      paragraph2: "O Gericht nasceu da paixão por transformar ingredientes simples em pratos memoráveis. Desde o início, buscamos unir a tradição da cozinha caseira com toques modernos, sempre mantendo a essência do sabor que aproxima e emociona.",
    }

    altTexts = {
      altG: "Letra G",
      altSpoon: "Pequena colher amarela",
      altKnife: "Faca grande",
      altSign: "Assinatura do Chef",
    }

    break;
  
  default:
    link = "About";

    texts = {
      title: "Chef's World",
      subtitle1: "About us",
      subtitle2: "Our history",
      btnTitle: "Know more",
      paragraph1: "At Gericht, we believe that good food goes beyond the plate: it's a way to connect people. Our space was created to be warm and inviting, ideal for gatherings, celebrations, and special moments.",
      paragraph2: "Gericht was born from a passion for transforming simple ingredients into memorable dishes. From the beginning, we've strived to combine the tradition of home cooking with modern touches, always maintaining the essence of flavor that brings people together and inspires.",
    }

    altTexts = {
      altG: "G letter",
      altSpoon: "Small yellow spoon",
      altKnife: "Big knife",
      altSign: "Chef's Sign",
    }
    
    break;
}

export { texts, altTexts, link };