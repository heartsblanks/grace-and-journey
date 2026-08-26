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
    date: "Planning",
    summary: "An opening note for the site and the story it will carry.",
    body: [
      "Grace & Journey will gather reflections, pilgrimage updates, ministry stories, and practical notes for the community.",
      "This first post is placeholder content. Replace it when the first finished reflection is ready."
    ]
  },
  {
    slug: "preparing-for-pilgrimage",
    title: "Preparing for Pilgrimage",
    date: "Planning",
    summary: "A simple framework for prayerful preparation before sacred travel.",
    body: [
      "Pilgrimage preparation can include prayer, reading, practical planning, and space for quiet attention.",
      "Future posts can expand this into checklists, reflections, and location-specific guidance."
    ]
  },
  {
    slug: "ministry-in-motion",
    title: "Ministry in Motion",
    date: "Planning",
    summary: "Notes for sharing ministry work as it develops.",
    body: [
      "This space can hold updates from ministry life, community needs, invitations, and reflections from service.",
      "Keep each update focused so readers can quickly understand what happened and how to participate."
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
