import { getLiturgicalInfo } from "@/content/liturgical";
import { versesBySeason } from "@/content/verses";

export function VerseBand() {
  const liturgical = getLiturgicalInfo();
  const verse = versesBySeason[liturgical.season];

  return (
    <section className="verse-band" aria-label="Verse for the season">
      <p className="verse-band-text">&ldquo;{verse.text}&rdquo;</p>
      <p className="verse-band-reference">{verse.reference}</p>
    </section>
  );
}
