const language = 'portuguese';

let texts = {
  title: "Subscribe to our newsletter",
  subtitle: "Newsletter",
  paragraph: "And never miss latest Updates!",
  inputPlaceholder: "Enter your email address",
  btnTitle: "Subscribe",
}

switch(language) {
  case 'portuguese':
    texts = {
      title: "Se inscreva na nossa newsletter",
      subtitle: "Newsletter",
      paragraph: "E nunca perca nossas últimas Atualizações!",
      inputPlaceholder: "Digite seu endereço de email",
      btnTitle: "Se inscreva",
    }

    break;
  
  default:
    texts = {
      title: "Subscribe to our newsletter",
      subtitle: "Newsletter",
      paragraph: "And never miss latest Updates!",
      inputPlaceholder: "Enter your email address",
      btnTitle: "Subscribe",
    }
    
    break;
}

export { texts };