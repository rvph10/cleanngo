export interface Review {
  author: string;
  location: string;
  rating: number;
  text: string;
  service?: string;
}

export const googleAggregate = {
  ratingValue: 4.9,
  ratingCount: 15,
};

export const reviews: Review[] = [
  {
    author: "Marie D.",
    location: "Bruxelles",
    rating: 5,
    text: "J'ai deux enfants et un chat, donc mon appartement se salit très vite. CleanNgo est le premier service qui nettoie vraiment en profondeur sans que j'aie besoin de revérifier derrière eux. Un vrai soulagement.",
    service: "nettoyage-residentiel",
  },
  {
    author: "Thomas B.",
    location: "Bruxelles",
    rating: 5,
    text: "Rapides, polis et incroyablement minutieux.",
  },
  {
    author: "Camille V.",
    location: "Bruxelles",
    rating: 4,
    text: "Rentrer chez moi après leur passage change vraiment mon humeur. Tout semble plus léger et l'appartement paraît plus grand. Le seul bémol : je n'ai pas reçu de rappel la veille, mais le résultat était parfait.",
    service: "nettoyage-residentiel",
  },
  {
    author: "Laurent P.",
    location: "Bruxelles",
    rating: 5,
    text: "J'étais sceptique au départ — chaque service que j'avais essayé avant était soit bâclé, soit négligent. Cette équipe m'a vraiment surpris. Ils ont organisé chaque surface et ma petite cuisine n'a jamais semblé aussi lumineuse.",
    service: "nettoyage-residentiel",
  },
  {
    author: "Sophie M.",
    location: "Bruxelles",
    rating: 4,
    text: "Exactement ce dont j'avais besoin après une semaine épuisante. Un léger retard à l'arrivée, mais le résultat final était impeccable. Je les rappelle sans hésiter.",
  },
  {
    author: "Nathalie K.",
    location: "Bruxelles",
    rating: 5,
    text: "Ils ont géré la poussière post-travaux comme des professionnels. Zéro trace, ce qui m'a franchement bluffé.",
    service: "nettoyage-post-travaux",
  },
  {
    author: "Alexia R.",
    location: "Bruxelles",
    rating: 5,
    text: "Ils utilisent des produits naturels, ce qui est essentiel avec mes allergies. L'appartement sent le propre sans cette odeur chimique agressive. Je recommande vraiment.",
    service: "nettoyage-residentiel",
  },
  {
    author: "Julia S.",
    location: "Bruxelles",
    rating: 4,
    text: "Rentrer chez moi après le nettoyage, c'est comme découvrir un autre appartement. Vraiment agréable — juste un créneau légèrement décalé par rapport à ce qui était prévu.",
  },
  {
    author: "Pierre F.",
    location: "Bruxelles",
    rating: 5,
    text: "Mon appartement n'a jamais été aussi calme et ordonné. Je comprends maintenant pourquoi on dit que l'ordre extérieur apaise l'esprit.",
    service: "nettoyage-residentiel",
  },
];

export const reviewColumns: Review[][] = [
  reviews.slice(0, 3),
  reviews.slice(3, 6),
  reviews.slice(6, 9),
];
