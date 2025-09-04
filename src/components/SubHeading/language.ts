const language = 'portuguese';

let altTextSpoon = "Small yellow spoon";

switch(language) {
  case 'portuguese':
    altTextSpoon = "Pequena colher amarela";

    break;
  
  default:
    altTextSpoon = "Small yellow spoon";
    
    break;
}

export { altTextSpoon };