const INDEX_DATA = {
  masthead: {
    title: "The Borrowed Identity Index",
    standfirst:
      "A reference of a self, assembled from images I saved but did not make. " +
      "Compiled automatically from one Pinterest export. Every entry is borrowed.",
    stats:
      "240 pins saved · 25 indexed · 12 categories inferred · 0 made by me",
  },

  entries: [
    {
      id: "e001",
      img: "e001.jpg",
      category: "home_decor",
      term: "Apartment",
      definition:
        "A set of rooms that are mine, but I did not design or furnish. An arrangement someone else made.",
      source: "Pinterest, saved Mar 2024",
    },
    {
      id: "e002",
      img: "22.jpg",
      category: "home_decor",
      term: "Kitchen",
      definition:
        "I've saved eleven versions of this exact kitchen. I don't cook.",
      source: "Pinterest, saved Jan 2024",
    },
    {
      id: "e003",
      img: "23.jpg",
      category: "home_decor",
      term: "Shelf",
      definition:
        "The way I want my things arranged. None of these are my things.",
      source: "Pinterest, saved Nov 2023",
    },
    {
      id: "e004",
      img: "24.jpg",
      category: "home_decor",
      term: "Lamp",
      definition:
        "Warm, tasteful, expensive. I have an overhead light and a lease.",
      source: "Pinterest, saved Feb 2024",
    },
    {
      id: "e005",
      img: "25.jpg",
      category: "home_decor",
      term: "Corner",
      definition:
        "A reading nook for a person with time to read. I pinned it at 2am.",
      source: "Pinterest, saved Aug 2024",
    },

    {
      id: "e006",
      img: "1.jpg",
      category: "womens_fashion",
      term: "Outfits",
      definition:
        "Clothing inspiration I've borrowed and am wearing as an identity.",
      source: "Pinterest, saved Apr 2024",
    },
    {
      id: "e007",
      img: "2.jpg",
      category: "womens_fashion",
      term: "Coat",
      definition:
        "I think this is my style. I have no memory of deciding that.",
      source: "Pinterest, saved Oct 2023",
    },
    {
      id: "e008",
      img: "3.jpg",
      category: "womens_fashion",
      term: "Slip dress",
      definition:
        "Saved under 'me.' Worn by someone else, photographed by someone else, sold to me.",
      source: "Pinterest, saved May 2024",
    },
    {
      id: "e009",
      img: "4.jpg",
      category: "womens_fashion",
      term: "Wardrobe",
      definition: "Forty outfits pinned. I wear the same five things.",
      source: "Pinterest, saved Jun 2024",
    },

    {
      id: "e010",
      img: "5.jpg",
      category: "weddings",
      term: "Ceremony",
      definition: "This is the wedding I've planned. I'm not seeing anyone.",
      source: "Pinterest, saved Jul 2024",
    },
    {
      id: "e011",
      img: "6.jpg",
      category: "weddings",
      term: "Table setting",
      definition: "I know the flowers I want. I don't know the person.",
      source: "Pinterest, saved Jul 2024",
    },
    {
      id: "e012",
      img: "7.jpg",
      category: "weddings",
      term: "Dress",
      definition: "Pinned before anyone asked. The board was ready first.",
      source: "Pinterest, saved Sep 2023",
    },

    {
      id: "e013",
      img: "8.jpg",
      category: "skincare",
      term: "Routine",
      definition:
        "Skincare, nine percent. I'm being sold aging before I feel it.",
      source: "Pinterest, saved Dec 2023",
    },
    {
      id: "e014",
      img: "9.jpg",
      category: "skincare",
      term: "Serum",
      definition:
        "The version of my face that needs correcting, according to my saves.",
      source: "Pinterest, saved Feb 2024",
    },

    {
      id: "e015",
      img: "10.jpg",
      category: "real_estate",
      term: "Listing",
      definition:
        "The board says forty apartments. I've lived in the same one for three years.",
      source: "Pinterest, saved Mar 2024",
    },
    {
      id: "e016",
      img: "11.png",
      category: "real_estate",
      term: "Floor plan",
      definition: "A house I'll never afford, saved like a plan.",
      source: "Pinterest, saved Jan 2024",
    },

    {
      id: "e017",
      img: "12.jpg",
      category: "luxury_goods",
      term: "Bag",
      definition:
        "Someone captioned this 'quiet luxury.' I saved it before I knew that meant me.",
      source: "Pinterest, saved May 2024",
    },
    {
      id: "e018",
      img: "13.jpg",
      category: "luxury_goods",
      term: "Watch",
      definition:
        "I don't want the time. I want to look like a person who has this.",
      source: "Pinterest, saved Apr 2024",
    },

    {
      id: "e019",
      img: "14.jpg",
      category: "homeownership",
      term: "Porch",
      definition: "A life stage I'm being shown early. I saved it on schedule.",
      source: "Pinterest, saved Aug 2024",
    },
    {
      id: "e020",
      img: "16.jpg",
      category: "homeownership",
      term: "Backyard",
      definition: "The system thinks I'm nesting. I'm subletting.",
      source: "Pinterest, saved Jun 2024",
    },

    {
      id: "e021",
      img: "15.jpg",
      category: "minimalism",
      term: "Empty room",
      definition:
        "I pin emptiness constantly. My room is full of things I didn't choose either.",
      source: "Pinterest, saved Nov 2023",
    },

    {
      id: "e022",
      img: "17.jpg",
      category: "cottagecore",
      term: "Field",
      definition:
        "A softer self, pre-selected. I have never been to a field like this.",
      source: "Pinterest, saved Jul 2024",
    },

    {
      id: "e023",
      img: "18.jpg",
      category: "bridal",
      term: "Veil",
      definition: "Bridal, five percent. I didn't tell it that. It decided.",
      source: "Pinterest, saved Sep 2023",
    },

    {
      id: "e024",
      img: "19.jpg",
      category: "investing",
      term: "Portfolio",
      definition:
        "Saved next to skincare and weddings. The system files my future under the same tab as my face.",
      source: "Pinterest, saved Oct 2023",
    },

    {
      id: "e025",
      img: "20.jpg",
      category: "weight_loss",
      term: "Workout",
      definition:
        "Weight loss, two percent. The smallest number, and the one I want to talk about least.",
      source: "Pinterest, saved Dec 2023",
    },
  ],

  minFallbackLength: 3,

  queries: {
    home: ["home_decor", "cottagecore", "minimalism", "homeownership"],
    house: ["real_estate", "homeownership"],
    wedding: ["weddings", "bridal"],
    marriage: ["weddings", "bridal", "real_estate"],
    money: ["investing", "luxury_goods", "real_estate"],
    luxury: ["luxury_goods"],
    rich: ["luxury_goods", "real_estate"],
    body: ["skincare", "weight_loss"],
    face: ["skincare"],
    style: ["womens_fashion", "minimalism"],
    clothes: ["womens_fashion"],
    fashion: ["womens_fashion"],

    me: [],
    myself: [],
    mine: [],
    self: [],
    i: [],
    love: [],
    real: [],
  },

  categoryLabels: {
    home_decor: "Home decor",
    womens_fashion: "Women's fashion",
    weddings: "Weddings",
    skincare: "Skincare",
    real_estate: "Real estate",
    luxury_goods: "Luxury goods",
    homeownership: "Homeownership",
    minimalism: "Minimalism",
    cottagecore: "Cottagecore",
    bridal: "Bridal",
    investing: "Investing",
    weight_loss: "Weight loss",
  },
};
