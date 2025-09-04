const language = 'portuguese';

let links = ["Home", "About", "Menu", "Awards", "Contact"];

switch(language) {
  case 'portuguese':
    links = ["Home", "Sobre", "Menu", "Premios", "Contato"];

    break;
  
  default:
    links = ["Home", "About", "Menu", "Awards", "Contact"];
    
    break;
}

export { links };