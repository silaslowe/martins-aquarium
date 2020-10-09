const fishCollection = [
  {
    name: "Smily",
    food: "small fish and crustaceans",
    length: 12,
    species: "Deep-Sea Dragonfish",
    location: "Gulf of Mexico",
    image: "martins-pics/dragonfish.jpg",
  },
  {
    name: "Jeff",
    food: "fish, mollusks, worms, and carrion",
    length: 50,
    species: "European Eel",
    location: "Rabat, Morocco",
    image: "martins-pics/eel.jpg",
  },
  {
    name: "Gary",
    food: "frogs",
    length: 12,
    species: "Deep-Sea Dragonfish",
    location: "Gulf of Mexico",
    image: "martins-pics/dragonfish.jpg",
  },
  {
    name: "Jeff",
    food: "fish, mollusks, worms, and carrion",
    length: 48,
    species: "European Eel",
    location: "Rabat, Morocco",
    image: "martins-pics/eel.jpg",
  },
  {
    name: "Gary",
    food: "frogs",
    length: 14,
    species: "Deep-Sea Dragonfish",
    location: "Gulf of Mexico",
    image: "martins-pics/dragonfish.jpg",
  },
  {
    name: "Jeff",
    food: "fish, mollusks, worms, and carrion",
    length: 50,
    species: "European Eel",
    location: "Rabat, Morocco",
    image: "martins-pics/eel.jpg",
  },
];

export const useFish = () => {
  return [...fishCollection];
};

export const useHolyFish = () => {
  const holyFish = [];
  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) holyFish.push(fish);
  }
  return holyFish;
};

export const useSoldierFish = () => {
  const soldierFish = [];
  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 !== 0) soldierFish.push(fish);
  }
  return soldierFish;
};

export const useRegularFish = () => {
  const regularFish = [];
  for (const fish of fishCollection) {
    if (fish.length % 5 !== 0 && fish.length % 3 !== 0) regularFish.push(fish);
  }
  return regularFish;
};
