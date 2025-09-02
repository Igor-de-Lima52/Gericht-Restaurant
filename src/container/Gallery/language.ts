const language = 'portuguese';

let texts = {
  title: "Photo Gallery",
  paragraph: "",
  btnTitle: "View more",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Galeria de fotos",
      paragraph: "Chef & Fundador",
      btnTitle: "Ver mais",
    }

    break;
  
  default:
    texts = {
      title: "Photo Gallery",
      paragraph: "Chef & Founder",
      btnTitle: "View more",
    }

    break;
}

export { texts };