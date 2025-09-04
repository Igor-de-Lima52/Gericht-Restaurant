const language = 'portuguese';

let texts = {
  title: "Photo Gallery",
  paragraph: "Each dish is a work of art for the eyes and the palate. Our gallery showcases the creations that most delight our customers—colors, textures, and flavors that convey the essence of our cuisine.",
  btnTitle: "View more",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Galeria de fotos",
      paragraph: "Nosso dia a dia é feito de pratos coloridos, cheios de vida e sabor. No Instagram, compartilhamos momentos da cozinha, bastidores e criações exclusivas para inspirar amantes da boa mesa.",
      btnTitle: "Ver mais",
    }

    break;
  
  default:
    texts = {
      title: "Photo Gallery",
      paragraph: "Each dish is a work of art for the eyes and the palate. Our gallery showcases the creations that most delight our customers—colors, textures, and flavors that convey the essence of our cuisine.",
      btnTitle: "View more",
    }

    break;
}

export { texts };