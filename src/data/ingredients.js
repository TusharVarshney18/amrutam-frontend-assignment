export const ingredients = [
  {
    id: "chitrak",
    name: "Chitrak - Plumbago zeylanica",
    sanskrit: "(Sanskrit - चित्रक)",
    image: "/productingredientimages/chitrak.png",
    description:
      "Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body. It is great for boosting metabolism, enhancing skin health, and easing joint pain.",
    why: [
      "Helps lower blood sugar, boosts digestion, and reduces anxiety.",
      "Protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
      "Used in Ayurvedic medicines for indigestion.",
    ],
    prakritiImpact: {
      vata: {
        icon: "/productingredientimages/vata.png",
        note: "Vata Balanced",
      },
      kapha: {
        icon: "/productingredientimages/kapha.png",
        note: "Kapha Balanced",
      },
      pitta: {
        icon: "/productingredientimages/pitta.png",
        note: "Pitta Unbalanced",
      },
    },

    benefits: [
      {
        text: "Calms the nervous system and reduces anxiety.",
        icon: "/productingredientimages/box2.png",
      },
      {
        text: "Reduces cholesterol and supports weight loss.",
        icon: "/productingredientimages/box2.png",
      },
      {
        text: "Manages diabetes by lowering blood sugar levels.",
        icon: "/productingredientimages/box3.png",
      },
      {
        text: "Beneficial in hemorrhoids of Vata origin.",
        icon: "/productingredientimages/box4.png",
      },
      {
        text: "Improves digestion and boosts metabolism.",
        icon: "/productingredientimages/box5.png",
      },
      {
        text: "Prevents deposits in arteries, supporting heart health.",
        icon: "/productingredientimages/box6.png",
      },
      {
        text: "Treats skin conditions like acne and dermatitis.",
        icon: "/productingredientimages/box7.png",
      },
      {
        text: "Speeds up wound healing and promotes new skin growth.",
        icon: "/productingredientimages/box8.png",
      },
    ],

    properties: [
      {
        name: "Rasa (Taste)",
        description: "Katu (Pungent) Stimulates salivation and digestion",
        icon: "/productingredientimages/prop4.png",
      },
      {
        name: "Virya (Potency)",
        description:
          "Ushna (Hot) Increases heat and energy in the body, reduces coldness",
        icon: "/productingredientimages/prop1.png",
      },
      {
        name: "Guna",
        description:
          "Laghu (Light), Ruksha (Dry), Tiksna (Sharp , Easy to digest, reduces heaviness)",
        icon: "/productingredientimages/prop2.png",
      },
      {
        name: "Vipaka",
        description: "Katu (Pungent) — drying & stimulating after digestion",
        icon: "/productingredientimages/prop3.png",
      },
    ],

    formulations: [
      {
        text: "Chitrak Haritaki",
        icon: "/productingredientimages/formula1.png",
      },
      {
        text: "Chitrakadi Vati",
        icon: "/productingredientimages/formula2.png",
      },
      {
        text: "Kalyanagulam",
        icon: "/productingredientimages/formula3.png",
      },
      {
        text: "Chitrakadi Churna",
        icon: "/productingredientimages/formula1.png",
      },
    ],

    therapeuticUses: [
      {
        text: "Agnimandya",
        icon: "/productingredientimages/Therapeutic/icon1.svg",
      },
      {
        text: "Grahani Rog",
        icon: "/productingredientimages/Therapeutic/icon2.svg",
      },
      {
        text: "Arsha",
        icon: "/productingredientimages/Therapeutic/icon3.svg",
      },
      {
        text: "Udara Shula",
        icon: "/productingredientimages/Therapeutic/icon4.svg",
      },
      {
        text: "Gudasotha",
        icon: "/productingredientimages/Therapeutic/icon5.svg",
      },
    ],

    plantParts: [
      {
        part: "Root",
        purpose: "Digestion, Skin conditions, manage blood sugar level.",
        icon: "/productingredientimages/plants/root.svg",
      },
      {
        part: "Root bark",
        purpose: "Manage obesity, metabolism and assist in weight loss.",
        icon: "/productingredientimages/plants/root1.svg",
      },
      {
        part: "Leaves",
        purpose: "Used externally for skin conditions and wounds.",
        icon: "/productingredientimages/plants/leaves.svg",
      },
    ],

    bestCombinedWith: "Pippali, Haritakai, Guggulu, Punarnava, Amla, Giloy.",
    geoLocations: [
      "Native to tropical and subtropical regions worldwide, including India and Sri Lanka.",
    ],
    products: [1, 2, 3, 4], // IDs of products that use Chitrak
  },
  {
    id: "amla",
    name: "amla - Phyllanthus emblica",
    sanskrit: "Sanskrit - चित्रक",
    image: "/ingredients/chitrak.png",
    description:
      "Chitrak, also known as Ceylon Leadwort or Doctorbush, is a powerful Ayurvedic herb valued for its ability to improve digestion, reduce inflammation, and detoxify the body.",
    why: [
      "Helps lower blood sugar, boosts digestion, and reduces anxiety.",
      "Protects the skin and speeds up wound healing with its antioxidant and antimicrobial properties.",
      "Used in Ayurvedic medicines for indigestion.",
    ],
    prakritiImpact: {
      vata: { label: "Vata Balanced", status: "Balanced" },
      kapha: { label: "Kapha Balanced", status: "Balanced" },
      pitta: { label: "Pitta Unbalanced", status: "Unbalanced" },
    },
    benefits: [
      "Calms the nervous system and reduces anxiety.",
      "Reduces cholesterol and supports weight loss.",
      "Manages diabetes by lowering blood sugar levels.",
      "Beneficial in hemorrhoids of Vata origin.",
      "Improves digestion and boosts metabolism.",
      "Prevents deposits in arteries, supporting heart health.",
      "Treats skin conditions like acne and dermatitis.",
      "Speeds up wound healing and promotes new skin growth.",
    ],
    properties: [
      { name: "Rasa (Taste)", description: "Katu (Pungent)" },
      { name: "Virya (Potency)", description: "Ushna (Hot)" },
      // ...
    ],
    formulations: [
      "Chitrak Haritaki",
      "Chitrakadi Vati",
      "Kalyanagulam",
      "Chitrakadi Churna",
    ],
    therapeuticUses: [
      "Agnimandya",
      "Grahani Rog",
      "Arsha",
      "Udara Shula",
      "Gudasotha",
    ],
    plantParts: [
      {
        part: "Root",
        purpose: "Digestion, skin conditions, manage blood sugar level.",
      },
      { part: "Root bark", purpose: "Manage obesity, metabolism." },
      {
        part: "Leaves",
        purpose: "Used externally for skin conditions and wounds.",
      },
    ],
    bestCombinedWith: "Pippali, Haritakai, Guggulu, Punarnava, Amla, Giloy.",
    geoLocations: [
      "Native to tropical and subtropical regions worldwide, including India and Sri Lanka.",
    ],
    products: [1, 2, 3, 4], // IDs of products that use Chitrak
  },
];
