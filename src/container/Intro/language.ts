const language = 'portuguese';

let texts = {
  videoMessage: "Your browser doesn't support the video.",
}

switch(language) {
  case 'portuguese':
    texts = {
      videoMessage: "Seu navegador não suporta o vídeo",
    }

    break;
  
  default:
    texts = {
      videoMessage: "Your browser doesn't support the video.",
    }

    break;
}

export { texts };