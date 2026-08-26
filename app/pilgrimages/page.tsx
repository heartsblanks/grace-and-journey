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
      <section className="section alt">
        <div className="grid">
          {pilgrimages.map((pilgrimage) => (
            <article className="card" key={pilgrimage.slug}>
              <h3>{pilgrimage.title}</h3>
              <p>{pilgrimage.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
