import { PilgrimageFeature } from "@/components/PilgrimageFeature";
import { Reveal } from "@/components/Reveal";
import { pilgrimages } from "@/content/site";

export const metadata = {
  title: "Pilgrimages"
};

export default function PilgrimagesPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Pilgrimages</p>
        <h1>Sacred travel and preparation</h1>
        <p>Planning notes, destination summaries, and spiritual preparation for upcoming journeys.</p>
      </section>
      <Reveal className="section alt">
        <div className="pilgrimage-path">
          {pilgrimages.map((pilgrimage, index) => (
            <PilgrimageFeature key={pilgrimage.slug} pilgrimage={pilgrimage} reverse={index % 2 === 1} />
          ))}
        </div>
      </Reveal>
    </>
  );
}
