import { ShellIcon } from "@/components/icons";
import { pilgrimages } from "@/content/site";

export const metadata = {
  title: "Pilgrimages"
};

const pilgrimageDetails: Record<string, { image: string; highlights: string[] }> = {
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

export default function PilgrimagesPage() {
  return (
    <>
      <section className="page-title">
        <p className="eyebrow">Pilgrimages</p>
        <h1>Sacred travel and preparation</h1>
        <p>Planning notes, destination summaries, and spiritual preparation for upcoming journeys.</p>
      </section>
      <section className="section alt">
        <div className="pilgrimage-path">
          {pilgrimages.map((pilgrimage, index) => {
            const details = pilgrimageDetails[pilgrimage.slug];
            return (
              <article
                className={`pilgrimage-feature ${index % 2 === 1 ? "is-reverse" : ""}`}
                key={pilgrimage.slug}
              >
                <div className="pilgrimage-feature-media">
                  <img alt="" aria-hidden="true" src={details?.image} />
                </div>
                <div className="pilgrimage-feature-body">
                  <h2>{pilgrimage.title}</h2>
                  <p>{pilgrimage.summary}</p>
                  {details ? (
                    <ul className="pilgrimage-highlights">
                      {details.highlights.map((highlight) => (
                        <li key={highlight}>
                          <ShellIcon size={18} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
