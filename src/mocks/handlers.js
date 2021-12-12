import { rest } from 'msw'

const plantsData = [
  {
    name: "Peperomia Rosso",
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:
      "https://ae01.alicdn.com/kf/H87df2b86cfba4b109ec5b2c008e9a404q/AYVVPII-Lossless-Player-Bluetooth-Headphones-with-Microphone-Wireless-Stereo-Headset-Music-for-Iphone-Samsung-Xiaomi-mp3.jpg_50x50.jpg_.webp",
    sizes: ["small"],
    watering: 2,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides.",
    price: 21,
  },
  {
    name: "String of Dolphins",
    id: 125341,
    scientificName: "Senecio peregrinus",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
    sizes: ["small"],
    watering: 2,
    description:
      "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins.",
    price: 15,
  },
  {
    name: "Snake Plant",
    id: 4893,
    scientificName: "Sansevieria zeylanica",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
    sizes: ["small", "medium"],
    watering: 2,
    description:
      "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition.",
    price: 18,
  },
  {
    name: "ZZ Plant",
    id: 48563,
    scientificName: "Zamioculcas zamiifolia",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
    sizes: ["small", "medium"],
    watering: 2,
    description:
      "He's able to go without water for weeks on end and can survive in almost any light condition.",
    price: 18,
  },
  {
    name: "Jade Plant",
    id: 498697,
    scientificName: "Crassula ovata",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_JADE-1_800x.png?v=1587153094",
    sizes: ["small"],
    watering: 2,
    description:
      "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. ",
    price: 15,
  },
  {
    name: "Rabbit Foot Fern",
    id: 967391,
    scientificName: "Davallia fejeensis",
    difficulty: "medium",
    light: "indirect",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_RABBITSFOOT-1_800x.png?v=1587152433",
    sizes: ["small"],
    watering: 4,
    description:
      "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. ",
    price: 22,
  },
  {
    name: "Peace Lily",
    id: 2358,
    scientificName: "Spathiphyllum wallisii",
    difficulty: "medium",
    light: "low",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
    sizes: ["small", "medium"],
    watering: 6,
    description:
      "Don't let the 'peace' part fool you—she's here to grab your attention by the horns with her lush leaves",
    price: 26,
  },
  {
    name: "Staghorn Fern",
    id: 67148,
    scientificName: "Platycerium bifurcatum",
    difficulty: "medium",
    light: "indirect",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_STAGHORN-11_800x.png?v=1587427931",
    sizes: ["small"],
    watering: 2,
    description:
      "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils.",
    price: 15,
  },
];

export const handlers = [
  // Handles a GET /plants request
  rest.get('http://localhost:3333/plants', (req, res, ctx) => {
    console.log('response: ', { plantsData })
      return res(
        ctx.status(200),
        ctx.json(plantsData),
      )
  }),
]