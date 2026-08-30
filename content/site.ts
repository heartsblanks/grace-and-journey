export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string[];
};

export type Pilgrimage = {
  slug: string;
  title: string;
  summary: string;
};

export const posts: BlogPost[] = [
  {
    slug: "welcome-to-grace-and-journey",
    title: "Welcome to Grace & Journey",
    date: "January 2026",
    summary: "An opening note for the site and the story it will carry.",
    body: [
      "Grace & Journey will gather reflections, pilgrimage updates, ministry stories, and practical notes for the community.",
      "This first post is placeholder content. Replace it when the first finished reflection is ready.",
      "The site is arranged like a small journal: simple paths, clear pages, and a quiet place for the reader to pause."
    ]
  },
  {
    slug: "preparing-for-pilgrimage",
    title: "Preparing for Pilgrimage",
    date: "February 2026",
    summary: "A simple framework for prayerful preparation before sacred travel.",
    body: [
      "Pilgrimage preparation can include prayer, reading, practical planning, and space for quiet attention.",
      "Future posts can expand this into checklists, reflections, and location-specific guidance.",
      "A good journey starts before departure: with names written down, intentions gathered, and the heart made less hurried."
    ]
  },
  {
    slug: "ministry-in-motion",
    title: "Ministry in Motion",
    date: "March 2026",
    summary: "Notes for sharing ministry work as it develops.",
    body: [
      "This space can hold updates from ministry life, community needs, invitations, and reflections from service.",
      "Keep each update focused so readers can quickly understand what happened and how to participate.",
      "Short, honest notes often serve best: what happened, who was present, what is needed, and where grace appeared."
    ]
  },
  {
    slug: "inside-the-basilica",
    title: "Inside the Basilica",
    date: "April 2026",
    summary: "A reflection on sacred architecture, silence, and attention.",
    body: [
      "A basilica teaches before anyone speaks. Stone, light, arches, and worn steps all point the visitor toward reverence.",
      "Inside, the scale is not meant to make a person feel small in despair. It is meant to make the soul remember there is room for wonder.",
      "The best pilgrimage moments often arrive quietly: a candle lit, a hymn half-heard, a few minutes where time loosens its grip."
    ]
  },
  {
    slug: "walking-with-a-rosary",
    title: "Walking with a Rosary",
    date: "May 2026",
    summary: "How repeated prayer can steady a journey.",
    body: [
      "A rosary gives the hands something faithful to do while the mind settles and the heart catches up.",
      "On pilgrimage, repeated prayer can become a rhythm for walking, waiting, and listening.",
      "Each bead can hold a person, a place, a worry, or a thanksgiving. By the end, the journey has been prayed through one small step at a time."
    ]
  },
  {
    slug: "a-ministry-table",
    title: "A Ministry Table",
    date: "June 2026",
    summary: "A small reflection on welcome, food, names, and presence.",
    body: [
      "Ministry often begins with a table: a place to sit, speak, listen, and be known by name.",
      "A beautiful website should serve that same work. It should make the next invitation easy to find and the story easy to enter.",
      "Grace & Journey can become a doorway for that welcome: a place where updates, photographs, prayers, and practical next steps stay close together."
    ]
  }
];

export const pilgrimages: Pilgrimage[] = [
  {
    slug: "holy-land",
    title: "Holy Land",
    summary: "Preparation notes and future travel details for a Holy Land pilgrimage."
  },
  {
    slug: "rome-and-assisi",
    title: "Rome and Assisi",
    summary: "A future pilgrimage path through Rome, Assisi, prayer, history, and community."
  }
];

export type PilgrimageDetails = {
  image: string;
  highlights: string[];
};

export const pilgrimageDetails: Record<string, PilgrimageDetails> = {
  "holy-land": {
    image: "/pilgrimage/holy-land.svg",
    highlights: [
      "Sites of Scripture and salvation history",
      "Guided prayer at sacred landmarks",
      "Time for silence, Scripture, and reflection"
    ]
  },
  "rome-and-assisi": {
    image: "/pilgrimage/rome-and-assisi.svg",
    highlights: [
      "The heart of the Church in Rome",
      "Franciscan simplicity in Assisi",
      "Mass, history, and community along the way"
    ]
  }
};
