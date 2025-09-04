import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "R$112",
    tags: "AU | Garrafa",
  },
  {
    title: "Catena Malbec",
    price: "R$118",
    tags: "AU | Garrafa",
  },
  {
    title: "A Velha Rosa",
    price: "R$88",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "R$62",
    tags: "CA | 750 ml",
  },
  {
    title: "Guinness irlandesa",
    price: "R$52",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Spritz",
    price: "R$40",
    tags: "Aperol | Villa Marchesi prosecco | refrigerante | 30ml",
  },
  {
    title: "Escuro e Tempestuoso",
    price: "R$32",
    tags: "Rum escuro | Cerveja de gengibre | Fatia de limão",
  },
  {
    title: "Daiquiri",
    price: "R$20",
    tags: "Rum | Suco cítrico | Açúcar",
  },
  {
    title: "Antiquado",
    price: "R$62",
    tags: "Bourbon | Açúcar mascavo | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "R$52",
    tags: "Gim | Vermute doce | Campari | Guarnição de laranja",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Estrela em Ascensão",
    subtitle: "Reconhecimento pelo nosso compromisso em trazer frescor e criatividade à gastronomia local.",
  },
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Prêmio concedido pela qualidade da cozinha e excelente custo-benefício.",
  },
  {
    imgUrl: images.award03,
    title: "Chef de destaque",
    subtitle: "Kevin Luo foi homenageado por seu estilo inovador e respeito às tradições culinárias.",
  },
  {
    imgUrl: images.award05,
    title: "Hospitalidade AA",
    subtitle: "Premiação pela excelência no atendimento e ambiente acolhedor.",
  },
];

export default { wines, cocktails, awards };
