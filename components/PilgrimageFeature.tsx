import { ShellIcon } from "@/components/icons";
import { pilgrimageDetails, type Pilgrimage } from "@/content/site";

type PilgrimageFeatureProps = {
  pilgrimage: Pilgrimage;
  eyebrow?: string;
  reverse?: boolean;
};

export function PilgrimageFeature({ pilgrimage, eyebrow, reverse }: PilgrimageFeatureProps) {
  const details = pilgrimageDetails[pilgrimage.slug];

  return (
    <article className={`pilgrimage-feature ${reverse ? "is-reverse" : ""}`}>
      <div className="pilgrimage-feature-media">
        <img alt="" aria-hidden="true" src={details?.image} />
      </div>
      <div className="pilgrimage-feature-body">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
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
}
