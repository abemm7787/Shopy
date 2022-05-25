import { rest } from 'msw'

const plantsData = [
  {
    name: "21 Ultra",
    id: 143,
    scientificName: "89,099",
    difficulty: "easy",
    light: "direct",
    img:
      "https://ae01.alicdn.com/kf/H139b50f5699344d0a913806997619d68i/S21-Ultra-Smartphones-Global-Version-Mobile-Phones-Android-10-0-16GB-512GB-Dual-Sim-Smart-Phone.jpg_220x220xz.jpg_.webp",
    sizes: ["small"],
    watering: "4.8 Stars",
    description:
      "Global Version S21 Ultra Smartphone 7.3 HD Inch Android 10.0 Mobile Phones 16GB+512GB.",
    price: 399.99,
  },
  {
    name: "11 T Pro",
    id: 125341,
    scientificName: "9,990",
    difficulty: "easy",
    light: "",
    img:
      "https://ae01.alicdn.com/kf/H640e8a3118a74f6798971c07681f4034M/Smartphone-11T-Pro-16GB-1T-Type-C-7-3-Inch-Mobile-Phone-7300mAh-Android-12-Smartphone.jpg_220x220xz.jpg_.webp",
    sizes: ["small"],
    watering: "4.8 Stars",
    description:
      "Smartphone 11T Pro 16GB 1T Type-C Android 12 Smartphone 10. ",
      price: 499.99,
  },
  // {
  //   name: "Snake Plant",
  //   id: 4893,
  //   scientificName: "Sansevieria zeylanica",
  //   difficulty: "easy",
  //   light: "direct",
  //   img:
  //     "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SANSEVIERIA_ZEYLANICA-1_800x.png?v=1587146468",
  //   sizes: ["small", "medium"],
  //   watering: 2,
  //   description:
  //     "One of the most popular and hardy of houseplants, he's virtually indestructible and adaptable to almost any condition.",
  //   price: 18,
  // },
  // {
  //   name: "ZZ Plant",
  //   id: 48563,
  //   scientificName: "Zamioculcas zamiifolia",
  //   difficulty: "easy",
  //   light: "direct",
  //   img:
  //     "https://cdn.shopify.com/s/files/1/2781/9558/products/6__ZZ-1_800x.png?v=1587411408",
  //   sizes: ["small", "medium"],
  //   watering: 2,
  //   description:
  //     "He's able to go without water for weeks on end and can survive in almost any light condition.",
  //   price: 18,
  // },
  // {
  //   name: "Jade Plant",
  //   id: 498697,
  //   scientificName: "Crassula ovata",
  //   difficulty: "easy",
  //   light: "direct",
  //   img:
  //     "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_JADE-1_800x.png?v=1587153094",
  //   sizes: ["small"],
  //   watering: 2,
  //   description:
  //     "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils. ",
  //   price: 15,
  // },
  // {
  //   name: "Rabbit Foot Fern",
  //   id: 967391,
  //   scientificName: "Davallia fejeensis",
  //   difficulty: "medium",
  //   light: "indirect",
  //   img:
  //     "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_RABBITSFOOT-1_800x.png?v=1587152433",
  //   sizes: ["small"],
  //   watering: 4,
  //   description:
  //     "Fortuna is a beautiful, resilient fern with furry rhizomes that resemble that of a rabbit’s foot. ",
  //   price: 22,
  // },
  // {
  //   name: "Peace Lily",
  //   id: 2358,
  //   scientificName: "Spathiphyllum wallisii",
  //   difficulty: "medium",
  //   light: "low",
  //   img:
  //     "https://cdn.shopify.com/s/files/1/2781/9558/products/6__SPATH_PEACELILY-1_800x.png?v=1587653193",
  //   sizes: ["small", "medium"],
  //   watering: 6,
  //   description:
  //     "Don't let the 'peace' part fool you—she's here to grab your attention by the horns with her lush leaves",
  //   price: 26,
  // },
  // {
  //   name: "Staghorn Fern",
  //   id: 67148,
  //   scientificName: "Platycerium bifurcatum",
  //   difficulty: "medium",
  //   light: "indirect",
  //   img:
  //     "https://cdn.shopify.com/s/files/1/2781/9558/products/FERN_STAGHORN-11_800x.png?v=1587427931",
  //   sizes: ["small"],
  //   watering: 2,
  //   description:
  //     "Originally from South Africa, Jade loves sun-drenched beaches, the occasional surf, and sandy soils.",
  //   price: 15,
  // },
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