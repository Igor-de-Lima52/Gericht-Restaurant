const language = 'portuguese';

let links = ["home", "about", "menu", "awards", "contact"];

switch(language) {
  case 'portuguese':
    links = ["home", "sobre", "menu", "prêmios", "contato"];

    break;
  
  default:
    links = ["home", "about", "menu", "awards", "contact"];
    
    break;
}

export { links };