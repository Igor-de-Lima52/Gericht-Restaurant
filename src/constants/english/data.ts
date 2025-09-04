import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbec",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieille Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$31",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$26",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Spritz",
    price: "$20",
    tags: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark rum | Ginger beer | Slice of lime",
  },
  {
    title: "Daiquiri",
    price: "$10",
    tags: "Rum | Citrus juice | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$31",
    tags: "Bourbon | Brown sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$26",
    tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Recognition for our commitment to bringing freshness and creativity to local cuisine.",
  },
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Award given for the quality of the cuisine and excellent value for money.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Kevin Luo was honored for his innovative style and respect for culinary traditions.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Award for excellence in service and welcoming environment.",
  },
];

export default { wines, cocktails, awards };
