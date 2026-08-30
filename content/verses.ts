import type { LiturgicalSeason } from "@/content/liturgical";

export type Verse = {
  text: string;
  reference: string;
};

export const versesBySeason: Record<LiturgicalSeason, Verse> = {
  advent: {
    text: "The people who walked in darkness have seen a great light.",
    reference: "Isaiah 9:2"
  },
  christmas: {
    text: "The Word became flesh and made his dwelling among us.",
    reference: "John 1:14"
  },
  lent: {
    text: "Rend your hearts, and not your garments, and return to the Lord your God.",
    reference: "Joel 2:13"
  },
  easter: {
    text: "He is not here, for he has been raised, just as he said.",
    reference: "Matthew 28:6"
  },
  ordinary: {
    text: "Be still, and know that I am God.",
    reference: "Psalm 46:10"
  }
};
